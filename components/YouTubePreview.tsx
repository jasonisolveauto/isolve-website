"use client";

import { useState } from "react";

type YouTubePreviewProps = {
  videoId: string;
  title: string;
};

export default function YouTubePreview({ videoId, title }: YouTubePreviewProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&autoplay=1`;

  if (isLoaded) {
    return (
      <iframe
        className="absolute inset-0 h-full w-full"
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      className="group absolute inset-0 block h-full w-full overflow-hidden bg-slate-950 text-left"
      aria-label={`Play ${title}`}
      onClick={() => setIsLoaded(true)}
    >
      <span
        className="absolute inset-0 bg-cover bg-center opacity-80 saturate-[0.85] transition duration-300 group-hover:scale-[1.03] group-hover:opacity-95"
        style={{ backgroundImage: `url(${thumbnailUrl})` }}
      />
      <span className="absolute inset-0 bg-gradient-to-br from-slate-950/30 via-slate-950/10 to-cyan-950/35" />
      <span className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border border-cyan-200/35 bg-slate-950/75 shadow-2xl shadow-cyan-950/50 backdrop-blur transition group-hover:border-cyan-200/60 group-hover:bg-slate-900/85">
          <span className="ml-1 h-0 w-0 border-y-[11px] border-l-[17px] border-y-transparent border-l-cyan-200" />
        </span>
      </span>
    </button>
  );
}
