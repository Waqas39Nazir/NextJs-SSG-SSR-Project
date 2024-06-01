import React from "react";

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

  console.log("Blog Posts:", posts);
  return (
    <>
      {posts.length > 0 &&
        posts.map((post: any) => {
          return <h1 key={post.id}>{post.title}</h1>;
        })}
    </>
  );
};

export default Blog;
