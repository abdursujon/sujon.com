interface Props {
  href: string
  children: React.ReactNode
}

export function InlineLink({ href, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
    >
      {children}
    </a>
  )
}