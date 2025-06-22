"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const videos = [
  {
    id: 1,
    thumbnail: "/chica3.png",
    title: "Teatro Debate - Chica, Maria, José ",
    description: "Treatro abordando temas sociais com humor e reflexão",
    videoUrl: "/chicavideo.mp4",
  },
  {
    id: 2,
    thumbnail: "/teatrodereprise.jpg",
    title: "Teatro Reprise - Explicação",
    description: "Explicação rápida sobre o teatro reprise e sua importância",
    videoUrl: "/videoreprise.mp4",
  },
  {
    id: 3,
    thumbnail: "/emovideo.png",
    title: "EMOVIDEO - Faça ja para quem ama!",
    description: "Um pequeno convite para o EMOVIDEO",
    videoUrl: "/EMOVIDEO .mp4",
  },
]

export function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startCarousel = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
    }, 5000)
  }

  const stopCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    if (!isModalOpen) {
      startCarousel()
    } else {
      stopCarousel()
    }

    return () => stopCarousel()
  }, [isModalOpen])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }

  const handlePlayVideo = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="relative w-full h-96 rounded-xl overflow-hidden bg-gray-100">
      <div className="relative w-full h-full">
        <img
          src={videos[currentIndex].thumbnail || "/placeholder.svg"}
          alt={videos[currentIndex].title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <Button
            size="lg"
            className="bg-white/20 hover:bg-white/30 text-white border-white/30"
            onClick={handlePlayVideo}
          >
            <Play className="mr-2 h-5 w-5" />
            Assistir Vídeo
          </Button>
        </div>
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white"
        onClick={goToNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {videos.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="font-semibold text-lg">{videos[currentIndex].title}</h3>
        <p className="text-sm text-white/80">{videos[currentIndex].description}</p>
      </div>

      {/* Modal de vídeo */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-full max-w-3xl p-4">
            <button
              className="absolute top-2 right-2 text-white text-xl"
              onClick={handleCloseModal}
            >
              ✖
            </button>
            <div className="aspect-video w-full">
              <iframe
                width="100%"
                height="100%"
                src={videos[currentIndex].videoUrl + "?autoplay=1"}
                title={videos[currentIndex].title}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

