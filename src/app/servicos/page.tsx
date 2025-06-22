import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Users, Video, Theater, MessageCircle, Check, Clock, Star } from "lucide-react"
import {  SingleVideoPlayer } from "@/components/ui/single-video-player"

export default function ServicosPage() {
  return (

    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6 border-gray-300">
              Nossos Serviços
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 leading-tight">
              Soluções teatrais para
            <br />
              <span className="text-gray-600"> sua empresa</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Oferecemos metodologias inovadoras que combinam teatro e psicodrama para transformar ambientes
              corporativos
            </p>
          </div>
        </div>
      </section>

      {/* Serviços Detalhados */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="reprise" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-12">
              <TabsTrigger value="reprise">Teatro de Reprise</TabsTrigger>
              <TabsTrigger value="emovideo">Emovídeo</TabsTrigger>
              <TabsTrigger value="tradicional">Teatro Debate</TabsTrigger>
              <TabsTrigger value="comedia">Criações exclusivas</TabsTrigger>
            </TabsList>

            <TabsContent value="reprise" className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <Theater className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-black">Teatro de Reprise</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Recriamos cenas reais contadas pelo público promovendo empatia, diálogo e soluções criativas. O cotidiano das equipes vira cena e a cena vira ponto de virada.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black">Diagnóstico Personalizado</h4>
                        <p className="text-gray-600">Análise profunda da cultura organizacional</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="h-5 w-10 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black">Roteiros Customizados</h4>
                        <p className="text-gray-600">Cenas encenadas a partir de histórias reais da empresa, adaptadas com linguagem teatral, humor e emoção um espelho que inspira ação.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="h-5 w-10 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black">Facilitação com Propósito</h4>
                        <p className="text-gray-600">Mediação qualificada para conversas que fazem a diferença. Reflexão, escuta ativa e insights que impulsionam transformação.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-black mb-2">Investimento</h4>
                    <div className="text-2xl font-bold text-black mb-2">A partir de R$ 8.500</div>
                    <p className="text-sm text-gray-600">Teatro de reprise completo</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <SingleVideoPlayer thumbnail="/teatrodereprise.jpg" videoUrl="/videoreprise.mp4" alt="Teatro de Reprise" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/teatrodereprise.jpg"
                      alt="Teatro 1"
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <img
                      src="/fotos/foto6.jpg"
                      alt="Teatro 2"
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="emovideo" className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <Video className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-black">Emovídeo Corporativo</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Você conta sua história e nós a transformamos em um vídeo teatral personalizado. Ideal para
                    comunicação interna, treinamentos e apresentações corporativas.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black">Roteiro Personalizado</h4>
                        <p className="text-gray-600">Baseado na história real da sua empresa</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black">Produção Profissional</h4>
                        <p className="text-gray-600">Filmagem e edição de alta qualidade</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black">Múltiplos Formatos</h4>
                        <p className="text-gray-600">Adaptado para diferentes plataformas</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-black mb-2">Investimento</h4>
                    <div className="text-2xl font-bold text-black mb-2">A partir de R$ 12.000</div>
                    <p className="text-sm text-gray-600">Vídeo de até 10 minutos com produção completa</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <SingleVideoPlayer thumbnail="/emovideo.png" videoUrl="/EMOVIDEO .mp4" alt="Teatro de Reprise" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/placeholder.svg?height=150&width=250&text=Produção 1"
                      alt="Produção 1"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <img
                      src="/placeholder.svg?height=150&width=250&text=Produção 2"
                      alt="Produção 2"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tradicional" className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-black">Teatro Debate</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Espetáculos que provocam reflexão e diálogo sobre questões sociais urgentes. 
                    Promovemos cultura e conscientização enquanto abrimos espaço para o público discutir temas como violência, preconceito e direitos humanos.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <Check className="h-5 w-7 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black">Temas Atuais</h4>
                        <p className="text-gray-600">Cenas que retratam dilemas sociais e provocam reflexão</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="h-5 w-10 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black">Reflexão Coletiva</h4>
                        <p className="text-gray-600">Momentos de debate ao final da apresentação, com mediação e participação ativa do público</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="h-5 w-7  text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black">Experiência Transformadora</h4>
                        <p className="text-gray-600">Arte como ferramenta de diálogo, educação e mudança social</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-black mb-2">Investimento</h4>
                    <div className="text-2xl font-bold text-black mb-2">A partir de R$ 6.500</div>
                    <p className="text-sm text-gray-600">Apresentação de 45-60 minutos + Debate no final</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <SingleVideoPlayer thumbnail="/chica3.png" videoUrl="/chicavideo.mp4" alt="Chica" /> 
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/chica3.png"
                      alt="Peça 1"
                      className="w-full h-40 object-cover rounded-lg"
                    />
                    <img
                      src="/violencia.png"
                      alt="Peça 2"
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="comedia" className="space-y-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <MessageCircle className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-black">Criações exclusivas</h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Transforme a sua mensagem em uma experiência única.
                    Nossa equipe cria apresentações e vídeos totalmente personalizados, de acordo com o objetivo, público e linguagem da sua empresa.
                  </p>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black">Personalização Total</h4>
                        <p className="text-gray-600">Roteiro, formato e linguagem criados especialmente para sua empresa.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="h-5 w-5 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black">Foco no Objetivo</h4>
                        <p className="text-gray-600">Conteúdos alinhados ao resultado que você quer alcançar.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Check className="h-5 w-7 text-green-600 mt-1" />
                      <div>
                        <h4 className="font-semibold text-black">Atuação Profissional</h4>
                        <p className="text-gray-600">Atores experientes que transformam sua mensagem em uma experiência envolvente e memorável.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-black mb-2">Investimento</h4>
                    <div className="text-2xl font-bold text-black mb-2">A partir de R$ 3.500</div>
                    <p className="text-sm text-gray-600">Totalmente personalizado</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="relative">
                    <SingleVideoPlayer thumbnail="/#" videoUrl="/#" alt="#" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <img
                      src="/placeholder.svg?height=150&width=250&text=Comédia 1"
                      alt="Comédia 1"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <img
                      src="/placeholder.svg?height=150&width=250&text=Comédia 2"
                      alt="Comédia 2"
                      className="w-full h-32 object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Tabela de Preços */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">Planos e Investimentos</h2>
              <p className="text-xl text-gray-600">A mudança acontece com ações contínuas. 
                <br />
                Contratando o Plano Transformação, você garante o desenvolvimento da equipe de forma consistente.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-gray-200 relative">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-black"> </CardTitle>
                  <div className="text-4xl font-bold text-black mt-4">Básico</div>
                  <p className="text-gray-600">Plano básico</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3"> 
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">1 Workshop de 4 horas<br/>
                    a cada 3 meses</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Até 30 participantes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Material de apoio</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Relatório final</span>
                  </div>
                  <Button className="w-full mt-8 bg-gray-800 hover:bg-black">Solicitar Orçamento</Button>
                </CardContent>
              </Card>

              <Card className="border-black relative scale-105">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-black text-white">
                  Mais Popular
                </Badge>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-black"></CardTitle>
                  <div className="text-4xl font-bold text-black mt-4">Profissional</div>
                  <p className="text-gray-600">Plano profissional</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">2 Workshops de 4 horas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Até 40 participantes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">1 Emovídeo personalizado</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Follow-up de 30 dias</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Suporte online</span>
                  </div>
                  <Button className="w-full mt-8 bg-black hover:bg-gray-800">Solicitar Orçamento</Button>
                </CardContent>
              </Card>

              <Card className="border-gray-200 relative">
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-black"></CardTitle>
                  <div className="text-4xl font-bold text-black mt-4">Empresarial</div>
                  <p className="text-gray-600">Plano Empresarial</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Programa completo 3 meses</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Participantes ilimitados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">3 Emovídeos personalizados</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Consultoria mensal</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="text-gray-600">Suporte prioritário</span>
                  </div>
                  <Button className="w-full mt-8 bg-gray-800 hover:bg-black">Solicitar Orçamento</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Processo de Trabalho */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">Como Trabalhamos</h2>
              <p className="text-xl text-gray-600">Nosso processo estruturado garante resultados excepcionais</p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Diagnóstico Inicial",
                  description: "Reunião para entender os desafios e objetivos da sua empresa",
                  duration: "1-2 semanas",
                  icon: <Users className="h-6 w-6" />,
                },
                {
                  step: "02",
                  title: "Desenvolvimento do Projeto",
                  description: "Criação de roteiros e metodologias personalizadas",
                  duration: "2-3 semanas",
                  icon: <Theater className="h-6 w-6" />,
                },
                {
                  step: "03",
                  title: "Execução",
                  description: "Realização dos workshops, filmagens ou apresentações",
                  duration: "1 dia - 3 meses",
                  icon: <Play className="h-6 w-6" />,
                },
                {
                  step: "04",
                  title: "Acompanhamento",
                  description: "Follow-up e suporte para garantir a implementação dos resultados",
                  duration: "30-90 dias",
                  icon: <Star className="h-6 w-6" />,
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-6 p-6 bg-gray-50 rounded-lg">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-8 h-8 bg-gray-200 rounded-lg flex items-center justify-center">{item.icon}</div>
                      <h3 className="text-xl font-semibold text-black">{item.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-2">{item.description}</p>
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <Clock className="h-4 w-4" />
                      <span>Duração: {item.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">Perguntas Frequentes</h2>
              <p className="text-xl text-gray-600">Tire suas dúvidas sobre nossos serviços</p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "Qual é o tamanho ideal de grupo para os workshops?",
                  answer:
                    "Recomendamos grupos de 15 a 30 participantes para workshops de Teatro de Reprise, garantindo maior interação e participação de todos.",
                },
                {
                  question: "Vocês atendem empresas em outras cidades?",
                  answer:
                    "Sim! Atendemos em todo o Brasil. Para cidades fora de São Paulo, incluímos os custos de deslocamento no orçamento.",
                },
                {
                  question: "Quanto tempo leva para produzir um Emovídeo?",
                  answer:
                    "O processo completo leva de 3 a 4 semanas, incluindo desenvolvimento do roteiro, filmagem e edição final.",
                },
                {
                  question: "É possível personalizar completamente o conteúdo?",
                  answer:
                    "Absolutamente! Todos os nossos serviços são 100% personalizados baseados na cultura e necessidades específicas de cada empresa.",
                },
                {
                  question: "Oferecem garantia de resultados?",
                  answer:
                    "Oferecemos acompanhamento pós-projeto e ajustes necessários para garantir que os objetivos sejam alcançados.",
                },
              ].map((faq, index) => (
                <Card key={index} className="border-gray-200">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-black mb-3">{faq.question}</h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Pronto para começar?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para um orçamento personalizado e descubra como podemos transformar sua empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black px-8"
            >
              Solicitar Orçamento Gratuito
            </Button>
            <Button size="lg" variant="ghost" className="text-white hover:bg-white/10 px-8">
              Agendar Reunião
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
