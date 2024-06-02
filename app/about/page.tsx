"use client";
import React, { useState, useEffect } from "react";

const About = () => {
  const [posts, setPosts] = useState<any>();
  const [loading, setLoading] = useState(true);

  const fetchPostsHandler = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts").then(
      async (result) => {
        const posts = await result.json();

        setLoading(false);

        setPosts(posts);
      }
    );
  };

  console.log("Posts:", posts);

  useEffect(() => {
    fetchPostsHandler();
  }, []);
  return (
    <>
      {loading ? (
        <h1>Loading.......</h1>
      ) : (
        posts.length > 0 &&
        posts.map((post: any) => {
          return <h1 key={post.id}>{post.title}</h1>;
        })
      )}
    </>
  );
};

export default About;
