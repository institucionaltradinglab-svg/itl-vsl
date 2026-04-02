import { BookOpen, Users, BarChart3, Target, Shield, Zap } from 'lucide-react'
import SectionLabel from '../ui/SectionLabel'
import GradientHeading from '../ui/GradientHeading'

const BENEFITS = [
  {
    icon: BookOpen,
    title: 'Curso Completo de Trading Institucional',
    desc: 'Más de 50 lecciones en video organizadas de principiante a avanzado.',
  },
  {
    icon: Users,
    title: 'Comunidad Privada',
    desc: 'Acceso a un grupo exclusivo de traders serios con mentalidad institucional.',
  },
  {
    icon: BarChart3,
    title: 'Análisis de Mercado Diarios',
    desc: 'Sesiones en vivo donde analizamos el mercado juntos y encontramos oportunidades.',
  },
  {
    icon: Target,
    title: 'Setups Institucionales en Tiempo Real',
    desc: 'Alertas de las mejores configuraciones del mercado con explicación detallada.',
  },
  {
    icon: Shield,
    title: 'Gestión de Riesgo Profesional',
    desc: 'Plantillas y herramientas para proteger tu capital como un profesional.',
  },
  {
    icon: Zap,
    title: 'Acceso de Por Vida + Actualizaciones',
    desc: 'Una vez dentro, tienes acceso para siempre a todo el contenido actual y futuro.',
  },
]

export default function BenefitsSection() {
  return (
    <section id="program" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel text="QUÉ INCLUYE" className="mb-6" />
          <GradientHeading as="h2" className="text-3xl md:text-4xl lg:text-5xl">
            Todo Lo Que Necesitas Para Operar Con Confianza
          </GradientHeading>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {BENEFITS.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="p-8 rounded-xl backdrop-blur-sm transition-all duration-300 group"
              style={{
                background: 'hsl(222 47% 11% / 0.4)',
                border: '1px solid rgba(212,176,84,0.08)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(212,176,84,0.15)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(212,176,84,0.08)'
              }}
            >
              <Icon
                size={28}
                className="text-[#d4b054]"
                style={{ opacity: 0.5 }}
              />
              <p className="text-white font-semibold text-base mt-5">{title}</p>
              <p className="text-white/40 text-sm mt-3 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
