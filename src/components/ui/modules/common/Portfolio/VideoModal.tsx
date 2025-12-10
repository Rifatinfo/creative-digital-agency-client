"use client";

import { Dialog, DialogContent, DialogClose, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
  title?: string;
}

export function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  return (
    <div className="md:px-0 px-2">
      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) onClose();
        }}
      >
        <DialogTitle className="hidden">Are you absolutely sure?</DialogTitle>
        <DialogContent
          className="max-w-5xl w-full p-0  bg-black border-0 overflow-hidden pointer-events-auto"
        >
          {/* Close Button */}
          <DialogClose className="absolute top-4 right-4 z-50 rounded-full bg-black/50 p-2 text-white opacity-70 hover:opacity-100 hover:bg-black/70">
            <X className="size-6" />
            {/* <span className="sr-only">Close</span> */}
          </DialogClose>

          {/* Video */}
          <div className="relative w-full aspect-video bg-black">
            {getEmbedPlayer(videoUrl, title)}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}


function getYouTubeEmbedUrl(url: string): string {
  let videoId = "";

  if (url.includes("watch?v=")) {
    videoId = url.split("v=")[1]?.split("&")[0] || "";
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1]?.split("?")[0] || "";
  } else if (url.includes("embed/")) {
    videoId = url.split("embed/")[1]?.split("?")[0] || "";
  }

  return videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
    : url;
}

function getVimeoEmbedUrl(url: string): string {
  const videoId = url.match(/vimeo\.com\/(?:video\/)?(\d+)/)?.[1];

  return videoId
    ? `https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`
    : url;
}

function getFacebookEmbedUrl(url: string): string {
  const encodedUrl = encodeURIComponent(url);

  return `https://www.facebook.com/plugins/video.php?height=314&href=${encodedUrl}&show_text=false&width=560&t=0`;
}

function getEmbedPlayer(url: string, title?: string) {
  if (url.includes("youtube.com") || url.includes("youtu.be")) {
    return (
      <iframe
        className="w-full h-full"
        src={getYouTubeEmbedUrl(url)}
        title={title || "Video player"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  if (url.includes("vimeo.com")) {
    return (
      <iframe
        className="w-full h-full"
        src={getVimeoEmbedUrl(url)}
        title={title || "Video player"}
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
      />
    );
  }

  if (url.includes("facebook.com") || url.includes("fb.watch")) {
    return (
      <iframe
        className="w-full h-full"
        src={getFacebookEmbedUrl(url)}
        title={title || "Video player"}
        allow="autoplay; encrypted-media; clipboard-write; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return <video className="w-full h-full" src={url} controls autoPlay />;
}

