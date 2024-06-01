import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-[5%] flex flex-row justify-between py-8 bg-black text-white">
      <h1 className=" text-2xl">LOGO</h1>
      <ul className="flex flex-col gap-3">
        <li>
          <Link className="" href="#">
            Page 1
          </Link>
        </li>
        <li>
          <Link className="" href="#">
            Page 2
          </Link>
        </li>
        <li>
          <Link className="" href="#">
            Page 3
          </Link>
        </li>
      </ul>
      <ul className="flex flex-col gap-3">
        <li>
          <Link className="" href="#">
            Page 4
          </Link>
        </li>
        <li>
          <Link className="" href="#">
            Page 5
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
