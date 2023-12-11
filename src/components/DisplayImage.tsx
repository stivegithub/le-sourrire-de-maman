// DisplayImage.tsx
import React from 'react';

interface DisplayImageProps {
  imageUrl: string;
}

const DisplayImage: React.FC<DisplayImageProps> = ({ imageUrl }) => {
  return (
    <div>
      <img src={imageUrl} alt="Image Téléchargée" />
    </div>
  );
};

export default DisplayImage;
