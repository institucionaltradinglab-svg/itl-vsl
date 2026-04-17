import SectionLabel from '../ui/SectionLabel'
import GradientHeading from '../ui/GradientHeading'

const IMAGES = [
  '/testimonios/t1.png',
  '/testimonios/t2.png',
  '/testimonios/t3.png',
  '/testimonios/t4.png',
  '/testimonios/t5.png',
  '/testimonios/t6.png',
  '/testimonios/t7.png',
]

// Shuffle deterministically for SSR consistency
const SHUFFLED = [...IMAGES].sort(() => 0.5 - Math.sin(IMAGES.length))

export default function TestimonialsSection() {
  return (
    <section id="results" className="py-12 md:py-32 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <SectionLabel text="RESULTADOS" className="mb-6" />
          <GradientHeading as="h2" className="text-2xl md:text-4xl lg:text-5xl">
            Resultados Reales de Alumnos Reales
          </GradientHeading>
        </div>

        <div className="columns-2 sm:columns-2 lg:columns-3 gap-3 md:gap-4">
          {SHUFFLED.map((src, i) => (
            <div
              key={src}
              className="break-inside-avoid mb-3 md:mb-4 rounded-xl overflow-hidden border border-white/[0.06] transition-all duration-300 hover:border-white/[0.12]"
            >
              <img
                src={src}
                alt={`Resultado alumno ${i + 1}`}
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
