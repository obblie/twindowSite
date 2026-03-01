"use client";

import { useEffect, useRef, useState } from "react";

type VideoSource = {
  src: string;
  type: string;
};

type LazyVideoProps = {
  ariaLabel: string;
  className?: string;
  poster?: string;
  sources: VideoSource[];
};

export function LazyVideo({ ariaLabel, className, poster, sources }: LazyVideoProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = containerRef.current;

    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const visible = entry.isIntersecting;

        setIsInView(visible);

        if (visible) {
          setShouldLoad(true);
        }
      },
      { rootMargin: "320px 0px" }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !shouldLoad) return;

    video.load();
  }, [shouldLoad]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !shouldLoad) return;

    const resumePlayback = () => {
      if (!isInView) return;
      void video.play().catch(() => {});
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        resumePlayback();
        return;
      }

      video.pause();
    };

    if (isInView) {
      resumePlayback();
    } else {
      video.pause();
    }

    video.addEventListener("canplay", resumePlayback);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      video.removeEventListener("canplay", resumePlayback);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isInView, shouldLoad]);

  return (
    <div ref={containerRef} className="h-full w-full">
      <video
        ref={videoRef}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={ariaLabel}
      >
        {shouldLoad ? sources.map((source) => <source key={source.src} src={source.src} type={source.type} />) : null}
      </video>
    </div>
  );
}
