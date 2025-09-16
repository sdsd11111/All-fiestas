"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Cake, Heart, Baby, Home, PartyPopper, Shirt, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
  {
    name: "Cumpleaños",
    icon: Cake,
    description: "Sorpresas, piñatas, regalos, y temáticas de personajes para tus celebraciones y mas.",
    image: "/Cumpleaños/card.jpg",
    modalTitle: "Artículos de Cumpleaños",
    modalDescription: "Encuentra todo para tu fiesta de cumpleaños desde:",
    modalItems: [
      "Sorpresas",
      "Piñatas personalizadas",
      "Regalitos",
      "Temática de personajes (infantil, adulto)",
      "Bolsas para regalos",
      "Máquina para inflar globos",
      "Pistolas y Burbujeras",
      "Globos y confetis de cumpleaños",
      "Pitos",
    ],
    images: [
      "/Cumpleaños/1.jpg",
      "/Cumpleaños/2.jpg",
      "/Cumpleaños/3.jpg",
      "/Cumpleaños/4.jpg",
    ],
  },
  {
    name: "Productos Kawaii",
    icon: Heart,
    description: "Productos lindos y llamativos para los jóvenes: Peluches de conejitos, bolsos de temáticas, y más.",
    image: "/Kawai/card.jpg",
    modalTitle: "Productos Kawaii",
    modalDescription: "Productos lindos y llamativos para los jóvenes:",
    modalItems: [
      "Peluches de conejitos",
      "Bolsos de temáticas",
      "Hotwheels",
      "Juegos de legos armables",
      "Otros productos cutes",
    ],
    images: [
      "/Kawai/1.jpg",
      "/Kawai/2.jpg",
      "/Kawai/3.jpg",
      "/Kawai/4.jpg",
    ],
  },
  {
    name: "Baby Shower & Sex Reveal",
    icon: Baby,
    description: "Decoraciones, toppers, y lanzadores de confeti para la gran revelación y mas.",
    image: "/Baby Shower/card.jpg",
    modalTitle: "Artículos para Baby Shower & Sex Reveal",
    modalDescription: "Todo para la gran revelación:",
    modalItems: [
      "Decoraciones",
      "Toppers",
      "Pinzas (colores azul y rosa)",
      "Juegos para baby shower",
      "Extintores de colores",
      "Lanzadores de confeti (explosivos)",
    ],
    images: [
      "/Baby Shower/1.jpg",
      "/Baby Shower/2.jpg",
      "/Baby Shower/3.jpg",
      "/Baby Shower/4.jpg",
    ],
  },
  {
    name: "Hogar",
    icon: Home,
    description: "Da un nuevo aire a tus espacios con nuestra decoración para mesas, centros de mesa, floreros artificiales y mas.",
    image: "/Hogar/card.jpg",
    modalTitle: "Artículos para el Hogar",
    modalDescription: "Transforma tus espacios con:",
    modalItems: [
      "Decoraciones para el hogar y floreros",
      "Decoraciones de mesa",
      "Centros de mesa",
      "Fruteros de plata artificial",
    ],
    images: [
      "/Hogar/1.jpg",
      "/Hogar/2.jpg",
      "/Hogar/3.jpg",
      "/Hogar/4.jpg",
    ],
  },
  {
    name: "Despedida de Soltera",
    icon: PartyPopper,
    description: "Manteles, platos, juegos, diademas para una celebración inolvidable y mas.",
    image: "/Despedida de Soltera/card.jpg",
    modalTitle: "Artículos para Despedida de Soltera",
    modalDescription: "Juegos, manteles, platos y diademas para hacer de ese momento una celebración inolvidable:",
    modalItems: ["Manteles y Platos temáticos", "Juegos y Shots", "Diademas"],
    images: [
      "/Despedida de Soltera/1.jpg",
      "/Despedida de Soltera/2.jpg",
      "/Despedida de Soltera/3.jpg",
      "/Despedida de Soltera/4.jpg",
    ],
  },
  {
    name: "Disfraces y Extensiones",
    icon: Shirt,
    description: "Disfraces para niños y kanekalon para crear extensiones de cabello de colores.",
    image: "/Disfraces/card.jpg",
    modalTitle: "Disfraces y Extensiones",
    modalDescription: "Amplia variedad de:",
    modalItems: ["Disfraces de distintos temas para niños", "Kanekalon para extensiones de cabello de colores"],
    images: [
      "/Disfraces/1.jpg",
      "/Disfraces/2.jpg",
      "/Disfraces/3.jpg",
      "/Disfraces/4.jpg",
    ],
  },
]

function ImageCarousel({ images, categoryName }: { images: string[]; categoryName: string }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative bg-muted/30 rounded-lg overflow-hidden border-2 border-dashed border-muted-foreground/20">
      <div className="relative h-64 md:h-80">
        <img
          src={images[currentIndex] || "/placeholder.svg"}
          alt={`${categoryName} - Imagen ${currentIndex + 1}`}
          className="w-full h-full object-cover"
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex justify-center gap-2 p-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-[#4B0082]" : "bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function CategoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[0] | null>(null)

  const handleWhatsAppContact = (categoryName: string) => {
    const message = `Hola! Me interesa conocer más sobre los productos de ${categoryName}. ¿Podrían ayudarme?`
    const whatsappUrl = `https://wa.me/50370703030?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 text-balance">Nuestras Categorías</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explora nuestra amplia gama de productos para cada tipo de celebración
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 hover:border-accent/50"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <IconComponent className="h-6 w-6 text-accent-foreground" />
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-primary mb-2">{category.name}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{category.description}</p>
                  <Button
                    onClick={() => setSelectedCategory(category)}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-medium"
                  >
                    Ver Más Detalles
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <Dialog open={!!selectedCategory} onOpenChange={() => setSelectedCategory(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-[#4B0082] mb-4">
                {selectedCategory?.modalTitle}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6">
              <div>
                <p className="text-gray-700 leading-relaxed text-base mb-4">{selectedCategory?.modalDescription}</p>
                <ul className="space-y-2 ml-4">
                  {selectedCategory?.modalItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#FF8C00] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {selectedCategory && (
                <ImageCarousel images={selectedCategory.images} categoryName={selectedCategory.name} />
              )}

              <div className="flex justify-center pt-4">
                <Button
                  onClick={() => selectedCategory && handleWhatsAppContact(selectedCategory.name)}
                  className="bg-[#4B0082] hover:bg-[#4B0082]/90 text-white px-8 py-3 text-lg font-medium flex items-center gap-3"
                >
                  <MessageCircle className="h-5 w-5" />
                  Consultar por WhatsApp
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
