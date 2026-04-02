import SectionLabel from '../ui/SectionLabel'
import GradientHeading from '../ui/GradientHeading'

const SOLUTION_POINTS = [
  {
    num: '01',
    title: 'Estructura de Mercado Institucional',
    desc: 'Entiende cómo se mueve el dinero inteligente y por qué el precio hace lo que hace.',
  },
  {
    num: '02',
    title: 'Zonas de Liquidez y Order Blocks',
    desc: 'Identifica los niveles exactos donde las instituciones colocan sus órdenes.',
  },
  {
    num: '03',
    title: 'Gestión de Riesgo Profesional',
    desc: 'Un sistema de money management que protege tu capital y maximiza tus ganancias.',
  },
  {
    num: '04',
    title: 'Trading Plan Personalizado',
    desc: 'No copias trades — construyes tu propio plan adaptado a tu estilo de vida.',
  },
]

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 md:py-32 px-6">
      {/* Divider — gold line transition from Pain */}
      <div
        className="w-full h-px mb-24"
        style={{
          background: 'linear-gradient(to right, transparent, rgba(212,176,84,0.2), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <SectionLabel text="LA SOLUCIÓN" className="mb-6" />
          <GradientHeading as="h2" className="text-3xl md:text-4xl lg:text-5xl">
            Un Sistema Institucional. Paso a Paso.
          </GradientHeading>
          <p className="mt-6 text-lg text-white/50 max-w-3xl mx-auto">
            Institucional Trading Lab te da el framework exacto que usan los traders institucionales
            para leer el mercado, identificar zonas de liquidez y ejecutar con precisión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image placeholder */}
          <div
            className="aspect-[4/3] rounded-2xl border border-white/[0.06] flex items-center justify-center"
            style={{ background: 'hsl(222 47% 11%)' }}
          >
            <p className="text-white/20 text-sm">Preview del programa</p>
          </div>

          {/* Solution list */}
          <div className="space-y-6">
            {SOLUTION_POINTS.map(({ num, title, desc }) => (
              <div key={num} className="flex gap-4">
                <span
                  className="text-[#d4b054] font-semibold text-sm mt-0.5 shrink-0"
                  style={{ opacity: 0.6 }}
                >
                  {num}
                </span>
                <div>
                  <p className="text-white font-medium">{title}</p>
                  <p className="text-white/40 text-sm mt-1">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
