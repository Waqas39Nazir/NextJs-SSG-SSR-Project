import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-[5%] flex flex-row justify-between py-8 bg-black text-white">
      <h1 className=" text-2xl">LOGO</h1>
      <ul className="flex flex-col gap-3">
        <li>
          <Link className="" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="" href="/blog">
            Blog
          </Link>
        </li>
        <li>
          <Link className="" href="/about">
            About
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col gap-3">
        <li>
          <Link className="" href="/contact-us">
            Contact Us
          </Link>
        </li>
        <li>
          <Link className="" href="/privacy-policy">
            Privacy Policy
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
