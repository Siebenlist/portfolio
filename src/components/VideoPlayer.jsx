"use client";
import React, { useEffect, useRef, useState } from "react";
import VideoPlayerControls from "./VideoPlayerControls";

const VideoPlayer = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [videoDuration, setVideoDuration] = useState();
  const [videoProgress, setVideoProgress] = useState(0);
  const videoRef = useRef(null);

  const handleVideoPause = () => {
    const video = videoRef.current;
    if (video) {
      setIsPaused(!video.paused);
      video.paused ? video.play() : video.pause();
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      setVideoDuration(video.duration);

      const updateProgress = () => {
        const currentTime = video.currentTime;
        setVideoProgress(currentTime / video.duration);
      };

      video.addEventListener("timeupdate", updateProgress);

      return () => {
        video.removeEventListener("timeupdate", updateProgress);
      };
    }
  }, []);

  return (
    <div className="relative w-[90%] max-w-6xl mx-auto my-8 rounded-xl overflow-hidden">
      <div className="absolute top-4 right-4 z-10">
        <VideoPlayerControls
          progress={videoProgress}
          isPaused={isPaused}
          onPlayPause={handleVideoPause}
        />
      </div>
      <video
        className="w-full rounded-xl cursor-pointer"
        ref={videoRef}
        autoPlay
        muted
        loop
        onClick={handleVideoPause}
      >
        <source src="/videos/CoompitasVideo.mp4" />
      </video>
    </div>
  );
};

export default VideoPlayer;
