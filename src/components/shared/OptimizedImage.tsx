import { useState } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  quality?: "low" | "medium" | "high";
  loading?: "lazy" | "eager";
}

export function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  quality = "high",
  loading = "lazy" 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const qualityStyles = {
    low: "image-rendering: auto;",
    medium: "image-rendering: -webkit-optimize-contrast;",
    high: "image-rendering: crisp-edges; image-rendering: -webkit-crisp-edges;"
  };

  return (
    <div className="relative overflow-hidden">
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-muted animate-pulse" />
      )}
      
      <img
        src={src}
        alt={alt}
        loading={loading}
        className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
        style={{
          imageRendering: quality === "high" ? "crisp-edges" : "auto",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)"
        }}
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        decoding="async"
      />
      
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center text-muted-foreground">
          Failed to load image
        </div>
      )}
    </div>
  );
}