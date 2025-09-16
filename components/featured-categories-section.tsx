"use client"

import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const categories = [
  {
    id: "cumpleanos",
    title: "Artículos de Cumpleaños",
    description: "Sorpresas personalizas, piñatas personalizadas, Tematicas personajes infantiles y mas.",
    modalTitle: "Artículos Destacados de Cumpleaños",
    whatsappMessage: "Hola! Me interesan los artículos de cumpleaños. ¿Podrían darme más información?",
    images: [
      "/Articulos de cumpleaños/1.webp",
      "/Articulos de cumpleaños/2.webp",
      "/Articulos de cumpleaños/3.jpg",
      "/Articulos de cumpleaños/4.jpg",
    ],
    cardImage: "/Articulos de cumpleaños/card.jpg"
  },
  {
    id: "despedida",
    title: "Despedida de Soltera",
    description: "Juego de Tematica para adultos, Diademas, Piñatas personalizadas y mas.",
    modalTitle: "Artículos Destacados de Despedida de Soltera",
    whatsappMessage: "Hola! Me interesan los productos para despedida de soltera. ¿Podrían darme más información?",
    images: [
      "/Articulos Despedida de SOltera/1.jpg",
      "/Articulos Despedida de SOltera/2.jpg",
      "/Articulos Despedida de SOltera/3.jpg",
      "/Articulos Despedida de SOltera/4.jpg",
    ],
    cardImage: "/Articulos Despedida de SOltera/card.jpg"
  },
  {
    id: "babyshower",
    title: "Baby Shower y Sex Reveal",
    description: "Decoraciones colores azul y rosa, Extintores de colores, lanzadores de confetti y mas.",
    modalTitle: "Artículos Destacados de Baby Shower y Sex Reveal",
    whatsappMessage: "Hola! Me interesan los productos para baby shower y sex reveal. ¿Podrían darme más información?",
    images: [
      "/Arituclo Baby Shower/1.jpg",
      "/Arituclo Baby Shower/2.jpg",
      "/Arituclo Baby Shower/3.jpg",
      "/Arituclo Baby Shower/4.jpg",
    ],
    cardImage: "/Arituclo Baby Shower/card.jpg"
  },
]

export function FeaturedCategoriesSection() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const openModal = (categoryId: string) => {
    setSelectedCategory(categoryId)
    setCurrentImageIndex(0)
  }

  const closeModal = () => {
    setSelectedCategory(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    const category = categories.find((cat) => cat.id === selectedCategory)
    if (category) {
      setCurrentImageIndex((prev) => (prev + 1) % category.images.length)
    }
  }

  const prevImage = () => {
    const category = categories.find((cat) => cat.id === selectedCategory)
    if (category) {
      setCurrentImageIndex((prev) => (prev - 1 + category.images.length) % category.images.length)
    }
  }

  const selectedCategoryData = categories.find((cat) => cat.id === selectedCategory)

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-orange-50 overflow-hidden">
      <div className="container mx-auto px-4 w-full">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: "#4B0082" }}>
            Productos Destacados
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Descubre nuestras categorías más populares con productos especialmente seleccionados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              onClick={() => openModal(category.id)}
            >
              <div className="p-6">
                {(category.id === "cumpleanos" && category.cardImage) ? (
                  <img src={category.cardImage} alt="Cumpleaños" className="w-full h-40 object-cover rounded-lg mb-4" />
                ) : (category.id === "despedida" && category.cardImage) ? (
                  <img src={category.cardImage} alt="Despedida de Soltera" className="w-full h-40 object-cover rounded-lg mb-4" />
                ) : (category.id === "babyshower" && category.cardImage) ? (
                  <img src={category.cardImage} alt="Baby Shower y Sex Reveal" className="w-full h-40 object-cover rounded-lg mb-4" />
                ) : (
                  <div
                    className="w-16 h-16 rounded-full mb-4 mx-auto flex items-center justify-center text-white font-bold text-xl"
                    style={{ backgroundColor: "#4B0082" }}
                  >
                    {category.title.charAt(0)}
                  </div>
                )}
                <h3 className="text-xl font-bold text-center mb-3" style={{ color: "#4B0082" }}>
                  {category.title}
                </h3>
                <p className="text-gray-700 text-center mb-4">{category.description}</p>
                <div className="text-center">
                  <span
                    className="inline-block px-4 py-2 rounded-full text-white font-medium hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#FF8C00" }}
                  >
                    Ver Productos
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedCategory && selectedCategoryData && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-0 sm:p-4 w-screen h-screen overflow-hidden">
            <div className="bg-white rounded-xl w-full h-full sm:max-w-4xl sm:max-h-[90vh] sm:w-full overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold" style={{ color: "#4B0082" }}>
                    {selectedCategoryData.modalTitle}
                  </h3>
                  <button onClick={closeModal} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Carrusel de Imágenes */}
                <div className="relative mb-6 w-full">
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden w-full">
                    <img
                      src={selectedCategoryData.images[currentImageIndex] || "/placeholder.svg"}
                      alt={`${selectedCategoryData.title} ${currentImageIndex + 1}`}
                      className="w-full h-full object-cover"
                      style={{ width: '100%', maxWidth: '100%' }}
                    />
                  </div>

                  {/* Controles del carrusel */}
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" style={{ color: "#4B0082" }} />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 transition-all"
                  >
                    <ChevronRight className="w-6 h-6" style={{ color: "#4B0082" }} />
                  </button>

                  {/* Indicadores */}
                  <div className="flex justify-center mt-4 space-x-2">
                    {selectedCategoryData.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentImageIndex ? "bg-orange-500" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Botón de WhatsApp */}
                <div className="text-center">
                  <a
                    href={`https://api.whatsapp.com/send/?phone=593983549657&text=%C2%A1Hola%21+Me+interesa+conocer+m%C3%A1s+sobre+sus+productos+de+fiesta+%EF%BF%BD&type=phone_number&app_absent=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-3 text-white font-bold rounded-lg hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#FF8C00" }}
                  >
                    Consultar por WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
