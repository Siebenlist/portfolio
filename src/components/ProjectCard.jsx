import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = () => {
  return (
    <Link
      className="flex flex-col rounded-lg p-3 border-2 border-slate-700 bg-gray-200 dark:border-slate-400 dark:bg-slate-800 max-w-[270px] duration-200 hover:shadow-lg"
      href={"/projects/1"}
    >
      <p className="text-2xl font-bold mb-5">
        Movie Review with NextJS & Spring
      </p>
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit...
      </p>
    </Link>
  );
};

export default ProjectCard;
