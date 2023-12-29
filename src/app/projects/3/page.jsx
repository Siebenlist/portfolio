import Image from "next/image";
import React from "react";
import projectThumbnail from "@/assets/images/projectThumbnail.webp";

const page = () => {
  return (
    <section className="max-w-[1000px] mt-10 mb-5">
      <div className="w-full">
        <Image
          src={projectThumbnail}
          alt="Project thumbnail"
          className="w-full p-3"
        />
      </div>

      <h1 className="text-6xl text-[#38419D] dark:text-[#52D3D8] font-bold mt-10 mb-5">
        E-Store for companies with Spring & Thymeleaf
      </h1>

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
        <ul className="list-disc text-xl">
          <li>
            Main Features Purchasing Chambers: Users can create or join
            purchasing chambers, where they can place joint orders from a
            specific supplier.
          </li>
          <li>
            Cumulative Discounts: As more users join a shopping chamber, the
            number of products ordered increases, leading to larger discounts on
            products due to purchasing in larger quantities.
          </li>
          <li>
            Shared Shipping Costs: Shipping costs are split among chamber
            members, significantly reducing individual shipping costs.
          </li>
          <li>
            Variety of Suppliers: We offer a wide selection of suppliers and
            products for users to choose from.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default page;
