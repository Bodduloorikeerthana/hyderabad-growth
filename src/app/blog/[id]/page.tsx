"use client";

import { useParams } from "next/navigation";
import { blogPosts } from "../../../../types/blogPosts";
import Banner from "../../../../components/Banner";
import Link from "next/link";
import Image from "next/image";
import AudioPlayer from "../../../../components/AudioPlayer";
import PostsDisplay from "../../../../components/RecentPosts";

export default function BlogPostPage() {
  const params = useParams();
  const postId = params.id as string;
  
  const post = blogPosts.find(p => p.id === postId);
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold">Blog post not found</h1>
        <Link href="/blog" className="mt-4 inline-block text-blue-600 hover:underline">
          Back to blog
        </Link>
      </div>
    );
  }
  
  return (
    <div className="space-y-8">
      <Banner
        title={post.title}
        subtitle={post.stats || post.date}
        buttons={[
          { label: "Back to Blog", href: "/blog", primary: false },
        ]}
      />
      
      <div className="container mx-auto py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <div className="lg:w-full">
            <div className="relative h-[250px] sm:h-[600px] w-full mb-8">
              <Image
                src={post.imageUrl}
                alt={post.title}
                fill
                className="rounded-lg"
              />
            </div>
            
            {/* Audio Player */}
            {post.audioId && (
              <AudioPlayer
                youtubeId={post.audioId}
              />
            )}
            
            <div
              className="prose max-w-none blog-content sm:mx-0 mx-4 text-black"
              dangerouslySetInnerHTML={{ __html: post.content || post.summary }}
            />
            
            <div className="mt-8 flex items-center text-gray-500">
              <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{post.date}</span>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:w-1/3">
            <PostsDisplay 
              mode="sidebar"
              currentPostId={postId}
              title="Related Posts"
              count={4}
            />
          </div>
        </div>
      </div>
    </div>
  );
}