"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import darkToggle from "../assets/images/darkToggle.svg";
import lightToggle from "../assets/images/lightToggle.svg";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center">
      {theme === "light" ? (
        <button
          className="p-1 rounded-md border-transparent transform transition-all duration-100 hover:bg-slate-300"
          onClick={() => setTheme("dark")}
        >
          <Image src={darkToggle} alt="Dark mode toggle button" width={25} />
        </button>
      ) : (
        <button
          className="p-1 rounded-md border-transparent transform transition-all duration-150 hover:bg-orange-500"
          onClick={() => setTheme("light")}
        >
          <Image src={lightToggle} alt="Light mode toggle button" width={25} />
        </button>
      )}
    </div>
  );
};

export default ThemeSwitcher;
