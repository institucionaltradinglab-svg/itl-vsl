import { useState, useEffect, useRef } from 'react'
import GradientHeading from '../ui/GradientHeading'

function useCountUp(target: number, duration: number = 1500) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return
    const startTime = performance.now()

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(animate)
    }

    requestAnimationFrame(animate)
  }, [hasStarted, target, duration])

  return { count, ref }
}

export default function StatsSection() {
  const stat1 = useCountUp(2400, 1500)
  const stat2 = useCountUp(340, 1500)
  const stat3 = useCountUp(89, 1500)

  const stats = [
    {
      hook: stat1,
      unit: 'USD',
      title: 'Retorno Promedio Mensual',
      desc: 'Promedio de beneficio por estudiante activo en los primeros 3 meses.',
    },
    {
      hook: stat2,
      unit: null,
      title: 'Estudiantes Activos',
      desc: 'Traders formados con el sistema institucional en 12 países.',
    },
    {
      hook: stat3,
      unit: '%',
      title: 'Tasa de Consistencia',
      desc: 'Estudiantes que mantienen resultados positivos tras 6 meses.',
    },
  ]

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <img
          src="/logo-itl.jpg"
          alt="Institucional Trading Lab"
          className="h-12 w-auto mx-auto mb-8"
          style={{ opacity: 0.8 }}
        />

        <GradientHeading as="h2" className="text-3xl md:text-4xl lg:text-5xl mb-4">
          Los Resultados Hablan Por Sí Solos
        </GradientHeading>

        <p className="text-base text-white/40 mb-16">
          Estos son algunos datos reales de alumnos que han aplicado la metodología de forma consistente.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map(({ hook, unit, title, desc }) => (
            <div
              key={title}
              ref={hook.ref}
              className="rounded-2xl p-8 md:p-10 text-center transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(255,255,255,0.12)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.border = '1px solid rgba(255,255,255,0.08)'
              }}
            >
              <p className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                <span className="text-white/40 font-normal">+</span>
                {hook.count.toLocaleString()}
                {unit && <span className="text-lg text-white/30 font-normal ml-1">{unit}</span>}
              </p>
              <p className="text-white font-semibold text-sm mt-4 tracking-wide">{title}</p>
              <p className="text-white/30 text-xs mt-2 leading-relaxed max-w-[200px] mx-auto">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
