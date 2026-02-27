"use client";

import Image from "next/image";
import { useState } from "react";

type SmartImageProps = {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  width?: number;
  height?: number;
  fallbackLabel?: string;
};

export function SmartImage({
  src,
  alt,
  className,
  fill = false,
  width,
  height,
  fallbackLabel = "Placeholder"
}: SmartImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`grid place-items-center bg-gradient-to-br from-card to-surface text-center text-xs text-muted ${className ?? ""}`}
        role="img"
        aria-label={alt}
      >
        <span>{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      fill={fill}
      width={width}
      height={height}
      onError={() => setFailed(true)}
      unoptimized
    />
  );
}
