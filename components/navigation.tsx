"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <Image
              src="/professional-logo-design.png"
              alt="Christian Fernando Cleves Arzayus Logo"
              width={40}
              height={40}
              className="rounded-full"
              onError={(e) => {
                const target = e.target as HTMLImageElement
                target.src = "/professional-logo-cf.png"
              }}
            />
            <div className="font-bold text-lg sm:text-xl text-foreground hidden sm:block">
              CHRISTIAN FERNANDO CLEVES ARZAYUS
            </div>
            <div className="font-bold text-sm text-foreground sm:hidden">CF CLEVES</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("hero")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("biografia")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Biografía
            </button>
            <button
              onClick={() => scrollToSection("hobbies")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Hobbies
            </button>
            <button
              onClick={() => scrollToSection("productos")}
              className="text-foreground hover:text-accent transition-colors"
            >
              Productos
            </button>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <button
                onClick={() => scrollToSection("hero")}
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors w-full text-left"
              >
                Inicio
              </button>
              <button
                onClick={() => scrollToSection("biografia")}
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors w-full text-left"
              >
                Biografía
              </button>
              <button
                onClick={() => scrollToSection("hobbies")}
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors w-full text-left"
              >
                Hobbies
              </button>
              <button
                onClick={() => scrollToSection("productos")}
                className="block px-3 py-2 text-foreground hover:text-accent transition-colors w-full text-left"
              >
                Productos
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
