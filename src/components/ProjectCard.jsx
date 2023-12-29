import React from "react";
import Link from "next/link";

const ProjectCard = ({ id, title, overview }) => {
  return (
    <Link
      className="flex flex-col justify-between rounded-lg p-3 border-2 border-slate-700 bg-gray-200 dark:border-slate-400 dark:bg-slate-800 max-w-[270px] duration-200 hover:shadow-lg hover:scale-105"
      href={`/projects/${id}`}
    >
      <p className="text-2xl font-bold mb-5">{title}</p>
      <p className="">{overview}</p>
    </Link>
  );
};

export default ProjectCard;
