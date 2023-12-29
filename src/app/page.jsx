"use client";

import { projects } from "@/utils/projects";
import { useTheme } from "next-themes";
import Image from "next/image";
import linkLight from "../assets/images/linkLight.svg";
import linkDark from "../assets/images/linkDark.svg";
import ProjectCard from "@/components/ProjectCard";
import githubLight from "../assets/images/githubLight.svg";
import githubDark from "../assets/images/githubDark.svg";
import linkedinLight from "../assets/images/linkedinLight.svg";
import linkedinDark from "../assets/images/linkedinDark.svg";

export default function Home() {
  const { theme } = useTheme();

  return (
    <main>
      <h1 className="text-4xl md:text-7xl font-bold my-10">
        A{" "}
        <span className="font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.purple.800),theme(colors.purple.400),theme(colors.pink.400),theme(colors.orange.500),theme(colors.pink.600),theme(colors.purple.600),theme(colors.purple.800))] dark:bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
          web engineer
        </span>{" "}
        interested in design systems and future proof applications.
      </h1>

      <section className="mb-10">
        <a
          href={"/about"}
          target="_blank"
          className="inline-flex items-center gap-3 text-2xl font-bold hover:underline"
        >
          Hi i&apos;m Santiago ! 👋
          <span>
            {theme === "light" ? (
              <Image src={linkLight} alt="About section icon link" width={20} />
            ) : (
              <Image src={linkDark} alt="About section icon link" width={20} />
            )}
          </span>
        </a>
        <p className="text-xl mt-5">
          A Full-stack developer specialized in building accessible, fast, and
          scalable web applications using modern technologies like ReactJS,
          NextJS or NodeJS.
        </p>
        <p className="text-xl mt-5">
          My main focus is on creating user interfaces that are intuitive, easy
          to use and visually appealing. I strongly believe that a
          well-structured application can stand the test of time.
        </p>
        <div className="mt-5">
          {theme === "light" ? (
            <div className="flex items-center gap-2">
              <a href="https://github.com/Siebenlist" target="_blank">
                <Image
                  src={githubLight}
                  alt="Github logo"
                  width={30}
                  height={30}
                />
              </a>
              <a href="https://www.linkedin.com/in/siebenlist/" target="_blank">
                <Image
                  src={linkedinLight}
                  alt="Github logo"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          ) : (
            <div className="flex gap-2">
              <a href="https://github.com/Siebenlist" target="_blank">
                <Image
                  src={githubDark}
                  alt="Github logo"
                  width={30}
                  height={30}
                />
              </a>
              <a href="https://www.linkedin.com/in/siebenlist/" target="_blank">
                <Image
                  src={linkedinDark}
                  alt="Github logo"
                  width={30}
                  height={30}
                />
              </a>
            </div>
          )}
        </div>
      </section>
      <section>
        <h3 className="text-2xl font-bold">Recent projects 👨‍💻</h3>
        <div className="flex flex-wrap justify-between mt-5 gap-3 md:gap-0">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                overview={project.overview}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
