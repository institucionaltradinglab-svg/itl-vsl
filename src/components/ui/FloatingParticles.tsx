import { useRef, useEffect } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  baseOpacity: number
  currentOpacity: number
  targetOpacity: number
}

interface FloatingParticlesProps {
  particleCount?: number
  particleColor?: string
  particleSize?: number
  particleOpacity?: number
  glowIntensity?: number
  movementSpeed?: number
  mouseInfluence?: number
}

export default function FloatingParticles({
  particleCount = 50,
  particleColor = '#ffffff',
  particleSize = 2,
  particleOpacity = 0.4,
  glowIntensity = 8,
  movementSpeed = 0.4,
  mouseInfluence = 100,
}: FloatingParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -9999, y: -9999 })
  const particlesRef = useRef<Particle[]>([])
  const animFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resize = () => {
      const parent = canvas.parentElement
      if (!parent) return
      canvas.width = parent.offsetWidth
      canvas.height = parent.offsetHeight
    }

    const initParticles = () => {
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * movementSpeed,
        vy: (Math.random() - 0.5) * movementSpeed,
        size: Math.random() * particleSize + 0.5,
        baseOpacity: Math.random() * particleOpacity + particleOpacity * 0.3,
        currentOpacity: Math.random() * particleOpacity,
        targetOpacity: Math.random() * particleOpacity + particleOpacity * 0.3,
      }))
    }

    const ro = new ResizeObserver(() => {
      resize()
      initParticles()
    })
    ro.observe(canvas.parentElement!)

    resize()
    initParticles()

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const mx = mouseRef.current.x
      const my = mouseRef.current.y

      for (const p of particlesRef.current) {
        // move
        p.x += p.vx
        p.y += p.vy

        // wrap
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // mouse glow
        const dx = p.x - mx
        const dy = p.y - my
        const dist = Math.sqrt(dx * dx + dy * dy)
        const lit = dist < mouseInfluence

        p.targetOpacity = lit
          ? Math.min(1, p.baseOpacity + (1 - dist / mouseInfluence) * 0.6)
          : p.baseOpacity

        // smooth opacity transition
        p.currentOpacity += (p.targetOpacity - p.currentOpacity) * 0.08

        ctx.save()
        if (lit) {
          ctx.shadowBlur = glowIntensity * (1 - dist / mouseInfluence)
          ctx.shadowColor = particleColor
        }
        ctx.globalAlpha = p.currentOpacity
        ctx.fillStyle = particleColor
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      animFrameRef.current = requestAnimationFrame(draw)
    }

    draw()

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const handleMouseLeave = () => { mouseRef.current = { x: -9999, y: -9999 } }

    canvas.parentElement?.addEventListener('mousemove', handleMouseMove)
    canvas.parentElement?.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animFrameRef.current)
      ro.disconnect()
      canvas.parentElement?.removeEventListener('mousemove', handleMouseMove)
      canvas.parentElement?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [particleCount, particleColor, particleSize, particleOpacity, glowIntensity, movementSpeed, mouseInfluence])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  )
}
