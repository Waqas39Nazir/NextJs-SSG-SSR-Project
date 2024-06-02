import React from "react";
import DUMMY_BLOGS from "@/utils/JSON/Blog.json";
import SingleBlogSection from "../SingleBlogSection";

const RelatedBlogs = () => {
  console.log(
    "Is related blog a client cide component? if console is logged on chrome console then its means it is"
  );

  return (
    <div className="w-[15%] flex flex-col gap-5">
      <h1 className=" text-2xl">Related Blogs</h1>

      <div className="flex-grow flex flex-col gap-4">
        {DUMMY_BLOGS.map((blog) => {
          return (
            <SingleBlogSection
              key={blog.id}
              id={blog.id}
              title={blog.title}
              image={blog.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedBlogs;
