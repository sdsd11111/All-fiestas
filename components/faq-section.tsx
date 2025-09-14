import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Dónde comprar decoraciones para fiesta infantil en Loja?",
    answer:
      "En Todo Fiestas Loja ofrecemos la mejor variedad de decoraciones para fiestas infantiles. Contamos con más de 100 personajes diferentes, piñatas personalizadas y todos los accesorios que necesitas para la celebración perfecta en Loja. Visítanos en nuestra tienda física o contáctanos al 0983549657 para asesorarte con los mejores productos para tu evento.",
  },
  {
    question: "¿Cuál es la mejor tienda de artículos para baby shower en Loja?",
    answer:
      "En Todo Fiestas Loja somos especialistas en artículos para baby shower. Ofrecemos una amplia gama de decoraciones en colores azul y rosa, lanzadores de confetti, extintores de colores, y todo lo necesario para celebrar el sex reveal o baby shower más especial en la ciudad de Loja. ¡Contáctanos al 0983549657 para más información!",
  },
  {
    question: "¿Dónde encontrar artículos para despedida de soltera en Loja?",
    answer:
      "Si buscas los mejores artículos para despedida de soltera en Loja, ¡llegaste al lugar correcto! En nuestra tienda encontrarás diademas, juegos de fiesta, decoración temática y accesorios únicos para una despedida inolvidable. Visítanos en Loja o escríbenos al WhatsApp para mostrarte nuestro catálogo completo de productos para despedidas de soltera.",
  },
  {
    question: "¿Dónde comprar piñatas personalizadas en Loja, Ecuador?",
    answer:
      "En Todo Fiestas Loja creamos piñatas personalizadas desde $4. Realizamos todo tipo de diseños: personajes infantiles, números, letras y figuras personalizadas. Somos la mejor opción en Loja para piñatas de alta calidad y a excelentes precios. Contáctanos al 0983549657 para cotizar tu piñata personalizada.",
  },
  {
    question: "¿Cuál es la tienda más económica de artículos para fiestas en Loja?",
    answer:
      "En Todo Fiestas Loja ofrecemos los mejores precios en artículos para fiestas en toda la ciudad. Como importadores directos desde 2024, podemos ofrecerte productos de calidad a precios muy competitivos. Visítanos y comprueba por qué somos la opción preferida en Loja para decoración de fiestas infantiles, baby showers y despedidas de soltera.",
  },
  {
    question: "¿Hacen envíos a domicilio en Loja?",
    answer:
      "¡Sí! Realizamos envíos a domicilio en toda la ciudad de Loja. También ofrecemos servicio de entrega express para pedidos urgentes. Contáctanos al 0983549657 para coordinar la entrega de tus artículos para fiestas en la comodidad de tu hogar en Loja.",
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

        <div className="max-w-3xl mx-auto" itemScope itemProp="mainEntity" itemType="https://schema.org/FAQPage">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
                <AccordionItem
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 hover:border-accent/50 transition-colors"
                >
                  <AccordionTrigger itemProp="name" className="text-left text-lg font-semibold text-primary hover:text-accent transition-colors py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                      <div itemProp="text">{faq.answer}</div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
