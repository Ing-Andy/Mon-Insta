import React, { useState } from 'react';
import { supabase } from '../Api/supabaseClient';
import { useUser } from '../Api/Context'; // Assuming you need user data for avatar path

export default function CreateProfile() { // Corrected typo: CreateProfile
    const [imageFile, setImageFile] = useState<File | null>(null);
    const [loading, setLoading] = useState(false);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null); // To handle image preview URL
    const { userData } = useUser(); // Get user data from context

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            setImageFile(file);
            setPreviewUrl(URL.createObjectURL(file)); // Create object URL for preview
        } else {
            setImageFile(null);
            setPreviewUrl(null); // Clear preview if no file selected
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true); // Set loading to true at the start

        // 1. Basic Validations
        if (!imageFile) {
            console.error("Veuillez sélectionner un fichier image.");
            setLoading(false);
            return;
        }
        if (!userData || !userData.id) {
            console.error("Utilisateur non connecté ou ID utilisateur manquant. Impossible d'uploader l'avatar.");
            setLoading(false);
            return;
        }

        let uploadedPublicUrl = '';
        try {
            const fileExtension = imageFile.name.split('.').pop();
            // Use user ID in the path for better organization and RLS enforcement
            const uniqueFileName = `avatars/${userData.id}/${Date.now()}.${fileExtension}`;

            // 2. Upload the image to Supabase Storage
            const { data: uploadData, error: uploadError } = await supabase.storage
                .from('images') // Ensure 'images' bucket exists and has RLS policies for uploads
                .upload(uniqueFileName, imageFile, {
                    cacheControl: '3600', // Cache for 1 hour
                    upsert: true, // Allow overwriting if the user uploads a new avatar
                });

            if (uploadError) {
                console.error("Erreur lors de l'upload de l'image:", uploadError.message);
                alert(`Erreur d'upload: ${uploadError.message}`); // User feedback
                setLoading(false);
                return;
            }

            console.log("Image uploadée avec succès ! Path:", uploadData.path);

            // 3. Get the public URL of the uploaded image
            const { data: publicUrlData } = supabase
                .storage
                .from('images')
                .getPublicUrl(uploadData.path);

            uploadedPublicUrl = publicUrlData.publicUrl;
            console.log("URL publique de l'avatar:", uploadedPublicUrl);

            // 4. (Optional) Update user's profile in the 'users' table with the new avatar URL
            // Assuming your 'users' table has a column like 'avatar_url'
            const { error: updateError } = await supabase
                .from('users')
                .update({ avatar_url: uploadedPublicUrl }) // Update 'avatar_url' column
                .eq('id', userData.id); // For the current user

            if (updateError) {
                console.error("Erreur lors de la mise à jour du profil utilisateur:", updateError.message);
                alert(`Erreur de mise à jour du profil: ${updateError.message}`);
                setLoading(false);
                return;
            }

            alert('Avatar mis à jour avec succès !');
            // Reset form/state after successful upload and update
            setImageFile(null);
            setPreviewUrl(null);
            setLoading(false);

        } catch (error: any) {
            console.error("Erreur générale lors de la soumission:", error.message);
            alert(`Une erreur inattendue est survenue: ${error.message}`);
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-md mx-auto ">
            {/* Show image preview */}
            {previewUrl && (
                <img src={previewUrl} alt="Aperçu de l'avatar" className="w-auto h-100 object-cover" />
            )}
            <input type="file" accept="image/*" onChange={handleFileChange} required />
            <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded"
                disabled={loading} // Button disabled when loading
            >
                {loading ? 'Envoi en cours...' : 'Mettre à jour l\'avatar'}
            </button>
        </form>
    );
}