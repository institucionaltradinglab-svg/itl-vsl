import GradientHeading from '../ui/GradientHeading'
import { PremiumGlowButton } from '../ui/PremiumGlowButton'

const AVATARS = [0, 1, 2, 3]

export default function FinalCTASection() {
  return (
    <section id="cta" className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div
          className="relative overflow-hidden rounded-3xl px-12 py-20 md:py-24 text-center"
          style={{
            background: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* White radial glow */}
          <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.04), transparent 60%)',
            }}
          />

          <div className="relative z-10 flex flex-col items-center">
            {/* Avatar row */}
            {/* TODO: Reemplazar con fotos reales de estudiantes */}
            <div className="flex items-center">
              {AVATARS.map((i) => (
                <div
                  key={i}
                  className={`w-10 h-10 rounded-full border-2 border-black ${i > 0 ? '-ml-2' : ''}`}
                  style={{
                    background: `linear-gradient(to bottom right, hsl(222,47%,${15 + i * 3}%), hsl(222,47%,${10 + i * 2}%))`,
                  }}
                />
              ))}
            </div>

            <p className="mt-4 text-sm text-white/40">
              +500 estudiantes ya operan con el sistema
            </p>

            <GradientHeading as="h2" className="mt-8 text-3xl md:text-4xl lg:text-5xl max-w-3xl">
              ¿Listo Para Darle Estructura a Tu Trading?
            </GradientHeading>

            <p className="text-base md:text-lg text-white/40 max-w-2xl mx-auto text-center mt-6 mb-10">
              Aprende la estrategia sistematizada que rentabiliza tu trading y elimina la improvisación.
            </p>

            <div className="flex justify-center">
              <PremiumGlowButton
                paddingX={48}
                paddingY={22}
                fontSize={18}
                onClick={() => { window.location.href = "https://join.institucionaltradinglab.com/360/quiz" }}
              >
                Empieza Ahora
              </PremiumGlowButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
