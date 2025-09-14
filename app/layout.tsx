import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Todo Fiesta Importadora - Tu Fiesta, Tu Mundo de Personajes",
  description:
    "Descubre la mayor variedad de artículos de fiesta con más de 100 personajes. Piñatas personalizadas desde $4. Precios justos para todos.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="w-full h-full overflow-x-hidden">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} bg-background text-foreground w-full min-h-screen overflow-x-hidden`}>
        <div className="w-full min-h-screen overflow-x-hidden">
          <div className="w-full overflow-x-hidden">
            <Suspense fallback={null}>{children}</Suspense>
            <Analytics />
          </div>
        </div>
      </body>
    </html>
  )
}
