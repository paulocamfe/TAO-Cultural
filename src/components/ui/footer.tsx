import { Instagram, Youtube, Mail, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

export function Footer() {
  return (
    <footer id="contato" className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Image
              src="/logo-tao.png"
              alt="TAO Cultural"
              width={140}
              height={45}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Transformando empresas através do teatro e psicodrama. Somos especialistas em desenvolvimento
              organizacional através de metodologias teatrais inovadoras.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/taocultural"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://youtube.com/@taocultural"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                <Youtube className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.tiktok.com/@taocultural_"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors p-2 bg-gray-800 rounded-lg hover:bg-gray-700"
              >
                <TikTokIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4" />
                <span>damarisf575@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4" />
                <span>(11) 97213-9531</span>
              </div>
              <p className="pt-2">
                <strong>Damaris Ferreira</strong>
                <br />
                <strong>Célio de Sousa</strong>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Serviços</h4>
            <ul className="space-y-3 text-gray-400">
              <li>Teatro de Reprise</li>
              <li>Emovídeo</li>
              <li>Teatro Debate</li>
              <li>Criações exclusivas</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 TAO Cultural. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
