"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogCardProps {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  date: string;
  stats?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ 
  id, 
  title, 
  summary, 
  imageUrl, 
  date,
  stats
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-60 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          style={{ objectFit: 'cover' }}
          className="rounded-t-lg"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl brand-color font-bold mb-2">{title}</h3>
        
        {stats && (
          <p className="text-gray-600 mb-4">{stats}</p>
        )}
        
        <p className="text-600 text-black  mb-4">{summary}</p>
        
        <div className="flex justify-between items-center">
          <Link 
            href={`/blog/${id}`}
            className="text-red-500 hover:text-red-700 font-medium"
          >
            Read More
          </Link>
          
          <div className="flex items-center text-gray-500">
            <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;