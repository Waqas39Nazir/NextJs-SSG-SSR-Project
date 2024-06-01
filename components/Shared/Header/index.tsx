import React from "react";
import Link from "next/link";
// import Image from "next/image";

const Header = () => {
  return (
    <header className="px-[5%] w-full flex flex-row justify-between items-center py-8 bg-black text-white">
      <h1 className=" text-3xl">LOGO</h1>

      <nav className=" w-fit">
        <ul className="flex flex-row gap-8 w-fit">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
