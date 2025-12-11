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
  thumbnail : string;
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
    <div>
      <div onClick={handlePlayClick}>
        <div className="relative md:-space-y-2 space-y-2 cursor-pointer">
          <figure>
            <Image
              className="rounded-2xl"
              width={292} height={164}
              src={project.thumbnail}
              alt="Shoes" />
          </figure>
           <PlayButton></PlayButton>
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
