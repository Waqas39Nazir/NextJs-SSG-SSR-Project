import React from "react";
import DUMMY_BLOGS from "@/utils/JSON/Blog.json";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  id: number;
};

const Blog = ({ id }: Props) => {
  const router = useRouter();

  const showBlogDetailsHandler = () => {
    router.push(`/blog/${id}`);
  };
  return (
    <div className=" w-[80%] flex flex-col gap-5">
      <h1 className=" text-3xl">{DUMMY_BLOGS[id].title}</h1>

      <div className="flex flex-col gap-4">
        <div className="flex flex-row justify-between">
          <Image
            className="w-[32%] bg-cover rounded-md"
            src={DUMMY_BLOGS[id].image}
            alt="BLOG IMAGE"
            width={1000}
            height={1000}
          />
          <div className="w-[65%] flex flex-col justify-between">
            <p>{DUMMY_BLOGS[id].description1}</p>
            <p>{DUMMY_BLOGS[id].description2}</p>
          </div>
        </div>

        <p>{DUMMY_BLOGS[id].description3}</p>

        <p>{DUMMY_BLOGS[id].description4}</p>

        <p>
          {DUMMY_BLOGS[id].description4}{" "}
          <button
            onClick={showBlogDetailsHandler}
            className=" text-orange-400 cursor-pointer"
          >
            see more......
          </button>
        </p>
      </div>
    </div>
  );
};

export default Blog;
