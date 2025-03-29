"use client";

import { useParams } from "next/navigation";
import { blogPosts } from "../../../data/blogPosts";
import Banner from "../../../components/Banner";
import Link from "next/link";
import Image from "next/image";

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
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 w-full mb-8">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
          
          <div className="prose max-w-none">
            <p className="text-lg leading-relaxed">{post.content || post.summary}</p>
            
            {/* You can expand this section with more formatted content */}
            {/* For a real blog, you might want to use a rich text editor or markdown */}
          </div>
          
          <div className="mt-8 flex items-center text-gray-500">
            <svg className="w-5 h-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{post.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}