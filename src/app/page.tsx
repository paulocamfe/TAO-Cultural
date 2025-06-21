import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Video, Theater, MessageCircle, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import { VideoCarousel } from "@/components/ui/video-carouel"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-6 border-gray-300 text-gray-700">
                  Teatro Corporativo  
                </Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
                  Transformando e mobilizando equipes através do
                  <span className="text-gray-600"> teatro</span>
                </h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                  Somos atores, com vivência no mercado corporativo e utilizamos a encenação como recurso potente para o desenvolvimento humano.              </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white px-8">
                    <Link href="/servicos">
                      Conheça nossos serviços
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50 px-8">
                    <Link href="/quemsomos">
                      <Users className="mr-2 h-4 w-4" />
                      Nossa História
                    </Link>
                  </Button>
                </div>
              </div>

              <div>
                <VideoCarousel />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">O que oferecemos</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Soluções teatrais inovadoras para transformar o ambiente corporativo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <Card className="border-gray-200 hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Theater className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Teatro de Reprise</h3>
                <p className="text-gray-600 text-sm">
                  Nossa especialidade principal: Teatro de improviso das histórias contadas pela plateia, em encontros
                  promovidos pela empresa.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Video className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Emovídeo</h3>
                <p className="text-gray-600 text-sm">
                  Uma homenagem em vídeo, encenada por nós, para alguém a sua escolha.
                </p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Teatro Debate</h3>
                <p className="text-gray-600 text-sm">Peças teatrais clássicas adaptadas ao ambiente corporativo para promover diálogo e reflexão.</p>
              </CardContent>
            </Card>

            <Card className="border-gray-200 hover:shadow-lg transition-all hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-black rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-black mb-3">Criações exclusivas</h3>
                <p className="text-gray-600 text-sm">Peças teatrais e vídeos customizados.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button asChild size="lg" className="bg-black hover:bg-gray-800 text-white px-8">
              <Link href="/servicos">
                Ver todos os serviços e valores
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Galeria de Fotos */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">Nosso Trabalho</h2>
            <p className="text-xl text-gray-600">Veja alguns momentos dos nossos espetáculos</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((i) => (    
              <div
                key={i}
                className="aspect-square bg-gray-200 rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              >
                <img
                  src={`/fotos/foto${i}.jpg`}
                  alt={`Trabalho ${i}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">O que nossos clientes dizem</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Maria Silva",
                company: "Empresa ABC",
                text: "O trabalho da TAO Cultural transformou completamente nossa equipe. O teatro de reprise nos ajudou a identificar e resolver conflitos internos.",
              },
              {
                name: "João Santos",
                company: "Corporação XYZ",
                text: "Excelente metodologia! Os vídeos personalizados criaram um impacto incrível em nossos colaboradores.",
              },
              {
                name: "Ana Costa",
                company: "Grupo DEF",
                text: "Damaris e Célio são profissionais excepcionais. Recomendo para qualquer empresa que busca inovação em treinamentos.",
              },
            ].map((testimonial, index) => (
              <Card key={index} className="border-gray-200">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-black">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para transformar sua empresa?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco e descubra como o teatro pode revolucionar o ambiente de trabalho da sua
            organização.
          </p>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8">
            Solicitar Orçamento Gratuito
          </Button>
        </div>
      </section>
    </div>
  )
}
