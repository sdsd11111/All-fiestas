"use client"
import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Users, Gift } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function AboutSection() {
  const images = [
    "/Quienes somos/1.jpg",
    "/Quienes somos/2.jpg",
    "/Quienes somos/3.jpg",
    "/Quienes somos/4.jpg",
    "/Quienes somos/5.jpg",
  ];

  // Slider State & Auto Transition
  const [current, setCurrent] = React.useState(0);
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearTimeout(timer);
  }, [current, images.length]);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center gap-12 mb-16">
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#4B0082] text-balance">
              Más que una Tienda: Tu Aliado para la Fiesta Perfecta.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto md:mx-0 text-pretty leading-relaxed">
              Somos importadores directos desde octubre de 2024, ofreciendo la mayor variedad con más de 100 personajes disponibles.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-xl overflow-hidden border-4 border-[#FF8C00] shadow-lg">
                <img
                  src={images[current]}
                  alt={`Quienes somos ${current + 1}`}
                  className="w-full h-64 object-cover transition-all duration-700"
                  style={{ background: '#fff' }}
                />
              </div>
              <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrent(idx)}
                    className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                      idx === current ? 'bg-[#FF8C00] border-[#4B0082]' : 'bg-white border-[#FF8C00]'
                    }`}
                    aria-label={`Ir a imagen ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="md:hidden max-w-5xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {[
                {
                  icon: <Users className="h-8 w-8 text-accent" />,
                  title: "Importadores Directos",
                  description: "Desde octubre de 2024, trabajamos directamente con proveedores para ofrecerte los mejores precios.",
                },
                {
                  icon: <Star className="h-8 w-8 text-accent" />,
                  title: "Más de 100 Personajes",
                  description: "La mayor variedad de personajes para hacer de tu celebración algo único y especial.",
                },
                {
                  icon: <Gift className="h-8 w-8 text-accent" />,
                  title: "Piñatas Personalizadas",
                  description: "Creamos piñatas únicas y personalizadas desde solo $4.",
                },
              ].map((item, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full text-center p-8 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-accent/50">
                      <CardContent className="space-y-4">
                        <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                          {item.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-accent/50">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Importadores Directos</h3>
              <p className="text-muted-foreground">
                Desde octubre de 2024, trabajamos directamente con proveedores para ofrecerte los mejores precios.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-accent/50">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Más de 100 Personajes</h3>
              <p className="text-muted-foreground">
                La mayor variedad de personajes para hacer de tu celebración algo único y especial.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-accent/50">
            <CardContent className="space-y-4">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                <Gift className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-primary">Piñatas Personalizadas</h3>
              <p className="text-muted-foreground">
                Creamos piñatas únicas y personalizadas desde solo <span className="font-bold text-accent">$4</span>.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
