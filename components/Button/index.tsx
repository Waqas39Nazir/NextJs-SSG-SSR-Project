import React from "react";

type Props = {
  type: any;
  title: string;
};

const Button = ({ type, title }: Props) => {
  return (
    <div className=" self-end">
      <button
        className=" px-8 py-2 rounded-md border w-fit bg-yellow-300 hover:bg-yellow-500"
        type={type}
      >
        {title}
      </button>
    </div>
  );
};

export default Button;
