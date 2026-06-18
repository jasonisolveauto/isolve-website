"use client";

import { useState } from "react";

type YouTubePreviewProps = {
  videoId: string;
  title: string;
};

export default function YouTubePreview({ videoId, title }: YouTubePreviewProps) {
  const [hasUserStartedAudio, setHasUserStartedAudio] = useState(false);
  const embedUrl = hasUserStartedAudio
    ? `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&autoplay=1&start=0`
    : `https://www.youtube-nocookie.com/embed/${videoId}?rel=0&modestbranding=1&playsinline=1&autoplay=1&mute=1`;

  return (
    <>
      <iframe
        key={embedUrl}
        className="absolute inset-0 h-full w-full"
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="eager"
      />
      {!hasUserStartedAudio && (
        <button
          type="button"
          className="absolute inset-0 cursor-pointer bg-transparent"
          aria-label={`Restart ${title} from the beginning with sound`}
          onClick={() => setHasUserStartedAudio(true)}
        />
      )}
    </>
  );
}
