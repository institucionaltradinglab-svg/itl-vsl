interface SectionLabelProps {
  text: string
  className?: string
}

export default function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <p
      className={`text-[11px] tracking-[0.2em] font-medium uppercase text-white/40 text-center ${className}`}
    >
      {text}
    </p>
  )
}
