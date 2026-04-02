interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'ghost'
  size?: 'normal' | 'small' | 'large'
  onClick?: () => void
  className?: string
  href?: string
}

export default function Button({
  children,
  variant = 'primary',
  size = 'normal',
  onClick,
  className = '',
  href,
}: ButtonProps) {
  const sizeClasses = {
    small: 'px-6 py-2 text-sm',
    normal: 'px-8 py-3 text-sm',
    large: 'px-10 py-4 text-lg',
  }

  const variantClasses = {
    primary: [
      'border border-[rgba(212,176,84,0.3)] text-[#d4b054]',
      'hover:border-[rgba(212,176,84,0.6)] hover:shadow-[0_0_20px_rgba(212,176,84,0.15)]',
      'transition-all duration-300 ease-in-out',
    ].join(' '),
    ghost: [
      'text-[#d4b054] border-transparent',
      'hover:underline',
      'transition-all duration-300 ease-in-out',
    ].join(' '),
  }

  const base = `rounded-full font-medium inline-flex items-center justify-center bg-transparent ${sizeClasses[size]} ${variantClasses[variant]} ${className}`

  if (href) {
    return (
      <a href={href} className={base}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={base}>
      {children}
    </button>
  )
}
