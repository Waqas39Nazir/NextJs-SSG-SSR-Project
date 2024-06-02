import React from "react";
import DUMMY_BLOGS from "@/utils/JSON/Blog.json";
import Image from "next/image";

// type Props = {
//   blogId: string;
//   params: { blogId: string };
// };

interface Params {
  blogId: string;
}

interface Props {
  params: Params;
}

const blogDetailsPage = ({ params }: Props) => {
  const id = parseInt(params.blogId);

  return (
    <div className=" w-full flex flex-col gap-5">
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
            <p>
              {DUMMY_BLOGS[id].description2} {DUMMY_BLOGS[id].description2}
            </p>
          </div>
        </div>

        <p>
          {DUMMY_BLOGS[id].description3} {DUMMY_BLOGS[id].description3}{" "}
        </p>

        <p>
          {DUMMY_BLOGS[id].description4} {DUMMY_BLOGS[id].description4}
          {DUMMY_BLOGS[id].description4}
        </p>

        <p>
          {DUMMY_BLOGS[id].description3} {DUMMY_BLOGS[id].description3}
          {DUMMY_BLOGS[id].description3}
        </p>
      </div>
    </div>
  );
};

export default blogDetailsPage;
