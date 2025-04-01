import React from 'react';
import Link from 'next/link';

interface CardProps {
  image: string;
  title: string;
  description: string;
  buttonText?: string;
  href?: string; // Added for navigation
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({ 
  image, 
  title, 
  description, 
  buttonText, 
  href,
  onButtonClick 
}) => {
  // Render button content
  const buttonContent = buttonText && (
    <button
      onClick={onButtonClick}
      className="w-full py-2 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
    >
      {buttonText}
    </button>
  );

  // If href is provided, wrap button in Link
  const ButtonWrapper = href ? (
    <Link href={href} className="block">
      {buttonContent}
    </Link>
  ) : (
    buttonContent
  );

  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white transition-all duration-500 ease hover:scale-105 hover:shadow-2xl">
      <img 
        className="w-full h-48 object-cover" 
        src={image} 
        alt={title} 
      />
      <div className="sm:p-4 p-4">
        <h3 className="brand-color font-bold mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-6">{description}</p>
        {ButtonWrapper}
      </div>
    </div>
  );
};

export default Card;