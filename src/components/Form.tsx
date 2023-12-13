// Form.tsx

import React, { useState, ChangeEvent, FormEvent } from "react";

interface FormProps {}

const Form: React.FC<FormProps> = () => {
  const [prenom, setPrenom] = useState<string>("");
  const [niveauScolaire, setNiveauScolaire] = useState<string>("");
  const [classe, setClasse] = useState<string>("");
  const [matieres, setMatieres] = useState<string[]>([]);

  const niveauxScolaires: string[] = ["Primaire", "Secondaire", "Maternelle"];

  const matieresOptions: string[] = [
    "Mathématiques",
    "Sciences Physique",
    "Chimie",
    "Français",
    "Anglais",
  ];

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;

    if (name === "prenom") {
      setPrenom(value);
    } else if (name === "niveauScolaire") {
      setNiveauScolaire(value);
      // Réinitialise la classe lorsque le niveau change
      setClasse("");
    } else if (name === "classe") {
      setClasse(value);
    } else if (name === "matieres" && event.target instanceof HTMLInputElement) {
      const { checked } = event.target;
      if (checked) {
        setMatieres([...matieres, value]);
      } else {
        setMatieres(matieres.filter((matiere) => matiere !== value));
      }
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // TODO: Ajouter la logique d'envoi des données
    console.log("Formulaire soumis avec succès !", {
      prenom,
      niveauScolaire,
      classe,
      matieres,
    });
  };

  return (
    <div className="max-w-md mx-auto  p-6 bg-gray-700 text-white ">
      <h2 className="text-2xl font-semibold text-center mb-4">Formulaire</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="prenom" className="block text-sm font-medium text-white">
            Prénom
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={prenom}
            placeholder="Entrez votre prénom."
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="niveauScolaire" className="block text-sm font-medium text-white">
            Niveau Scolaire
          </label>
          <select
            id="niveauScolaire"
            name="niveauScolaire"
            value={niveauScolaire}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
            required
          >
            <option value="" disabled>
              Sélectionner le niveau scolaire
            </option>
            {niveauxScolaires.map((niveau) => (
              <option key={niveau} value={niveau}>
                {niveau}
              </option>
            ))}
          </select>
        </div>
        {niveauScolaire === "Primaire" && (
          <div className="mb-4">
            <label htmlFor="classe" className="block text-sm font-medium text-white">
              Classe
            </label>
            <select
              id="classe"
              name="classe"
              value={classe}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
              required
            >
              <option value="" disabled>
                Sélectionner la classe
              </option>
              <option value="SIL">SIL</option>
              <option value="CP">CP</option>
              <option value="CE1">CE1</option>
              <option value="CE2">CE2</option>
              <option value="CM1">CM1</option>
              <option value="CM2">CM2</option>
            </select>
          </div>
        )}
        {niveauScolaire === "Secondaire" && (
          <div className="mb-4">
            <label htmlFor="classe" className="block text-sm font-medium text-white">
              Classe
            </label>
            <select
              id="classe"
              name="classe"
              value={classe}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
              required
            >
              <option value="" disabled>
                Sélectionner la classe
              </option>
              <option value="6EME">6EME</option>
              <option value="5EME">5EME</option>
              <option value="4EME">4EME</option>
              <option value="3EME">3EME</option>
              <option value="2ND A">2ND A</option>
              <option value="2ND C">2ND C</option>
              <option value="1ere C">1ere C</option>
              <option value="1ere D">1ere D</option>
              <option value="1ere A">1ere A</option>
              <option value="TLE C">TLE C</option>
              <option value="TLE D">TLE D</option>
              <option value="TLE A">TLE A</option>
            </select>
          </div>
        )}
        {niveauScolaire === "Maternelle" && (
          <div className="mb-4">
            <label htmlFor="classe" className="block text-sm font-medium text-white">
              Classe
            </label>
            <select
              id="classe"
              name="classe"
              value={classe}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-gray-800"
              required
            >
              <option value="" disabled>
                Sélectionner la classe
              </option>
              <option value="Mamai">Mamai</option>
            </select>
          </div>
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium text-white">Matieres</label>
          <div className="flex flex-col gap-3">
            {matieresOptions.map((matiere) => (
              <label key={matiere} className="inline-flex items-center text-white">
                <input
                  type="checkbox"
                  name="matieres"
                  value={matiere}
                  checked={matieres.includes(matiere)}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-sm">{matiere}</span>
              </label>
            ))}
          </div>         
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:bg-orange-600"
          >
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
