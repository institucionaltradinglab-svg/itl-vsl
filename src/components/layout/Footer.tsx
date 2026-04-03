export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-6 md:py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
        <p className="text-xs text-white/20">
          © 2026 Institucional Trading Lab
        </p>
        <div className="flex items-center gap-6">
          <a href="#" className="text-xs text-white/20 hover:text-white/40 transition-colors">
            Términos
          </a>
          <a href="#" className="text-xs text-white/20 hover:text-white/40 transition-colors">
            Privacidad
          </a>
        </div>
      </div>
    </footer>
  )
}
