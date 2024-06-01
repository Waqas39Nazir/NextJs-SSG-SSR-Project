import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="px-[5%] w-full flex flex-row justify-between items-center py-8 bg-black text-white">
      <h1 className=" text-3xl">LOGO</h1>

      <nav className=" w-fit">
        <ul className="flex flex-row gap-8 w-fit">
          <li>Page 1</li>
          <li>Page 2</li>
          <li>Page 3</li>
          <li>Page 4</li>
          <li>Page 5</li>
          <li>Page 6</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
