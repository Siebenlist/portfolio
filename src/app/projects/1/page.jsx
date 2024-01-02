import React from "react";
import ExternalLink from "@/components/ExternalLink";
import movieRThumbnail from "../../../assets/images/movieRThumbnail.png";
import Image from "next/image";

const Page = () => {
  return (
    <section className="max-w-[1000px] mt-10 mb-5">
      <Image
        src={movieRThumbnail}
        alt="MovieR thumbnail"
        width={1800}
        height={1000}
        className="w-full"
      />

      <h1 className="text-4xl md:text-6xl text-[#38419D] dark:text-[#52D3D8] font-bold mt-10 mb-5">
        Movie review application with NextJS & Spring
      </h1>

      <a
        href="https://github.com/Mrck0s/movie-review"
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
          The MovieR project represents a social network designed to facilitate
          the sharing of reviews and opinions on films. Users have the ability
          to meticulously curate their favorite movies and establish a limitless
          watchlist within the platform.
        </p>
      </div>

      <div>
        <h3 className="text-3xl text-[#3887BE] mb-3 dark:text-[#94cca9] font-bold">
          Main Features
        </h3>
        <ul className="flex flex-col gap-3 list-disc text-xl">
          <li>
            <span className="text-[#401d84] dark:text-[#719e75] font-semibold">
              Review movies
            </span>
            : Users can create reviews and share thoughts about movies to
            everyone in the app. Users can show the author of the review their
            opinions through likes or dislikes.
          </li>
          <li>
            <span className="text-[#401d84] dark:text-[#719e75] font-semibold">
              Add to favorites
            </span>
            : You can curate a list of your favorite movies, and this selection
            will be publicly visible on your profile for others to explore and
            discover your movie preferences.
          </li>
          <li>
            <span className="text-[#401d84] dark:text-[#719e75] font-semibold">
              Save movies for later
            </span>
            : Users can bookmark or save movies they are interested in for
            future viewing. This list is private and accessible only to the
            user.
          </li>
          <li>
            <span className="text-[#401d84] dark:text-[#719e75] font-semibold">
              Make friends
            </span>
            : Connect with other users, build a network, and make friends with
            similar movie preferences. Users can follow each other, share
            recommendations, and discover new movies through their friends
            activity.
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Page;
