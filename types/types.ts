export interface ButtonProps {
    label: string;
    href?: string;
    onClick?: () => void;
    primary?: boolean;
    className?: string;
  }
  
  export interface ImageProps {
    src: string;
    alt: string;
    width: number;
    height: number;
  }
  
  export interface BannerProps {
    /**
     * Main banner title
     */
    title?: string;
    /**
     * Banner subtitle or description
     */
    subtitle?: string;
    /**
     * Use brand color as background (from CSS variables)
     */
    useBrandColor?: boolean;
    /**
     * Background color class (Tailwind) if not using brand color
     */
    bgColor?: string;
    /**
     * Background image path
     */
    bgImage?: string;
    /**
     * Main image to display in the banner instead of text
     */
    image?: ImageProps;
    /**
     * Array of button objects
     */
    buttons?: ButtonProps[];
    /**
     * Text color class (Tailwind)
     */
    textColor?: string;
    /**
     * Height class (Tailwind)
     */
    height?: string;
    /**
     * Additional classes for the container
     */
    className?: string;
    /**
     * Content alignment
     */
    alignment?: 'left' | 'center' | 'right';
  }

  // Main types for slider components
