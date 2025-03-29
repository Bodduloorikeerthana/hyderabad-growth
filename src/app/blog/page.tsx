"use client";

import Banner from "../../../components/Banner";
import BlogCard from "../../../components/BlogCard";
import { blogPosts } from "../../../types/blogPosts";
import { useState } from "react";

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <Banner
        title="Our Blog"
        subtitle="Insights, updates, and stories from Hyderabad Growth"
        buttons={[
          { label: "Latest Posts", href: "#latest", primary: true },
        ]}
      />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              summary={post.summary}
              imageUrl={post.imageUrl}
              date={post.date}
              stats={post.stats}
            />
          ))}
        </div>
      </div>
    </div>
  );
}