"use client";

import linkLight from "../assets/images/linkLight.svg";
import linkDark from "../assets/images/linkDark.svg";
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const ExternalLink = () => {
  const { theme } = useTheme();

  return (
    <span>
      {theme === "light" ? (
        <Image src={linkLight} alt="About section icon link" width={20} />
      ) : (
        <Image src={linkDark} alt="About section icon link" width={20} />
      )}
    </span>
  );
};

export default ExternalLink;
