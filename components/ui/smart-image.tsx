"use client";

import Image from "next/image";
import { useState } from "react";
import { withBasePath } from "@/lib/base-path";

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
  const resolvedSrc = withBasePath(src);

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
      src={resolvedSrc}
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
