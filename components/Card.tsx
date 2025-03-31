import React from 'react';

interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({ image, title, description, buttonText, onButtonClick }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transform transition-all hover:scale-105 hover:shadow-2xl">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
        <p className="text-gray-600 text-sm mb-6">{description}</p>
        {buttonText && (
          <button
            onClick={onButtonClick}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
