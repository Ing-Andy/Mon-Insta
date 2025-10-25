import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../Api/supabaseClient';

export default function Login() {
  const navigate = useNavigate();
  const [forSign, setForSign] = useState<boolean>(true);
  const [mail, setMail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [surName, setSurName] = useState<string>('');

  const handleChangeMode = () => setForSign(!forSign);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (forSign) {
      // Connexion
      const { data, error } = await supabase.auth.signInWithPassword({
        email: mail,
        password: password,
      });

      if (error) {
        console.error('Erreur de connexion :', error.message);
        return;
      }

      if (data.user) {
        navigate('/IG/acceuil');
      } else {
        console.log("Utilisateur non trouvé.");
      }
    } else {
      // Inscription
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email: mail,
        password: password,
      });

      if (signUpError) {
        console.error("Erreur lors de l'inscription :", signUpError.message);
        return;
      }

      const user = signUpData.user;
      if (!user) {
        console.error("Utilisateur non créé");
        return;
      }

      let { data: error } = await supabase.from('users').insert([
        {
          id: signUpData.user?.id,
          name:name,
          surname:surName,
          email:mail,
        }
      ]).select()
      

      if (error) {
        console.error("Erreur lors de l'insertion dans la base :", error);
        return;
      }

      console.log("Inscription réussie !");
      navigate('/IG/acceuil');
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center font-bold font-Poppins text-gray-300 px-4 w-80 border py-4 gap-3"
      >
        <h1 className="text-2xl text-white mb-4">Instagram</h1>

        {!forSign && (
          <>
            <label className="w-full">Name :</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="input-style"
              required
            />
            <label className="w-full">Surname :</label>
            <input
              type="text"
              value={surName}
              onChange={(e) => setSurName(e.target.value)}
              placeholder="Enter your surname"
              className="input-style"
              required
            />
          </>
        )}

        <label className="w-full">Email :</label>
        <input
          type="email"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          placeholder="Enter your email"
          className="input-style"
          required
        />

        <label className="w-full">Password :</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="input-style"
          required
        />

        <button type="submit" className="bg-blue-700 px-4 py-2 rounded hover:bg-blue-600 transition">
          {forSign ? 'Se connecter' : 'Créer un compte'}
        </button>

        <p className="text-gray-400 text-center text-sm">
          {forSign ? "Pas encore de compte ?" : "Déjà inscrit ?"}{' '}
          <span className="cursor-pointer text-blue-500 underline" onClick={handleChangeMode}>
            {forSign ? 'Inscrivez-vous' : 'Connectez-vous'}
          </span>
        </p>
      </form>

      {/* STYLES EN TAILWIND */}
      <style>{`
        .input-style {
          height: 2.5rem;
          width: 100%;
          padding-left: 0.5rem;
          border: 1px solid #ccc;
          background: #111;
          color: white;
          outline: none;
          border-radius: 0.25rem;
        }
        .input-style:focus {
          background: #222;
          border-color: #555;
        }
      `}</style>
    </div>
  );
}
