import { AdvancedSliderProps ,SlideItem } from "./SliderTypes";

// Default image slides
export const defaultImageSlides: SlideItem[] = [
  {
    type: 'image',
    src: '/images/property1.jpg',
    alt: 'Luxury Property in Financial District'
  },
  {
    type: 'image',
    src: '/images/property2.jpg',
    alt: 'Modern Apartment in Gachibowli'
  },
  {
    type: 'image',
    src: '/images/property3.jpg',
    alt: 'Villa in Jubilee Hills'
  }
];

// Default video slides
export const defaultVideoSlides: SlideItem[] = [
  {
    type: 'iframe',
    src: 'https://www.youtube.com/embed/VIDEO_ID_1',
    alt: 'Property Tour Video'
  },
  {
    type: 'iframe',
    src: 'https://www.youtube.com/embed/VIDEO_ID_2',
    alt: 'Hyderabad Real Estate Overview'
  }
];

// Mixed content slides
export const defaultMixedSlides: SlideItem[] = [
  defaultImageSlides[0],
  defaultVideoSlides[0],
  defaultImageSlides[1]
];

// Preset configurations for different slider types
export const imageSliderPreset: AdvancedSliderProps = {
  slides: defaultImageSlides,
  showDots: true,
  showArrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  speed: 500
};

export const videoSliderPreset: AdvancedSliderProps = {
  slides: defaultVideoSlides,
  showDots: false,
  showArrows: true,
  autoplay: false,
  slidesToShow: 1,
  infinite: true
};

export const mixedSliderPreset: AdvancedSliderProps = {
  slides: defaultMixedSlides,
  showDots: true,
  showArrows: true,
  autoplay: true,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  infinite: true
};

export const multipleSliderPreset: AdvancedSliderProps = {
  slides: defaultImageSlides,
  showDots: true,
  showArrows: true,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true
};