import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-muted-foreground">
            <span>Hecho con</span>
            <Heart className="h-4 w-4 text-accent fill-current" />
            <span>por Active Medios Agencia</span>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 Portafolio Digital. Explorando el futuro a través de la creatividad y la innovación.
          </p>
        </div>
      </div>
    </footer>
  )
}
