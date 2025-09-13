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
      <html lang="es" style={{ width: '100vw', minHeight: '100vh', margin: 0, padding: 0, boxSizing: 'border-box', overflowX: 'hidden' }}>
        <body
          className={`font-sans ${GeistSans.variable} ${GeistMono.variable} bg-background text-foreground w-full min-h-screen overflow-x-hidden`}
          style={{ width: '100vw', minHeight: '100vh', margin: 0, padding: 0, boxSizing: 'border-box', overflowX: 'hidden' }}
        >
          <div style={{ width: '100vw', minHeight: '100vh', margin: 0, padding: 0, boxSizing: 'border-box', overflowX: 'hidden' }}>
            <Suspense fallback={null}>{children}</Suspense>
            <Analytics />
          </div>
        </body>
      </html>
  )
}
