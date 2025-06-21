import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Award, Calendar, Heart, Users } from "lucide-react"
import Link from "next/link"

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-gray-300">
              Nossa História
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Conheça a<span className="text-gray-600"> TAO Cultural</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              A história de amor que se transformou em uma metodologia revolucionária para o desenvolvimento
              organizacional
            </p>
          </div>
        </div>
      </section>

      {/* História do Casal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold text-black mb-6">Nossa Jornada</h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  A TAO Cultural nasceu do encontro de duas paixões: o amor pelo teatro e o amor um pelo outro. Nos conhecemos nos palcos e descobrimos que juntos podemos criar algo muito maior do que nossas
                  carreiras individuais.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                  Combinando o teatro, experiência corporativa e um desejo enorme de fazer a diferença no mundo,  criamos a TAO Cultural
                  para levar o poder transformador do teatro às empresas. Nossa missão é utilizar a arte como ferramenta de desenvolvimento humano e organizacional, criando experiências que geram impacto real.
                </p>
                <div className="flex items-center space-x-6 text-sm text-gray-500">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>15 anos de teatro de reprise</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Users className="h-4 w-4" />
                    <span>200+ apresentações</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-4 w-4" />
                    <span>Impactando pessoas</span> 
                  </div>
                </div>
              </div>
              <div className="relative">
                <img
                  src="/fotos/foto11.jpg"
                  alt="Damaris e Célio"
                  className="w-full h-96 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute -bottom-6 -left-6 bg-black text-white p-4 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-red-400" />
                    <span className="font-semibold">Unidos pela arte</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfil Individual - Damaris */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <div className="relative">
                  <img
                    src="/fotos/foto1.jpg"
                    alt="Damaris Ferreira"
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                  <Badge className="absolute top-4 left-4 bg-black text-white">Co-fundadora</Badge>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl font-bold text-black mb-4">Damaris Ferreira</h2>
                <p className="text-xl text-gray-600 mb-6">Atriz, Produtora, especialista em Psicodrama e Gestora    </p>

                <div className="space-y-4 mb-8">
                  <p className="text-gray-600 leading-relaxed">
                    Formada em Artes Cênicas na FASCS, Psicodrama na PUC|SP e Gestão Empresarial FATEC|SP. Com vivência de 30 anos na liderança de equipes em grandes empresas, e 5 anos no Terceiro Setor. 
                     
                  
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Um ambiente de trabalho saudável se faz pelo ganha ganha, pelo respeito as diferenças, empatia e resultados compartilhados.
                    Esses elementos são recursos que podemos nos apropriar das artes cênicas, da encenação refletida como espelho potente para o autoconhecimento. 
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <Card className="border-gray-200">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-black">35+</div>
                      <div className="text-sm text-gray-600">Anos de Teatro</div>
                    </CardContent>
                  </Card>
                  <Card className="border-gray-200">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-black">12+</div>
                      <div className="text-sm text-gray-600">Peças Realizados</div>
                    </CardContent>
                  </Card>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfil Individual - Célio */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold text-black mb-4">Célio de Sousa</h2>
                <p className="text-xl text-gray-600 mb-6">Ator, Roterista, Diretor e Educador</p>

                <div className="space-y-4 mb-8">
                  <p className="text-gray-600 leading-relaxed">
                    A sua formação inclui Artes Cênicas no  Macunaíma, Administração pela PUC|SP e Pós-Graduação em Educação para o Ensino Técnico pelo IFES. 
                    Há 17 anos atua como socioeducador e professor da ETEC|SP.
                    
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Escreve e dirige peças teatrais que abordam temas atuais sempre com o objetivo de promover reflexão e mudança social.
                    Elabora textos sob medida para cada empresa, criando roteiros que refletem a realidade dos colaboradores e promovem discussões construtivas.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <Card className="border-gray-200">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-black">40+</div>
                      <div className="text-sm text-gray-600">Anos de Teatro</div>
                    </CardContent>
                  </Card>
                  <Card className="border-gray-200">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-black">20+</div>
                      <div className="text-sm text-gray-600">Peças Escritas e Dirigidas </div>
                    </CardContent>
                  </Card>
                </div>

              </div>
              <div>
                <div className="relative">
                  <img
                    src="/fotos/foto3.jpg"
                    alt="Célio de Sousa Ferreira Filho"
                    className="w-full h-96 object-cover rounded-2xl shadow-lg"
                  />
                  <Badge className="absolute top-4 right-4 bg-black text-white">Co-fundador</Badge>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-black mb-6">Nossa Metodologia</h2>
            <p className="text-xl text-gray-600 mb-12">
              Desenvolvemos uma abordagem única que combina teatro, psicologia e desenvolvimento organizacional
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-gray-200 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">Diagnóstico</h3>
                  <p className="text-gray-600">
                    Analisamos a cultura organizacional e identificamos pontos de melhoria através de entrevistas e
                    observação.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">Criação</h3>
                  <p className="text-gray-600">
                    Desenvolvemos roteiros e cenas personalizadas baseadas na realidade específica de cada empresa.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-gray-200 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-black mb-3">Mobilização</h3>
                  <p className="text-gray-600">
                    Aplicamos as técnicas teatrais e facilitamos discussões que geram insights e mudanças reais.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Quer conhecer nosso trabalho?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Descubra como nossa metodologia pode transformar sua empresa
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black px-8"
          >
            <Link href="/servicos">
              Ver nossos serviços
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
