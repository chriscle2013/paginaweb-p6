"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-background via-muted to-background"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">
              Innovador en
              <span className="text-accent block">Multimedia & IA</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Explorando el futuro digital a través de la creatividad, tecnología y pasión por la innovación
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              onClick={() => scrollToSection("biografia")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3"
            >
              Conoce mi historia
            </Button>
            <Button variant="outline" size="lg" onClick={() => scrollToSection("hobbies")} className="px-8 py-3">
              Ver mis hobbies
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("biografia")}
          className="text-muted-foreground hover:text-accent transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  )
}
