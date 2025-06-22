"use client"

import { useState } from "react"
import { Play } from "lucide-react"

interface SingleVideoPlayerProps {
  thumbnail: string
  videoUrl: string
  alt?: string
}

export function SingleVideoPlayer({ thumbnail, videoUrl, alt }: SingleVideoPlayerProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden bg-gray-100">
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={alt || "Thumbnail do vídeo"}
        className="w-full h-full object-cover"
      />

      {/* Botão Play */}
      <button
        onClick={() => setIsOpen(true)}
        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/50 transition"
      >
        <Play className="h-12 w-12 text-white" />
      </button>

      {/* Modal do vídeo */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-2 text-white text-xl"
            >
              ✖
            </button>
            <div className="aspect-video w-full rounded-lg overflow-hidden">
              <video
                src={videoUrl}
                controls
                autoPlay
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
