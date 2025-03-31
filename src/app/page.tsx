"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

const PropertyGallery = ({ images }) => {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Transform the images array into the format needed by the lightbox
  const slides = images.map(image => ({
    src: image.url,
    alt: image.alt || "Property image",
    width: image.width || 1200,
    height: image.height || 800,
  }));

  return (
    <div>
      {/* Featured image (first image) */}
      <div 
        className="relative h-[250px] sm:h-[600px] w-full mb-4 cursor-pointer"
        onClick={() => {
          setPhotoIndex(0);
          setOpen(true);
        }}
      >
        <Image
          src={images[0].url}
          alt={images[0].alt || "Property main image"}
          fill
          className="rounded-lg object-cover"
        />
        <div className="absolute bottom-4 right-4 bg-white bg-opacity-80 px-3 py-1 rounded-full text-sm">
          View all {images.length} photos
        </div>
      </div>

      {/* Thumbnail gallery */}
      <div className="grid grid-cols-4 gap-2 mb-8">
        {images.slice(1, 5).map((image, index) => (
          <div 
            key={index}
            className="relative aspect-video cursor-pointer"
            onClick={() => {
              setPhotoIndex(index + 1);
              setOpen(true);
            }}
          >
            <Image
              src={image.url}
              alt={image.alt || `Property image ${index + 2}`}
              fill
              className="rounded-lg object-cover"
            />
            {index === 3 && images.length > 5 && (
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                <span className="text-white font-semibold">+{images.length - 5} more</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={slides}
        index={photoIndex}
        plugins={[Thumbnails, Zoom]}
        thumbnails={{
          position: "bottom",
          width: 120,
          height: 80,
        }}
        zoom={{
          maxZoomPixelRatio: 3,
          zoomInMultiplier: 2,
        }}
      />
    </div>
  );
};

export default PropertyGallery;