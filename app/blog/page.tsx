import React from "react";
import BlogClientComponent from "@/components/BlogClientComponent";

const Blog = async () => {
  const fetchPostsHandler = async () => {
    const fetchPosts = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then((result) => {
      const posts = result.json();

      return posts;
    });

    return fetchPosts;
  };

  console.log("Server Side Component");

  const posts = await fetchPostsHandler();
  return (
    <div className=" p-8 rounded border flex flex-col gap-6">
      <BlogClientComponent posts={posts} />
    </div>
  );
};

export default Blog;
