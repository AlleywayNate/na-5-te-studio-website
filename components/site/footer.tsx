const FOOTER_LINKS = [
  { label: 'Shop', href: '#shop' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Terms', href: '#terms' },
  { label: 'Contact', href: '#contact' },
]

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-5 py-12 text-center">
        <div>
          <div className="flex items-center justify-center gap-2">
            <span className="font-mono text-xl font-bold text-glow-pink text-primary">
              NA5TE
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
              Studio
            </span>
          </div>
          <p className="mt-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            VRChat Customization • Unity Systems • Digital Assets
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {FOOTER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="font-mono text-xs text-muted-foreground">
          © 2026 NA5TE STUDIO
        </p>
      </div>
    </footer>
  )
}
