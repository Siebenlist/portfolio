"use client";
import Image from "next/image";
import React from "react";
import linkLight from "@/assets/images/linkLight.svg";
import linkDark from "@/assets/images/linkDark.svg";
import { useTheme } from "next-themes";
import VideoPlayer from "@/components/VideoPlayer";

const Page = () => {
  const { theme } = useTheme();
  return (
    <section className="max-w-[1000px] mt-10 mb-5">
      <VideoPlayer />

      <h1 className="text-6xl text-[#38419D] dark:text-[#52D3D8] font-bold mt-10 mb-5">
        E-Store for companies with Spring & Thymeleaf
      </h1>

      <a
        href="https://github.com/javierhuebra/Proyecto_Coompitas"
        className="text-[#181819] dark:text-[#3b979a] flex items-center gap-2 text-lg hover:underline"
        target="_blank"
      >
        Go to the repository for this proyect.{" "}
        <span>
          {theme === "light" ? (
            <Image src={linkLight} alt="About section icon link" width={20} />
          ) : (
            <Image src={linkDark} alt="About section icon link" width={20} />
          )}
        </span>
      </a>

      <div className="my-10">
        <h2 className="text-3xl text-[#3887BE] mb-3 dark:text-[#94cca9] font-bold">
          Overview
        </h2>
        <p className="text-xl">
          The Coompitas project is a unique e-commerce platform that allows
          users to associate in chambers to place joint orders from suppliers.
          Unlike typical e-commerce sites, our approach is to leverage
          collaboration between buyers to get lower prices and share shipping
          costs.
        </p>
      </div>

      <div>
        <h3 className="text-3xl text-[#3887BE] mb-3 dark:text-[#94cca9] font-bold">
          Main Features
        </h3>
        <ul className="list-disc flex flex-col gap-3 text-xl">
          <li>
            <span className="text-[#401d84] dark:text-[#719e75] font-semibold">
              Main Features Purchasing Chambers
            </span>
            : Users can create or join purchasing chambers, where they can place
            joint orders from a specific supplier.
          </li>
          <li>
            <span className="text-[#401d84] dark:text-[#719e75] font-semibold">
              Cumulative Discounts
            </span>
            : As more users join a shopping chamber, the number of products
            ordered increases, leading to larger discounts on products due to
            purchasing in larger quantities.
          </li>
          <li>
            <span className="text-[#401d84] dark:text-[#719e75] font-semibold">
              Shared Shipping Costs
            </span>
            : Shipping costs are split among chamber members, significantly
            reducing individual shipping costs.
          </li>
          <li>
            <span className="text-[#401d84] dark:text-[#719e75] font-semibold">
              Variety of Suppliers
            </span>
            : We offer a wide selection of suppliers and products for users to
            choose from.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Page;
