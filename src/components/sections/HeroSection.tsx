import FloatingParticles from '../ui/FloatingParticles'
import GradientHeading from '../ui/GradientHeading'
import { PremiumGlowButton } from '../ui/PremiumGlowButton'

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center pt-28 md:pt-36 px-6 overflow-hidden"
    >
      {/* Layer 1 — Floating particles (behind everything) */}
      <FloatingParticles
        particleColor="#ffffff"
        particleOpacity={0.55}
        particleCount={65}
        particleSize={1.5}
        glowIntensity={12}
      />

      {/* Subtle white glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] pointer-events-none z-[1]"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.03), transparent 70%)',
        }}
      />

      {/* Content — z-10 so particles stay behind */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Logo */}
        <img
          src="/logo-itl.jpg"
          alt="Institucional Trading Lab"
          className="h-8 md:h-10 w-auto mb-8 md:mb-10"
        />

        {/* Heading */}
        <GradientHeading
          as="h1"
          className="text-3xl md:text-4xl lg:text-5xl max-w-3xl mx-auto mb-8 md:mb-10"
        >
          Un Sistema Institucional. Paso a Paso.
        </GradientHeading>

        {/* Video */}
        <div className="max-w-4xl w-full mx-auto aspect-video rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl shadow-black/50">
          {/* TODO: Reemplazar con iframe de Vimeo/YouTube */}
          <div
            className="w-full h-full flex items-center justify-center group"
            style={{
              background: 'linear-gradient(to bottom right, hsl(222,47%,11%), hsl(222,47%,8%))',
            }}
          >
            <div className="w-[72px] h-[72px] rounded-full border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:border-white/20">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1 transition-all duration-300 group-hover:opacity-40"
                style={{ fill: 'rgba(255,255,255,0.2)' }}
              >
                <polygon points="6,4 20,12 6,20" />
              </svg>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
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
    </section>
  )
}
