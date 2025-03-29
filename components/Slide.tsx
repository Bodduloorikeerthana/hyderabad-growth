"use client";

import React from 'react';
import Slider from 'react-slick';
import { AdvancedSliderProps,SlideItem } from '../types/SliderTypes';

/**
 * Advanced slider component that supports both images and iframes
 */
const AdvancedSlider: React.FC<AdvancedSliderProps> = ({
  // Slides
  slides,
  
  // Navigation props
  showDots = true,
  showArrows = true,
  
  // Behavior props
  autoplay = true,
  autoplaySpeed = 3000,
  infinite = true,
  slidesToShow = 1,
  slidesToScroll = 1,
  speed = 500,
  
  // Appearance props
  className = '',
  height = 'auto'
}) => {
  // Configure slider settings
  const settings = {
    dots: showDots,
    arrows: showArrows,
    infinite: infinite,
    speed: speed,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToScroll,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(slidesToShow, 2),
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Render a slide based on its type
  const renderSlide = (slide: SlideItem, index: number) => {
    switch (slide.type) {
      case 'image':
        return (
          <div key={index} className="px-2">
            <img 
              src={slide.src} 
              alt={slide.alt || `Slide ${index + 1}`} 
              className="w-full h-auto object-cover rounded-lg"
              style={{ height: height !== 'auto' ? height : 'auto' }}
            />
          </div>
        );
        
      case 'iframe':
        return (
          <div key={index} className="px-2">
            <div className="aspect-video w-full">
              <iframe
                src={slide.src}
                title={slide.alt || `Slide ${index + 1}`}
                allowFullScreen
                className="w-full h-full rounded-lg"
                frameBorder="0"
              />
            </div>
          </div>
        );
        
      default:
        return null;
    }
  };

  return (
    <div className={`slider-container ${className}`}>
      <Slider {...settings}>
        {slides.map((slide, index) => renderSlide(slide, index))}
      </Slider>
    </div>
  );
};

export default AdvancedSlider;