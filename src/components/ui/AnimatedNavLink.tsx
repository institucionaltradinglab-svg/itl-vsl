interface AnimatedNavLinkProps {
  href: string
  children: string
}

export default function AnimatedNavLink({ href, children }: AnimatedNavLinkProps) {
  return (
    <a
      href={href}
      className="relative overflow-hidden h-[1.2em] inline-flex flex-col group"
      style={{ lineHeight: '1.2em' }}
    >
      <span
        className="text-white/60 text-sm font-medium transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full"
      >
        {children}
      </span>
      <span
        className="text-white text-sm font-medium absolute top-full transition-transform duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-full"
      >
        {children}
      </span>
    </a>
  )
}
