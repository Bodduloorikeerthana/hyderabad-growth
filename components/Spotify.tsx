"use client";
import React from 'react';
import Card from './Card'; // Adjust import path as needed

export default function SpotifyPodcastCard({ 
  podcastTitle = "Hyderabad Growth Podcast",
  podcastDescription = "Real estate market insights and super interviews",
  latestEpisode = "Investment Opportunities in Kolkata",
  spotifyUrl,
  spotifyImageUrl = "/api/placeholder/400/400" 
}: {
  podcastTitle?: string,
  podcastDescription?: string,
  latestEpisode?: string,
  spotifyUrl: string,
  spotifyImageUrl?: string
}) {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 rounded-lg overflow-hidden shadow-lg">
        {/* Spotify Image Side */}
        <img 
          src={spotifyImageUrl} 
          alt={podcastTitle} 
          className="w-full h-64 md:h-full object-cover"
        />
        
        {/* Podcast Details Side */}
        <div className="bg-white p-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{podcastTitle}</h2>
            <p className="text-gray-600 mb-4">{podcastDescription}</p>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Latest Episode</h3>
              <p className="text-gray-600">{latestEpisode}</p>
            </div>
          </div>
          
          <a 
            href={spotifyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 bg-[#1DB954] text-white rounded-full hover:bg-[#1ed760] transition-colors text-center inline-block"
          >
            Listen on Spotify
          </a>
        </div>
      </div>
    </div>
  );
}