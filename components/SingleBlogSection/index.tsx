import React, { useContext } from "react";
import Image from "next/image";
import { BlogContext } from "../Pages/blogPage";

type Props = {
  id: number;
  title: string;
  image: string;
};

const SingleBlogSection = ({ id, title, image }: Props) => {
  const { handler } = useContext(BlogContext);

  console.log("Blog Id:", id);

  const onClickHandler = (id: number) => {
    handler(id);
  };
  return (
    <div
      className=" cursor-pointer flex flex-row gap-3"
      onClick={() => onClickHandler(id)}
    >
      <Image
        className=" rounded w-10 h-10 bg-cover"
        src={image}
        alt="Image"
        width={500}
        height={500}
      />
      <div>
        <h2>{title}</h2>
        <h5 className=" text-xs text-orange-400">Category: Test ABC</h5>
      </div>
    </div>
  );
};

export default SingleBlogSection;
