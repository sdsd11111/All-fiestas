import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { VideoSection } from "@/components/video-section"
import { CategoriesSection } from "@/components/categories-section"
import { FeaturedSection } from "@/components/featured-section"
import { FAQSection } from "@/components/faq-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { FeaturedCategoriesSection } from "@/components/featured-categories-section"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-16">
        <HeroSection />
        <AboutSection />
        <VideoSection />
        <CategoriesSection />
  <FeaturedCategoriesSection />
  <FeaturedSection />
  <TestimonialsSection />
  <FAQSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}
