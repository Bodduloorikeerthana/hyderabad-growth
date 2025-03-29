// Define the types of content the slider can display
export type SlideType = 'image' | 'iframe';

// Interface for individual slide items
export interface SlideItem {
  /**
   * Type of content (image or iframe)
   */
  type: SlideType;
  
  /**
   * URL or path to the content
   */
  src: string;
  
  /**
   * Alternative text or title for the content
   */
  alt?: string;
}

// Interface for slider navigation options
export interface SliderNavigationProps {
  /**
   * Whether to show navigation dots
   * @default true
   */
  showDots?: boolean;
  
  /**
   * Whether to show navigation arrows
   * @default true
   */
  showArrows?: boolean;
}

// Interface for slider behavior options
export interface SliderBehaviorProps {
  /**
   * Whether to enable autoplay
   * @default true
   */
  autoplay?: boolean;
  
  /**
   * Delay between autoplay transitions (in milliseconds)
   * @default 3000
   */
  autoplaySpeed?: number;
  
  /**
   * Whether slides should loop infinitely
   * @default true
   */
  infinite?: boolean;
  
  /**
   * Number of slides to show at once
   * @default 1
   */
  slidesToShow?: number;
  
  /**
   * Number of slides to scroll at once
   * @default 1
   */
  slidesToScroll?: number;
  
  /**
   * Transition speed (in milliseconds)
   * @default 500
   */
  speed?: number;
}

// Interface for slider appearance options
export interface SliderAppearanceProps {
  /**
   * Additional CSS class names
   */
  className?: string;
  
  /**
   * Height for the slider container
   */
  height?: string;
}

// Main props interface combining all options
export interface AdvancedSliderProps extends 
  SliderNavigationProps, 
  SliderBehaviorProps,
  SliderAppearanceProps {
  /**
   * Array of slides to display
   */
  slides: SlideItem[];
}