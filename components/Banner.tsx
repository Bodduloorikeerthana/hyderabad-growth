"use client";

import React from 'react';
import { BannerProps } from '../types/types';

const Banner: React.FC<BannerProps> = ({
  title,
  subtitle,
  useBrandColor = true,
  bgColor,
  bgImage,
  image,
  buttons = [],
  textColor = "text-white",
  height = "h-screen",
  className = "",
  alignment = "center"
}) => {
  // Responsive alignment classes
  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right"
  };

  // Force center alignment on mobile for better appearance
  const mobileAlignmentClass = "items-center text-center";
  const desktopAlignmentClass = alignmentClasses[alignment];
  const responsiveAlignmentClass = `${mobileAlignmentClass} md:${desktopAlignmentClass}`;

  // Determine background styles
  let backgroundStyles: React.CSSProperties = {};
  let backgroundClasses = "";
  
  if (bgImage) {
    backgroundStyles = { 
      backgroundImage: `url(${bgImage})`, 
      backgroundSize: 'cover', 
      backgroundPosition: 'center' 
    };
  } else if (useBrandColor) {
    backgroundStyles = { backgroundColor: 'var(--brand-color)' };
  } else if (bgColor) {
    backgroundClasses = bgColor;
  }

  // Responsive height classes
  // Using smaller height on mobile, original height on larger screens
  const responsiveHeight = height.includes('h-auto') 
    ? 'h-auto' 
    : `h-100 md:${height}`;

  return (
    <div 
      className={`relative ${backgroundClasses} ${responsiveHeight} w-full overflow-hidden ${className}`}
      style={backgroundStyles}
    >
      <div className={`relative flex h-full flex-col justify-center px-4 sm:px-6 py-8 sm:py-12 ${responsiveAlignmentClass}`}>
        {/* If image is provided, show it instead of text */}
        {image ? (
          <div className="mx-auto w-full max-w-full">
            <img
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="rounded-lg w-full max-w-full h-auto object-cover"
            />
          </div>
        ) : (
          /* Otherwise show text content */
          <>
            {title && <h1 className={`mb-2 text-2xl sm:text-3xl md:text-4xl font-bold ${textColor}`}>{title}</h1>}
            {subtitle && <p className={`mb-5 text-base sm:text-lg ${textColor}`}>{subtitle}</p>}
          </>
        )}
        
        {/* Button group - only show if buttons are provided */}
        {buttons.length > 0 && (
          <div className={`mt-4 flex flex-wrap gap-3 sm:gap-4 justify-center md:${alignment === 'center' ? 'justify-center' : alignment === 'right' ? 'justify-end' : 'justify-start'}`}>
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.href || '#'}
                onClick={button.onClick}
                className={`rounded-full px-4 sm:px-6 py-2 text-sm sm:text-base font-medium transition-colors ${
                  button.primary
                    ? 'bg-white text-[var(--brand-color)] hover:bg-gray-100'
                    : 'border border-white text-white hover:bg-white/10'
                } ${button.className || ''}`}
              >
                {button.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;