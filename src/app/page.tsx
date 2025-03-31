"use client";

import Banner from "../../components/Banner";
import Image from "next/image";
import Card from "../../components/Card";
import { useState } from "react";
import Navbar from "../../components/Navbar";
import AdvancedSlider from "../../components/Slide";
import { blogPosts } from "../../types/blogPosts";
import { SlideItem } from "../../types/SliderTypes";
import PostsDisplay from "../../components/RecentPosts";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import HyderabadLandPrices from "../../components/charts";
export default function Homepage() {

  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
 

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

        {/* Clickable image with cursor pointer */}
        <div
          className="cursor-pointer relative w-fit mx-auto"
          onClick={() => setIsLightboxOpen(true)}
        >
          <Image
            src="/real-estate.jpeg"
            width={500}
            height={500}
            className="block mx-auto hover:opacity-90 transition-opacity"
            alt="Hyderabad City Layout Map"
          />
        </div>

        {/* Lightbox component */}
        <Lightbox
          open={isLightboxOpen}
          close={() => setIsLightboxOpen(false)}
          slides={[{ src: "/real-estate.jpeg" }]}
        />
      </div>

      <div className="container sm:mx-auto mx-3 py-5">
        <h2 className="brand-color pb-5 text-center">
          Hyderabad Land Prices
        </h2>
        <HyderabadLandPrices></HyderabadLandPrices>
      </div>

      <div className="container sm mx-auto mx-3 py-5">
        <h2 className="text-center brand-color pb-5">
          Trending Areas in Hyderabad
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-10">
          <Card
            image="jp-morgan.jpeg"
            title="Gachibowli"
            description="Explore the best luxury apartments in the heart of Hyderabad with modern amenities."
           
          />
          <Card
            image="Kokapet.jpeg"
            title="Kokapet"
            description="Check out affordable housing options in the fast-growing area of Kokapet"
           
          />
          <Card
            image="broadcom.jpeg"
            title="Finacial District"
            description="Invest in luxurious villas in one of the most sought-after locations in Hyderabad."
          />
        </div>

      </div>

      <div className="container sm:mx-auto recent-posts py-5">
        <PostsDisplay
          mode="grid"
          title="Latest From Our Blog"
          count={6}
          className="sm:mx-auto  mx-3"
          showViewAll={true}
        />
      </div>

    </div>
  );
}