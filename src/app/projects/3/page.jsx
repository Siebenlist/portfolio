import Image from "next/image";
import React from "react";
import projectThumbnail from "@/assets/images/dashboardThumbnail.png";
import ExternalLink from "@/components/ExternalLink";

const page = () => {
  return (
    <section className="max-w-[1000px] mt-10 mb-5">
      <Image
        src={projectThumbnail}
        alt="Project thumbnail"
        width={1920}
        height={1080}
        quality={100}
      />

      <h1 className="text-6xl text-[#38419D] dark:text-[#52D3D8] font-bold mt-10 mb-5">
        Admin dashboard with NextJS & Server Actions
      </h1>

      <a
        href="https://github.com/Siebenlist/backoffice-nextjs"
        className="text-[#38419D] dark:text-[#3b979a] flex items-center gap-2 text-lg hover:underline"
        target="_blank"
      >
        Go to the repository for this proyect. <ExternalLink />
      </a>

      <div className="my-10">
        <h2 className="text-3xl text-[#3887BE] mb-3 dark:text-[#94cca9] font-bold">
          Overview
        </h2>
        <p className="text-xl">
          This Admin Dashboard for User and Product Administration is a
          purpose-built web application designed to streamline the management of
          users and products for administrators. Leveraging NextJS, Server
          Actions, and MongoDB, this project delivers a responsive and intuitive
          user interface tailored specifically for user and product
          administration tasks.
        </p>
      </div>

      <div>
        <h3 className="text-3xl text-[#3887BE] mb-3 dark:text-[#94cca9] font-bold">
          Main Features
        </h3>
        <ul className="list-disc flex flex-col gap-3 text-xl">
          <li>
            <span className="text-[#401d84] dark:text-[#719e75] font-semibold">
              User Profile Management
            </span>
            : Enables administrators to oversee and modify user profiles,
            including details like usernames, roles, and contact information.
            Provides tools for account management, password resets, and
            user-related actions.
          </li>
          <li>
            <span className="text-[#401d84] dark:text-[#719e75] font-semibold">
              Product Catalog Management
            </span>
            : Facilitates easy management of product catalogs, allowing
            administrators to add, update, or remove products with associated
            details such as pricing, descriptions, and images.
          </li>
          <li>
            <span className="text-[#401d84] dark:text-[#719e75] font-semibold">
              Responsive UI for Any Device
            </span>
            : Adopts a responsive design to ensure an optimal user experience on
            various devices, from desktops to tablets and mobile phones.
            Utilizes NextJS features to optimize client-side rendering and
            enhance performance across different screen sizes.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default page;
