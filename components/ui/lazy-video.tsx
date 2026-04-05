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

    // Mobile browsers can require these runtime properties (not just attributes)
    // before allowing muted inline autoplay.
    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;

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

    const retryId = window.setInterval(() => {
      if (!isInView || document.visibilityState !== "visible") return;
      void video.play().catch(() => {});
    }, 1200);

    video.addEventListener("canplay", resumePlayback);
    video.addEventListener("loadeddata", resumePlayback);
    video.addEventListener("loadedmetadata", resumePlayback);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", resumePlayback);
    window.addEventListener("pageshow", resumePlayback);

    return () => {
      window.clearInterval(retryId);
      video.removeEventListener("canplay", resumePlayback);
      video.removeEventListener("loadeddata", resumePlayback);
      video.removeEventListener("loadedmetadata", resumePlayback);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", resumePlayback);
      window.removeEventListener("pageshow", resumePlayback);
    };
  }, [isInView, shouldLoad]);

  useEffect(() => {
    if (!shouldLoad) return;

    const unlockPlayback = () => {
      const video = videoRef.current;
      if (!video) return;

      video.muted = true;
      video.defaultMuted = true;
      video.playsInline = true;

      if (!isInView) return;
      void video.play().catch(() => {});
    };

    const pointerOpts: AddEventListenerOptions = { passive: true, once: true };
    const keyOpts: AddEventListenerOptions = { once: true };

    window.addEventListener("pointerdown", unlockPlayback, pointerOpts);
    window.addEventListener("touchend", unlockPlayback, pointerOpts);
    window.addEventListener("keydown", unlockPlayback, keyOpts);

    return () => {
      window.removeEventListener("pointerdown", unlockPlayback);
      window.removeEventListener("touchend", unlockPlayback);
      window.removeEventListener("keydown", unlockPlayback);
    };
  }, [isInView, shouldLoad]);

  return (
    <div ref={containerRef} className="h-full w-full">
      <video
        {...({ "webkit-playsinline": "true" } as Record<string, string>)}
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
