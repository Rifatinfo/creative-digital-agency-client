'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"



interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
  title: string
}

export function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title,
}: VideoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <div className="aspect-video w-full">
          <iframe
            src={videoUrl}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full rounded-b-lg"
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
