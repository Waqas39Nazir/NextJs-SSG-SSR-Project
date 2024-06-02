"use client";
import React, { useState, createContext } from "react";
import Blog from "@/components/Blog";
import RelatedBlogs from "@/components/RelatedBlogs";

// Create the context with the appropriate type
export const BlogContext = createContext<any>(0);

const HomePageBlogs = () => {
  const [blogId, setBlogId] = useState(0);

  console.log("Client Side Component");

  const updateBlogIdHandler = (id: number) => {
    setBlogId(id);
  };
  return (
    <BlogContext.Provider value={{ id: blogId, handler: updateBlogIdHandler }}>
      <div className="w-full flex flex-row justify-between">
        <Blog id={blogId} />
        <RelatedBlogs />
      </div>
    </BlogContext.Provider>
  );
};

export default HomePageBlogs;
