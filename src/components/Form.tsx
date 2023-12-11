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
    "Sciences",
    "Histoire",
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
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-center mb-4">Formulaire</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="prenom" className="block text-sm font-medium text-gray-600">
            Prénom
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            value={prenom}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="niveauScolaire" className="block text-sm font-medium text-gray-600">
            Niveau Scolaire
          </label>
          <select
            id="niveauScolaire"
            name="niveauScolaire"
            value={niveauScolaire}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
            <label htmlFor="classe" className="block text-sm font-medium text-gray-600">
              Classe
            </label>
            <select
              id="classe"
              name="classe"
              value={classe}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            >
              <option value="" disabled>
                Sélectionner la classe
              </option>
              <option value="Papa">Papa</option>
            </select>
          </div>
        )}
        {niveauScolaire === "Secondaire" && (
          <div className="mb-4">
            <label htmlFor="classe" className="block text-sm font-medium text-gray-600">
              Classe
            </label>
            <select
              id="classe"
              name="classe"
              value={classe}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            >
              <option value="" disabled>
                Sélectionner la classe
              </option>
              <option value="Maman">Maman</option>
            </select>
          </div>
        )}
        {niveauScolaire === "Maternelle" && (
          <div className="mb-4">
            <label htmlFor="classe" className="block text-sm font-medium text-gray-600">
              Classe
            </label>
            <select
              id="classe"
              name="classe"
              value={classe}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
          <label className="block text-sm font-medium text-gray-600">Matieres</label>
          <div className="flex space-x-2">
            {matieresOptions.map((matiere) => (
              <label key={matiere} className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="matieres"
                  value={matiere}
                  checked={matieres.includes(matiere)}
                  onChange={handleChange}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
                <span className="ml-2 text-sm text-gray-700">{matiere}</span>
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
