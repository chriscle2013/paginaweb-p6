"use client"

import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { X } from "lucide-react"

const productos = [
  {
    id: 1,
    nombre: "Bolsa Tote Bag",
    precio: "89.000",
    descripcion:
      'Bolsa tipo tote bag fabricada con algodón orgánico de alta resistencia. Cuenta con asas de cuero vegano para un toque de elegancia. El logo de tu marca se ubicará en el centro, impreso con una técnica de serigrafía de alta calidad. Es un producto funcional, duradero y ecológico, ideal para ser usado en eventos, reuniones o en el día a día.',
    imagen: "/Bolsa_Activemedios.png",
    fallback: "/elegant-organic-cotton-tote-bag-with-vegan-leather.png",
  },
  {
    id: 2,
    nombre: "Termo de Acero",
    precio: "110.000",
    descripcion:
      'Termo de acero inoxidable de doble pared con acabado mate, diseñado para mantener las bebidas frías o calientes por largos periodos. Su diseño es ergonómico y minimalista. El logo de tu marca estará grabado con láser en la parte inferior, dándole un toque sutil pero permanente. La tapa es de rosca con un sello hermético, lo que garantiza que sea a prueba de derrames.',
    imagen: "/Termo1.png",
    fallback: "/Termo1.png",
  },
  {
    id: 3,
    nombre: "Libreta Premium",
    precio: "76.900",
    descripcion:
      'Cuaderno de tapa dura con un acabado de lino texturizado. En su interior, las hojas están hechas de papel reciclado de alta calidad. Las primeras páginas contienen información sobre la empresa y un espacio para la planificación de proyectos. El logo de tu marca estará grabado en relieve en la esquina inferior derecha de la portada, utilizando un sutil color blanco o gris para un efecto elegante y discreto.',
    imagen: "/Libreta-activemedios.png",
    fallback: "/Libreta-activemedios.png",
  },
]

export function ProductosSection() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({})
  const [selectedProduct, setSelectedProduct] = useState<(typeof productos)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isImageZoomOpen, setIsImageZoomOpen] = useState(false)

  const handleImageError = (productId: number) => {
    setImageErrors((prev) => ({ ...prev, [productId]: true }))
  }

  const openProductModal = (producto: (typeof productos)[0]) => {
    setSelectedProduct(producto)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  }

  const openImageZoom = () => {
    setIsImageZoomOpen(true)
  }

  const closeImageZoom = () => {
    setIsImageZoomOpen(false)
  }

  return (
    <>
      <section id="productos" className="py-20 bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">Productos Active Medios</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Descubre nuestra línea de productos premium diseñados con calidad y sostenibilidad
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {productos.map((producto) => (
              <div
                key={producto.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={imageErrors[producto.id] ? producto.fallback : producto.imagen}
                    alt={producto.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={() => handleImageError(producto.id)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">{producto.nombre}</h3>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-purple-600">${producto.precio}</span>
                      <p className="text-sm text-gray-500">COP</p>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-pretty line-clamp-3">{producto.descripcion}</p>

                  <div className="mt-6">
                    <button
                      onClick={() => openProductModal(producto)}
                      className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-gray-900 pr-8">{selectedProduct?.nombre}</DialogTitle>
            <button
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Cerrar</span>
            </button>
          </DialogHeader>

          {selectedProduct && (
            <div className="grid md:grid-cols-2 gap-8 mt-6">
              <div
                className="relative aspect-square rounded-lg overflow-hidden cursor-zoom-in hover:opacity-90 transition-opacity"
                onClick={openImageZoom}
              >
                <Image
                  src={imageErrors[selectedProduct.id] ? selectedProduct.fallback : selectedProduct.imagen}
                  alt={selectedProduct.nombre}
                  fill
                  className="object-cover"
                  onError={() => handleImageError(selectedProduct.id)}
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity bg-black/20">
                  <div className="bg-white/90 rounded-full p-2">
                    <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-bold text-gray-900">{selectedProduct.nombre}</h3>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-purple-600">${selectedProduct.precio}</span>
                    <p className="text-sm text-gray-500">COP</p>
                  </div>
                </div>

                <div className="prose prose-gray max-w-none">
                  <p className="text-gray-600 leading-relaxed text-lg">{selectedProduct.descripcion}</p>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => window.open("https://wa.link/v46daa", "_blank")}
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-4 px-8 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg text-lg"
                  >
                    Contactar para Comprar
                  </button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={isImageZoomOpen} onOpenChange={setIsImageZoomOpen}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95">
          <button
            onClick={closeImageZoom}
            className="absolute right-4 top-4 z-50 rounded-full bg-white/10 p-2 text-white hover:bg-white/20 transition-colors"
          >
            <X className="h-6 w-6" />
            <span className="sr-only">Cerrar zoom</span>
          </button>

          {selectedProduct && (
            <div className="relative w-full h-[95vh] flex items-center justify-center">
              <Image
                src={imageErrors[selectedProduct.id] ? selectedProduct.fallback : selectedProduct.imagen}
                alt={selectedProduct.nombre}
                fill
                className="object-contain"
                onError={() => handleImageError(selectedProduct.id)}
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
