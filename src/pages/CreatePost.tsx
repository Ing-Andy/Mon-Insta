import { useId, useState } from 'react';
import { supabase } from '../Api/supabaseClient';
// import Post from '../functions/post'; // S'il s'agit d'une fonction que vous importez
import { useUser } from '../Api/Context';
import { useNavigate } from 'react-router-dom';
// import post from '../functions/post'; // S'il s'agit d'une fonction que vous importez

export default function CreatePost() {
  const [description, setDescription] = useState<string>(''); // Utilisez 'string' au lieu de 'String'
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>(''); // Renommé 'image' en 'imageUrl' pour la clarté
  const { userData } = useUser();
  const navigate = useNavigate();
  const userId = userData?.id;

  const myId = useId(); 

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // 1. Vérifier l'utilisateur et le fichier
    if (!imageFile || !userId) {
      console.error("Fichier ou ID utilisateur manquant. Assurez-vous d'être connecté et d'avoir sélectionné un fichier.");
      setLoading(false);
      return;
    }

    let uploadedPublicUrl = ''; // Variable pour stocker l'URL publique après l'upload

    try {
      const fileExtension = imageFile.name.split('.').pop();
      const uniqueFileName = `${userId}/${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${fileExtension}`; // Exemple plus robuste

      // 2. Uploader l'image
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('images') // Nom de votre bucket
        .upload(uniqueFileName, imageFile, { // Utilisez uniqueFileName et imageFile (l'instance du fichier)
          cacheControl: '3600', // Exemple de cache, en secondes. 3600s = 1 heure
          upsert: false // Mettre à true si vous voulez écraser un fichier existant avec le même nom
        });

      if (uploadError) {
        console.error("Erreur lors de l'upload de l'image:", uploadError.message);
        // Ici, vous pourriez vérifier si c'est une erreur RLS (comme le 400 Bad Request précédent)
        // en analysant uploadError.statusCode ou uploadError.message
        setLoading(false);
        return;
      }

      console.log("Image uploadée avec succès ! Path:", uploadData.path);

      // 3. Récupérer l'URL publique de l'image
      const { data: publicUrlData } = supabase
        .storage
        .from('images')
        .getPublicUrl(uploadData.path); // Utilisez le chemin retourné par l'upload

      uploadedPublicUrl = publicUrlData.publicUrl;
      console.log("URL publique de l'image:", uploadedPublicUrl);
      setImageUrl(uploadedPublicUrl); // Mettre à jour l'état si nécessaire

      // 4. (Optionnel) Appeler votre fonction 'post'
      // Assurez-vous que 'post' est bien la fonction que vous voulez appeler
      // et qu'elle est importée correctement.
      // Si 'post' est la fonction qui insère la référence dans votre table de posts,
      // elle aura probablement besoin de l'URL publique de l'image.
      // Par exemple :
      // await post({
      //   imageUrl: uploadedPublicUrl,
      //   description: description,
      //   userId: userId
      // });

      // Votre ancien code commenté pour la mise à jour des posts dans le profil utilisateur :
      // Il semble que vous essayez d'ajouter le post à une colonne 'posts' de type JSONB
      // dans votre table 'users'. C'est une approche, mais souvent une table 'posts' séparée
      // avec une colonne 'userId' est plus flexible.
      // Si vous continuez avec cette approche, assurez-vous que la colonne 'posts' est
      // bien configurée comme JSONB dans Supabase.

      // Récupérer les posts existants de l'utilisateur
      const { data: userDataFromDb, error: userDataError } = await supabase.from('posts').insert([
        {
          description: description,
          ImageUrl: uploadedPublicUrl,
          userId: userId,
        }
      ])

      if (userDataError) {
        console.error('Erreur récupération posts utilisateur:', userDataError.message);
        setLoading(false);
        return;
      }else if(userDataFromDb) {
        console.log('Posts récupérés avec succès:', userDataFromDb);
      }
      // Créer un nouvel objet post
      const newPost = {
        id: Date.now(), // Ou un UUID, 'id' ici est l'ID de ce post spécifique, pas l'ID de l'utilisateur
        description: description,
        image_url: uploadedPublicUrl, // Utilisez l'URL publique
        created_at: new Date().toISOString(),
      };

      // const updatedPosts = [...existingPosts, newPost];

      // Mettre à jour l'utilisateur avec le nouveau tableau de posts
      // const { error: updateError } = await supabase
      //   .from('users')
      //   .update({ posts: updatedPosts })
      //   .eq('id', userId);

      // if (updateError) {
      //   console.error('Erreur mise à jour posts utilisateur:', updateError.message);
      //   setLoading(false);
      //   return;
      // }

      alert('Post créé avec succès !');
      setDescription('');
      setImageFile(null); // Réinitialiser le fichier
      setImageUrl(''); // Réinitialiser l'URL de l'image
      setLoading(false);
      navigate('/profil'); // Rediriger vers la page d'accueil ou une autre page après la création du post
    } catch (error: any) { // Utilisez 'any' pour attraper tout type d'erreur
      console.error("Erreur générale lors de la soumission du post:", error.message);
      setLoading(false);
    }
  };

  const [athere, setAthere] = useState(false); // Variable inutilisée ici, mais gardée pour ne pas casser le code

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto ">
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description du post"
        className="border p-2"
        required
      />
      {/* Afficher l'aperçu de l'image si un fichier est sélectionné */}
      {imageFile && !athere ? (
        <img src={URL.createObjectURL(imageFile)} alt="Aperçu" className="w-auto h-100 object-cover" />
      ) : null}
      <input type="file" accept="image/*" onChange={handleFileChange} required />
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded"
        disabled={loading}
      >
        {loading ? 'Envoi en cours...' : 'Publier'}
      </button>
    </form>
  );
}