"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function HeroSection() {
  const handleWhatsAppClick = () => {
    window.open(
      "https://api.whatsapp.com/send/?phone=593983549657&text=%C2%A1Hola%21+Me+interesa+conocer+m%C3%A1s+sobre+sus+productos+de+fiesta+%EF%BF%BD&type=phone_number&app_absent=0",
      "_blank",
    )
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="absolute inset-0 w-full h-full">
        <img src="/Hero.jpg" alt="Hero" className="w-full h-full object-cover" />
  <div className="absolute inset-0 bg-white/80" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight">
            <span className="text-primary">Tu Fiesta,</span>{" "}
            <span className="text-accent">Tu Mundo de Personajes,</span>{" "}
            <span className="text-primary">a Precios Incomparables.</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            No necesitas regatear para obtener el mejor precio. Descubre la mayor variedad de artículos de fiesta, con
            precios justos para todos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={handleWhatsAppClick}
            >
              <MessageCircle className="mr-2 h-6 w-6" />
              ¡Escríbenos a WhatsApp para una consulta! 🥳
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
