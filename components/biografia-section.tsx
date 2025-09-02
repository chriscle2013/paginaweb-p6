"use client" // Added client directive to enable onError event handler

import { Card, CardContent } from "@/components/ui/card"
import { Music, Utensils, GraduationCap, Brain } from "lucide-react"
import Image from "next/image"

export function BiografiaSection() {
  return (
    <section id="biografia" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Mi Historia</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Un viaje de 47 años explorando la intersección entre creatividad y tecnología
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <p className="text-lg text-foreground leading-relaxed text-pretty">
                  Soy un apasionado del mundo digital con más de 18 años de experiencia en
                  <span className="font-semibold text-accent"> Producción Multimedia y Marketing Digital</span>.
                  Actualmente curso un diplomado en <span className="font-semibold text-accent">Inteligencia Artificial</span> en la
                  Universidad Libre, explorando cómo la tecnología transforma nuestra realidad.
                </p>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-4">
              <Card className="p-4 hover:shadow-md transition-shadow">
                <CardContent className="p-0 flex items-center space-x-3">
                  <Music className="h-8 w-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Música</h3>
                    <p className="text-sm text-muted-foreground">Rock, Trance, Deep House, Metal</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 hover:shadow-md transition-shadow">
                <CardContent className="p-0 flex items-center space-x-3">
                  <Utensils className="h-8 w-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Gastronomía</h3>
                    <p className="text-sm text-muted-foreground">Comida Oriental</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 hover:shadow-md transition-shadow">
                <CardContent className="p-0 flex items-center space-x-3">
                  <GraduationCap className="h-8 w-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Formación</h3>
                    <p className="text-sm text-muted-foreground">Multimedia & Marketing</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-4 hover:shadow-md transition-shadow">
                <CardContent className="p-0 flex items-center space-x-3">
                  <Brain className="h-8 w-8 text-accent flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-foreground">Estudiando</h3>
                    <p className="text-sm text-muted-foreground">Inteligencia Artificial</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <Image
                  src="/CHRISTIAN.PNG"
                  alt="Retrato profesional de especialista en multimedia e inteligencia artificial"
                  width={288}
                  height={288}
                  className="w-72 h-72 rounded-full object-cover border-4 border-accent/20"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = "/CHRISTIAN.PNG"
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full font-semibold">
                47 años
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
