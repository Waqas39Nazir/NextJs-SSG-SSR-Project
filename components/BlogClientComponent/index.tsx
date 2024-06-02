"use client";
import React from "react";

type Props = {
  posts?: any;
};

const BlogClientComponent = ({ posts }: Props) => {
  return (
    <>
      {posts.length > 0 &&
        posts.map((post: any) => {
          return (
            <div className="p-8 rounded border shadow-md" key={post.id}>
              <h1 className=" capitalize">Title:{post.title}</h1>
              <p className=" capitalize">Description:{post.body}</p>
            </div>
          );
        })}
    </>
  );
};

export default BlogClientComponent;
