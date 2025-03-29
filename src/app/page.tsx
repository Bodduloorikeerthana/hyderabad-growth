"use client";

import Banner from "../../components/Banner";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import AdvancedSlider from "../../components/Slide";
import { SlideItem } from "../../types/SliderTypes";
export default function Homepage() {
  // YouTube video slider - multiple iframes
  const videoTourSlides: SlideItem[] = [
    {
      type: 'iframe',
      src: 'https://www.youtube.com/embed/wzZUOiWYyB0',
      alt: 'Luxury Villa Virtual Tour'
    },
    {
      type: 'iframe',
      src: 'https://www.youtube.com/embed/SQPGpfRQ4Q4',
      alt: 'Apartment Walkthrough'
    },
    {
      type: 'iframe',
      src: 'https://www.youtube.com/embed/fmKRgpq-cLo',
      alt: 'Commercial Property Tour'
    }
  ];



  return (
    <div className="space-y-8">
      {/* Navbar and Banner */}
      <Navbar />
      <Banner 
        title="Discover Hyderabad's Real Estate Potential"
        subtitle="Insights on growth areas, investment opportunities, and market trends"
        buttons={[
          { label: "Trending Areas", href: "/areas", primary: true },
          { label: "Watch Videos", href: "/videos", primary: false }
        ]}
      />
   
      
      {/* Video Tours Slider - iframes only */}
      <div className="container mx-auto py-5">
        <h2 className="brand-color text-center sm:text-3xl font-bold mb-4">Featured Videos</h2>
        <p className="mb-[50px] text-gray-700 text-center">Explore our channel through our videos</p>
        <AdvancedSlider 
          slides={videoTourSlides}
          showDots={true}
          showArrows={true}
          autoplay={false}
          className="video-tours-slider"
        />
      </div>

      <div className="container mx-auto py-5">
        <h2 className="brand-color font-bold mb-4 text-center">
          Hyderabad Layout
        </h2>
        
      </div>

    </div>
  );
}