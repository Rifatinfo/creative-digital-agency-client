"use client";

import { useState } from "react";
import { VideoModal } from "./VideoModal";
import Image from "next/image";
import PlayButton from "./PlayButton";

export interface Project {
  id: string;
  title: string;
  category: string;
  language: string;
  rating: string;
  thumbnailColor: string;
  videoUrl?: string;
  thumbnail: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handlePlayClick = () => {
    if (project.videoUrl) setIsVideoOpen(true);
  };

  return (
    <div className="px-4 md:px-0">
      <div onClick={handlePlayClick}>
        <div className="relative w-full overflow-hidden rounded-2xl cursor-pointer">
          {/* Image container */}
          <div className="relative w-full aspect-video">
            <Image
              src={project.thumbnail}
              alt={project.title}
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 640px) 100vw,
               (max-width: 1024px) 50vw,
               33vw"
              priority
            />
          </div>

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <PlayButton />
          </div>
        </div>

        {/* play button */}
      </div>
      {project.videoUrl && (
        <VideoModal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoUrl={project.videoUrl}
          title={project.title}
        />
      )}
    </div>
  );
}
