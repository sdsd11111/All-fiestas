import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Ofrecen precios al por mayor?",
    answer:
      "No manejamos pedidos al por mayor tradicionales, pero podemos hacer arreglos especiales para grandes cantidades. Contáctanos por WhatsApp para discutir tu pedido específico y encontrar la mejor solución para ti.",
  },
  {
    question: "¿Tienen productos de personajes específicos?",
    answer:
      "Contamos con más de 100 personajes diferentes en nuestro inventario. Sin embargo, debido a la alta demanda, algunos personajes específicos pueden no estar disponibles temporalmente. Te recomendamos contactarnos para verificar la disponibilidad del personaje que buscas.",
  },
  {
    question: "¿Pueden personalizar piñatas?",
    answer:
      "Sí, ofrecemos piñatas personalizadas desde solo $4. Podemos crear piñatas con el diseño, personaje o tema que desees. Contáctanos por WhatsApp con tu idea y te ayudaremos a crear la piñata perfecta para tu celebración.",
  },
  {
    question: "¿Cómo puedo contactarlos?",
    answer:
      "Puedes contactarnos fácilmente a través de WhatsApp en los números 0983549657 o 0993870647. También nos encuentras en nuestras redes sociales de Facebook e Instagram. ¡Estamos aquí para ayudarte con tu fiesta perfecta!",
  },
]

export function FAQSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 text-balance">Preguntas Frecuentes</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Resolvemos las dudas más comunes sobre nuestros productos y servicios
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 hover:border-accent/50 transition-colors"
              >
                <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:text-accent transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
