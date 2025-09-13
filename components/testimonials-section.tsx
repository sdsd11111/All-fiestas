"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sofía M.",
    text: "¡Absolutamente encantada con los productos de Todo Fiestas! Encontré todo lo que necesitaba para el cumpleaños de mi hija en un solo lugar. La calidad es increíble y los precios son inmejorables. ¡Recomendado 100%!",
    image: "/Testimonios/1.jpg",
    rating: 5,
  },
  {
    name: "Ana G.",
    text: "Me ayudaron a encontrar la temática perfecta para mi baby shower. La atención es de primera y su variedad de productos es asombrosa. ¡Mi evento fue un éxito total gracias a ellos!",
    image: "/Testimonios/2.jpg",
    rating: 5,
  },
  {
    name: "Daniela P.",
    text: "Las piñatas personalizadas son una obra de arte. La atención de su equipo es excelente. Si buscas calidad y originalidad, este es el lugar. ¡Mi fiesta de soltera fue un sueño!",
    image: "/Testimonios/3.jpg",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ color: '#4B0082' }}>
            Testimonios de Clientes Felices
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Nuestros clientes son la mejor prueba de nuestro compromiso y calidad. Lee sus experiencias.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 flex flex-col items-center text-center border-2 border-[#FF8C00]/30">
              <img
                src={t.image}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#FF8C00] shadow"
              />
              <p className="text-md text-gray-700 mb-4">{t.text}</p>
              <div className="flex items-center justify-center mb-2">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#FF8C00]" fill="#FF8C00" />
                ))}
              </div>
              <span className="font-semibold text-[#4B0082] text-lg">{t.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
