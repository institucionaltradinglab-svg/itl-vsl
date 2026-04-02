import React from 'react'

interface GradientHeadingProps {
  children: React.ReactNode
  as?: 'h1' | 'h2' | 'h3'
  className?: string
}

export default function GradientHeading({ children, as: Tag = 'h2', className = '' }: GradientHeadingProps) {
  return (
    <Tag
      className={`font-bold tracking-tight leading-[1.1] bg-gradient-to-b from-white via-white/80 to-white/40 bg-clip-text text-transparent ${className}`}
      style={{ fontFamily: 'Inter, system-ui, sans-serif' }}
    >
      {children}
    </Tag>
  )
}
