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

  const posts = await fetchPostsHandler();

  // console.log("Blog Posts:", posts);
  return (
    <div className=" p-8 rounded border flex flex-col gap-6">
      {/* <BlogClientComponent posts={posts} /> */}

      {posts.length > 0 &&
        posts.map((post: any) => {
          return (
            <div className="p-8 rounded border shadow-md" key={post.id}>
              <h1 className=" capitalize">Title:{post.title}</h1>
              <p className=" capitalize">Description:{post.body}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Blog;
