import { TrendingDown, AlertTriangle, Clock } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import GradientHeading from '../ui/GradientHeading'

const PAIN_POINTS = [
  {
    icon: TrendingDown,
    title: 'Estrategias que no funcionan',
    desc: 'Indicadores retrasados que te dan señales cuando ya es tarde.',
  },
  {
    icon: AlertTriangle,
    title: 'Información contradictoria',
    desc: 'Cada "guru" dice algo diferente. No sabes en quién confiar.',
  },
  {
    icon: Clock,
    title: 'Sin estructura ni plan',
    desc: 'Operas por impulso, sin un sistema claro ni gestión de riesgo real.',
  },
]

export default function PainSection() {
  return (
    <section id="problem" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <SectionLabel text="EL PROBLEMA" className="mb-6" />

        <GradientHeading as="h2" className="text-3xl md:text-4xl lg:text-5xl">
          El 95% de los Traders Pierden Dinero. Y No Es Por Falta de Esfuerzo.
        </GradientHeading>

        <p className="mt-8 text-lg text-white/60 leading-relaxed max-w-3xl mx-auto">
          Has probado indicadores, estrategias de YouTube, señales de grupos de Telegram, cursos que
          prometen resultados rápidos... y sigues en el mismo punto. El problema no eres tú. El
          problema es que estás operando con las herramientas equivocadas, compitiendo contra
          instituciones que juegan un juego completamente diferente.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {PAIN_POINTS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-xl border border-white/[0.06] backdrop-blur-sm"
              style={{ background: 'hsl(222 47% 11% / 0.5)' }}
            >
              <Icon className="text-white/20" size={24} />
              <p className="text-white font-semibold text-sm mt-4">{title}</p>
              <p className="text-white/40 text-sm mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
