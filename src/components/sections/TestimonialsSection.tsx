import SectionLabel from '../ui/SectionLabel'
import GradientHeading from '../ui/GradientHeading'

const PLACEHOLDERS = [
  { aspect: 'aspect-[3/4]', label: 'Screenshot resultado #1' },
  { aspect: 'aspect-square', label: 'Screenshot resultado #2' },
  { aspect: 'aspect-video', label: 'Screenshot resultado #3' },
  { aspect: 'aspect-[3/4]', label: 'Screenshot resultado #4' },
  { aspect: 'aspect-[2/3]', label: 'Screenshot resultado #5' },
  { aspect: 'aspect-square', label: 'Screenshot resultado #6' },
  { aspect: 'aspect-[3/4]', label: 'Screenshot resultado #7' },
  { aspect: 'aspect-video', label: 'Screenshot resultado #8' },
  { aspect: 'aspect-[2/3]', label: 'Screenshot resultado #9' },
]

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

        {/* Masonry-style columns */}
        <div className="columns-2 sm:columns-2 lg:columns-3 gap-3 md:gap-4">
          {PLACEHOLDERS.map(({ aspect, label }) => (
            <div
              key={label}
              className={`break-inside-avoid mb-3 md:mb-4 ${aspect} rounded-xl overflow-hidden border border-white/[0.06] transition-all duration-300 hover:border-white/[0.12]`}
              style={{
                background: 'linear-gradient(to bottom right, hsl(222,47%,11%), hsl(222,47%,8%))',
              }}
            >
              <div className="w-full h-full flex items-center justify-center p-4" style={{ minHeight: '120px' }}>
                <span className="text-white/10 text-xs text-center">{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
