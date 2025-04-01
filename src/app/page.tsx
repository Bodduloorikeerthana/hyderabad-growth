"use client";

import Banner from "../../components/Banner";
import Image from "next/image";
import Card from "../../components/Card";
import SpotifyPodcastCard from "../../components/Spotify";
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

      {/* Hyderabad Land Prices */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <h2 className="brand-color pb-5 text-center">
          Hyderabad Land Prices
        </h2>
        <HyderabadLandPrices />
      </div>

      {/* Trending Areas in Hyderabad */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <h2 className="text-center brand-color pb-5">
          Trending Areas in Hyderabad
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8">
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

      {/* Video Tours Slider - iframes only */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <h2 className="brand-color text-center sm:text-3xl font-bold mb-4">Featured Videos</h2>
        <p className="mb-12 text-gray-700 text-center">Explore our channel through our videos</p>
        <div className="px-4 sm:px-6 lg:px-8">
          <AdvancedSlider
            slides={videoTourSlides}
            showDots={true}
            showArrows={true}
            autoplay={false}
            className="video-tours-slider"
          />
        </div>
      </div>

      {/* Podcast Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <h2 className="text-center brand-color font-bold pb-5">
          Listen to our Podcast
        </h2>
        <div className="px-4 sm:px-6 lg:px-8">
          <SpotifyPodcastCard 
            podcastTitle="Hyderabad Growth Podcast"
            podcastDescription="Real estate market insights and super interviews"
            latestEpisode="Investment Opportunities in Kolkata"
            spotifyUrl="https://open.spotify.com/show/0ENQicPBx6ERSomLraE87U?si=79db8a058d984a92"
            spotifyImageUrl="spotify.jpeg"
          />
        </div>
      </div>

      {/* Recent Blog Posts */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <PostsDisplay
          mode="grid"
          title="Latest From Our Blog"
          count={6}
          className="px-4 sm:px-6 lg:px-8"
          showViewAll={true}
        />
      </div>

    </div>
  );
}