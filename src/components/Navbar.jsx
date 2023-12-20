import Link from "next/link";
import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      <Link className="font-extrabold text-3xl" href="/">
        <p className="text-black transition-all duration-100 hover:text-[#7B66FF] hover:scale-105 dark:text-white">
          Sieben.dev
        </p>
      </Link>
      <ul className="flex items-center gap-5">
        <li>
          <Link className="text-lg" href={"/"}>
            Home
          </Link>
        </li>
        <li>
          <Link className="text-lg" href={"/about"}>
            About
          </Link>
        </li>
        <li>
          <Link className="text-lg" href={"/projects"}>
            Projects
          </Link>
        </li>
        <li>
          <ThemeSwitcher />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
