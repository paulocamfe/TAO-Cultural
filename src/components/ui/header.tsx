"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Instagram, Youtube, Menu } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// TikTok icon component since it's not in Lucide
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/logo-tao.png" alt="TAO Cultural" width={140} height={45} className="h-12 w-auto" />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-black transition-colors font-medium">
              Início
            </Link>
            <Link href="/quemsomos" className="text-gray-700 hover:text-black transition-colors font-medium">
              Quem Somos
            </Link>
            <Link href="/servicos" className="text-gray-700 hover:text-black transition-colors font-medium">
              Serviços
            </Link>
            <Link href="#contato" className="text-gray-700 hover:text-black transition-colors font-medium">
              Contato
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-3">
              <Link
                href="https://instagram.com/taocultural"
                target="_blank"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com/@taocultural"
                target="_blank"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@taocultural_"
                target="_blank"
                className="text-gray-600 hover:text-black transition-colors"
              >
                <TikTokIcon className="h-5 w-5" />
              </Link>
            </div>

            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link href="/" className="text-gray-700 hover:text-black transition-colors font-medium">
                    Início
                  </Link>
                  <Link href="/quem-somos" className="text-gray-700 hover:text-black transition-colors font-medium">
                    Quem Somos
                  </Link>
                  <Link href="/servicos" className="text-gray-700 hover:text-black transition-colors font-medium">
                    Serviços
                  </Link>
                  <Link href="#contato" className="text-gray-700 hover:text-black transition-colors font-medium">
                    Contato
                  </Link>
                  <div className="flex items-center space-x-4 pt-4">
                    <Link
                      href="https://instagram.com/taocultural"
                      target="_blank"
                      className="text-gray-600 hover:text-black"
                    >
                      <Instagram className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://youtube.com/@taocultural"
                      target="_blank"
                      className="text-gray-600 hover:text-black"
                    >
                      <Youtube className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://www.tiktok.com/@taocultural_"
                      target="_blank"
                      className="text-gray-600 hover:text-black"
                    >
                      <TikTokIcon className="h-5 w-5" />
                    </Link>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
