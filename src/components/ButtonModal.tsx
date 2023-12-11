// ButtonComponent.tsx
import React, { useState } from 'react';
import ModalContent from './ModalContent';
import DisplayImage from './DisplayImage';

const ButtonModal: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const handleUpload = (imageUrl: string) => {
    setUploadedImageUrl(imageUrl);
  };

  return (
    <div>
      <button onClick={openModal} className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Partager son experience
      </button>
      {isModalOpen && <ModalContent onUpload={handleUpload} onClose={() => setIsModalOpen(false)} />}
      {uploadedImageUrl && <DisplayImage imageUrl={uploadedImageUrl} />}
    </div>
  );
};

export default ButtonModal;
