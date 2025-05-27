import { useEffect } from "react";
// import { useUser } from "../Api/Context";
import { supabase } from "../Api/supabaseClient";

type Props = {
  description: string;
  image: string;
  userId: string;
};

export default function post({ image, description,  userId }: Props) {


    const insertPost = async () => {
        if (!userId) return;

        const { data, error } = await supabase.from('posts').insert([
        {
            ImageUrl: image,
            description: description,
            userId: userId,
        },
        ]);

        if (error) {
          console.error("Erreur lors de l'insertion : ", error);
        } else {
          console.log('Insertion réussie : ', data);
        }
    };

    insertPost();

  return null;
}
