"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play } from "lucide-react"
import { Button } from "@/components/ui/button"

const videos = [
  {
    id: 1,
    thumbnail: "/placeholder.svg?height=400&width=600",
    title: "Teatro de Reprise - Empresa XYZ",
    description: "Transformação organizacional através do teatro",
  },
  {
    id: 2,
    thumbnail: "/placeholder.svg?height=400&width=600",
    title: "Emovídeo - História de Sucesso",
    description: "Cliente conta sua história em formato teatral",
  },
  {
    id: 3,
    thumbnail: "/placeholder.svg?height=400&width=600",
    title: "Comédia Corporativa - Dia a Dia",
    description: "Humor inteligente sobre o ambiente de trabalho",
  },
]

export function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length)
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
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
          <Button size="lg" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
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
    </div>
  )
}
