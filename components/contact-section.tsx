"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Facebook, Instagram, MapPin } from "lucide-react"

export function ContactSection() {
  const handleWhatsApp1 = () => {
    window.open(
      "https://wa.me/593983549657?text=¡Hola! Me interesa conocer más sobre sus productos de fiesta 🥳",
      "_blank",
    )
  }

  const handleWhatsApp2 = () => {
    window.open(
      "https://wa.me/593993870647?text=¡Hola! Me interesa conocer más sobre sus productos de fiesta 🥳",
      "_blank",
    )
  }

  const handleFacebook = () => {
  window.open("https://www.facebook.com/profile.php?id=61566137848221&locale=es_LA", "_blank")
  }

  const handleInstagram = () => {
  window.open("https://www.instagram.com/importadoratodofiesta/", "_blank")
  }

  return (
    <section className="py-12 sm:py-20 bg-muted/30 w-full overflow-x-hidden">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-12 sm:mb-16 w-full px-2">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary mb-4 sm:mb-6 text-balance">¡Contáctanos!</h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty px-2">
            Estamos aquí para ayudarte a crear la fiesta perfecta. Escríbenos y te responderemos rápidamente.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-6xl mx-auto px-2 sm:px-0">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-8 px-2">Nuestros Canales de Contacto</h3>

            <div className="space-y-3 sm:space-y-4">
              <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-accent/50">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap sm:flex-nowrap">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex-shrink-0 flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-primary text-sm sm:text-base">WhatsApp Principal</h4>
                      <p className="text-muted-foreground text-sm sm:text-base truncate">0983549657</p>
                    </div>
                    <Button 
                      onClick={handleWhatsApp1} 
                      className="bg-green-500 hover:bg-green-600 text-xs sm:text-sm h-8 sm:h-10 px-3 sm:px-4 mt-1 sm:mt-0 w-full sm:w-auto"
                    >
                      Escribir
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-accent/50">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap sm:flex-nowrap">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex-shrink-0 flex items-center justify-center">
                      <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-primary text-sm sm:text-base">WhatsApp Secundario</h4>
                      <p className="text-muted-foreground text-sm sm:text-base truncate">0993870647</p>
                    </div>
                    <Button 
                      onClick={handleWhatsApp2} 
                      className="bg-green-500 hover:bg-green-600 text-xs sm:text-sm h-8 sm:h-10 px-3 sm:px-4 mt-1 sm:mt-0 w-full sm:w-auto"
                    >
                      Escribir
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-accent/50">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap sm:flex-nowrap">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex-shrink-0 flex items-center justify-center">
                      <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-primary text-sm sm:text-base">Facebook</h4>
                      <p className="text-muted-foreground text-sm sm:text-base truncate">@todofiestaimportadora</p>
                    </div>
                    <Button 
                      onClick={handleFacebook} 
                      className="bg-blue-600 hover:bg-blue-700 text-xs sm:text-sm h-8 sm:h-10 px-3 sm:px-4 mt-1 sm:mt-0 w-full sm:w-auto"
                    >
                      Seguir
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-accent/50">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap sm:flex-nowrap">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0 flex items-center justify-center">
                      <Instagram className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-primary text-sm sm:text-base">Instagram</h4>
                      <p className="text-muted-foreground text-sm sm:text-base truncate">@todofiestaimportadora</p>
                    </div>
                    <Button
                      onClick={handleInstagram}
                      className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-xs sm:text-sm h-8 sm:h-10 px-3 sm:px-4 mt-1 sm:mt-0 w-full sm:w-auto"
                    >
                      Seguir
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 mt-8 sm:mt-0">
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-8 px-2">Nuestra Ubicación</h3>

            <Card className="overflow-hidden border-2 h-full">
              <CardContent className="p-0 h-full">
                <div className="h-full min-h-[16rem] sm:min-h-[20rem] w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d418.360212821096!2d-79.20093195380112!3d-3.992538571131394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zM8KwNTknMzMuMCJTIDc5wrAxMicwMi42Ilc!5e0!3m2!1ses-419!2sec!4v1757797755815!5m2!1ses-419!2sec"
                    width="100%"
                    height="100%"
                    style={{ 
                      border: 0, 
                      minHeight: '16rem', 
                      height: '100%', 
                      width: '100%',
                      maxWidth: '100%',
                      margin: 0,
                      padding: 0
                    }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
