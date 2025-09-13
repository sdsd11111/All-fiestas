"use client"

import { MessageCircle } from "lucide-react"

export function Header() {
  const whatsappUrl = "https://api.whatsapp.com/send/?phone=593983549657&text=%C2%A1Hola%21+Me+interesa+conocer+m%C3%A1s+sobre+sus+productos+de+fiesta+%EF%BF%BD&type=phone_number&app_absent=0"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y nombre de la empresa */}
          <div className="flex items-center space-x-3">
            <img src="/Logo.jpg" alt="Logo Todo Fiesta" className="w-12 h-12 object-contain rounded-lg shadow" />
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-gray-900">Todo Fiesta Importadora</h1>
            </div>
            <div className="sm:hidden">
              <h1 className="text-base font-semibold text-gray-900">Todo Fiesta</h1>
            </div>
          </div>

          {/* Espacio central vacío */}
          <div className="flex-1"></div>

          {/* Botón de WhatsApp */}
          <div className="flex items-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm lg:text-base"
              style={{ backgroundColor: '#da8430' }}
              onMouseOver={e => (e.currentTarget.style.backgroundColor = '#b86a23')}
              onMouseOut={e => (e.currentTarget.style.backgroundColor = '#da8430')}
            >
              <MessageCircle className="w-4 h-4 lg:w-5 lg:h-5" />
              <span className="hidden sm:inline">¡Escríbenos a WhatsApp para una consulta!</span>
              <span className="sm:hidden">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
