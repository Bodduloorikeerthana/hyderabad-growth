// components/PostsDisplay.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import { blogPosts } from '../types/blogPosts';

type DisplayMode = 'grid' | 'sidebar' | 'carousel';

interface PostsDisplayProps {
  /**
   * Display mode for the posts
   */
  mode: DisplayMode;
  
  /**
   * ID of the current post to exclude from the list
   */
  currentPostId?: string;
  
  /**
   * Title for the section
   */
  title?: string;
  
  /**
   * Number of posts to display
   */
  count?: number;
  
  /**
   * Whether to show the "View All" button
   */
  showViewAll?: boolean;
  
  /**
   * Custom class name
   */
  className?: string;
}

const PostsDisplay: React.FC<PostsDisplayProps> = ({
  mode = 'grid',
  currentPostId,
  title = "Recent Posts",
  count = 6,
  showViewAll = true,
  className = ''
}) => {
  // Get recent posts excluding the current one
  const recentPosts = blogPosts
    .filter(p => !currentPostId || p.id !== currentPostId)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, count);
  
  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  // Render post as grid item
  const renderGridItem = (post: any) => (
    <Link 
      href={`/blog/${post.id}`} 
      key={post.id}
      className="group"
    >
      <div className="bg-white rounded-lg blog-card overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="relative h-50 w-full overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="font-bold text-gray-900 group-hover:text-[#29356B] transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-sm text-gray-500 mt-2">{post.date}</p>
          <p className="text-gray-600 mt-2 line-clamp-2">{post.summary}</p>
        </div>
      </div>
    </Link>
  );
  
  // Render post as sidebar item
  const renderSidebarItem = (post: any) => (
    <Link 
      href={`/blog/${post.id}`} 
      key={post.id}
      className="block group"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded">
          <Image
            src={post.imageUrl}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform"
          />
        </div>
        <div>
          <h4 className="font-medium text-gray-900 group-hover:text-[#29356B] transition-colors line-clamp-2">
            {post.title}
          </h4>
          <p className="text-sm text-gray-500 mt-1">{post.date}</p>
        </div>
      </div>
    </Link>
  );
  
  // Render post as carousel item (similar to grid but wrapped for slick)
  const renderCarouselItem = (post: any) => (
    <div key={post.id} className="px-2">
      <Link href={`/blog/${post.id}`} className="group block">
        <div className="bg-white rounded-lg blog-card overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              className="group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="p-4">
            <h3 className="font-bold text-gray-900 group-hover:text-[#29356B] transition-colors line-clamp-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 mt-2">{post.date}</p>
            <p className="text-gray-600 mt-2 line-clamp-2">{post.summary}</p>
          </div>
        </div>
      </Link>
    </div>
  );
  
  // Choose the container based on mode
  const renderContainer = () => {
    switch (mode) {
      case 'grid':
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map(post => renderGridItem(post))}
          </div>
        );
      
      case 'sidebar':
        return (
          <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
            {recentPosts.map(post => renderSidebarItem(post))}
          </div>
        );
      
      case 'carousel':
        return (
          <Slider {...carouselSettings}>
            {recentPosts.map(post => renderCarouselItem(post))}
          </Slider>
        );
      
      default:
        return null;
    }
  };
  
  return (
    <div className={className}>
      {title && <h2 className="text-2xl font-bold mb-6 text-[#29356B]">{title}</h2>}
      
      {renderContainer()}
      
      {showViewAll && mode !== 'sidebar' && (
        <div className="mt-8 text-center">
          <Link 
            href="/blog" 
            className="inline-block px-6 py-2 bg-[#29356B] text-white rounded-full hover:bg-[#3a4582] transition-colors"
          >
            View All Posts
          </Link>
        </div>
      )}
      
      {showViewAll && mode === 'sidebar' && (
        <Link 
          href="/blog" 
          className="mt-4 block text-[#29356B] font-medium hover:underline"
        >
          View all posts →
        </Link>
      )}
    </div>
  );
};

export default PostsDisplay;