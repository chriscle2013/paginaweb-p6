"use client" // Added client directive to enable onError event handler

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Brain, Zap } from "lucide-react"
import Image from "next/image"

export function HobbiesSection() {
  const hobbies = [
    {
      title: "Producción Multimedia",
      icon: Monitor,
      image: "/multimedia-production-studio-with-screens-and-audi.png",
      description:
        "La producción multimedia es para mí una forma de conectar creatividad y tecnología. Disfruto crear piezas visuales y audiovisuales que transmitan emociones y generen impacto en las personas.",
      curiosity:
        "El primer proyecto multimedia que realicé combinaba animación 2D con música electrónica hecha por mí mismo.",
    },
    {
      title: "Inteligencia Artificial",
      icon: Brain,
      image: "/artificial-intelligence-neural-network-visualizati.png",
      description:
        "La inteligencia artificial me motiva porque representa el futuro de la innovación. Explorar cómo las máquinas aprenden y nos ayudan en procesos creativos es un desafío que me apasiona.",
      curiosity:
        "Mi primer contacto con IA fue creando un chat bots con dialogflow de google y funcionó mejor de lo que esperaba!",
    },
    {
      title: "Fórmula 1",
      icon: Zap,
      image: "/formula-1-racing-car-on-track-with-speed-motion-bl.png",
      description:
        "La Fórmula 1 me fascina por la mezcla de velocidad, estrategia y tecnología. Cada carrera es una muestra de precisión y adrenalina que me inspira en mi vida profesional y personal.",
      curiosity:
        "El piloto más rápido registrado en la F1 alcanzó 372,6 km/h, una velocidad que casi parece ciencia ficción.",
    },
  ]

  return (
    <section id="hobbies" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Mis Hobbies</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tres pasiones que definen mi creatividad y visión del futuro
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {hobbies.map((hobby, index) => {
            const IconComponent = hobby.icon
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={hobby.image || "/placeholder.svg"}
                    alt={`Imagen representativa de ${hobby.title}`}
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = `/placeholder.svg?height=192&width=400&query=${encodeURIComponent(hobby.title)}`
                    }}
                  />
                  <div className="absolute top-4 right-4 bg-accent text-accent-foreground p-2 rounded-full">
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-xl font-bold text-foreground text-balance">{hobby.title}</CardTitle>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed text-pretty">{hobby.description}</p>

                  <div className="bg-muted/50 p-4 rounded-lg border-l-4 border-accent">
                    <p className="text-sm font-medium text-foreground mb-1">👉 Dato curioso:</p>
                    <p className="text-sm text-muted-foreground text-pretty">{hobby.curiosity}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
