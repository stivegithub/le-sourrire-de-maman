// ModalContent.tsx
import React, { ChangeEvent, useState } from 'react';

interface ModalContentProps {
  onClose: () => void;
  onUpload: (imageUrl: string) => void;

}

const ModalContent: React.FC<ModalContentProps> = ({ onClose , onUpload}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    setSelectedFile(file || null);
  };
  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('image', selectedFile);

      fetch('http://localhost:2003/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          onUpload(data.imageUrl);
        })
        .catch((error) => console.error('Erreur lors de l\'upload', error));
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md">
        <h2 className="text-2xl font-bold mb-4">Partager son experience</h2>
        <form >
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="photo">
              Photo:
            </label>
             <input type="file" id="photo" name="photo" className="border rounded w-full py-2 px-3" onChange={handleFileChange} />

          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="prenom">
              Prénom:
            </label>
            <input
              className="border rounded w-full py-2 px-3"
              type="text"
              id="prenom"
              name="prenom"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message:
            </label>
            <textarea
              className="border rounded w-full py-2 px-3"
              id="message"
              name="message"
              rows={4}
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={()=>{onClose();handleUpload()  } }
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
            >
              OK
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalContent;
