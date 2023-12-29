import PlayButton from "../assets/images/playVideo.svg";
import PauseButton from "../assets/images/pauseVideo.svg";
import React from "react";
import Image from "next/image";

const VideoPlayerControls = ({
  progress,
  isPaused,
  onPlayPause,
  size = 48,
  width = 3,
}) => {
  const center = size / 2;
  const radius = center - width;
  const dashArray = 2 * Math.PI * radius;
  const dashOffset = dashArray * (1 - progress);

  return (
    <div className="text-white dark:text-black">
      <div className="relative flex justify-center items-center bg-black/30 rounded-full">
        <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="#aaaaaa"
            strokeWidth={width}
          />
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="transparent"
            stroke="#ffffff"
            strokeWidth={width}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute">
          <button
            className="group cursor-pointer flex justify-center items-center"
            onClick={onPlayPause}
          >
            <div className="fill-white group-hover:fill-[#aaaaaa] transition-colors duration-200 ease-in-out">
              {isPaused ? (
                <Image src={PlayButton} alt="Play" width={20} />
              ) : (
                <Image src={PauseButton} alt="Pause" width={20} />
              )}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerControls;
