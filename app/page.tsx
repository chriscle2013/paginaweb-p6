import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { BiografiaSection } from "@/components/biografia-section"
import { HobbiesSection } from "@/components/hobbies-section"
import { ProductosSection } from "@/components/productos-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BiografiaSection />
      <HobbiesSection />
      <ProductosSection />
      <Footer />
    </main>
  )
}
