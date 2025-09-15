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
    window.open('https://www.instagram.com/todofiestaimportadora', '_blank')
  }

  const handleTikTok = () => {
    window.open('https://www.tiktok.com/@todofiestaimportadora?_t=ZM-8zkownANZQO&_r=1', '_blank')
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

              <Card className="hover:shadow-lg transition-shadow duration-300 border-2 hover:border-accent/50">
                <CardContent className="p-3 sm:p-4 md:p-6">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-wrap sm:flex-nowrap">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-full flex-shrink-0 flex items-center justify-center">
                      <svg 
                        className="h-5 w-5 sm:h-6 sm:w-6 text-white" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.57-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-primary text-sm sm:text-base">TikTok</h4>
                      <p className="text-muted-foreground text-sm sm:text-base truncate">@todofiestaimportadora</p>
                    </div>
                    <Button
                      onClick={handleTikTok}
                      className="bg-black hover:bg-gray-800 text-xs sm:text-sm h-8 sm:h-10 px-3 sm:px-4 mt-1 sm:mt-0 w-full sm:w-auto"
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
