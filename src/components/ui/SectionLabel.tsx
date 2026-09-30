interface Props {
  children: React.ReactNode
  className?: string
}

export function SectionLabel({ children, className = '' }: Props) {
  return (
    <span className={`inline-block rounded-full border border-ink/15 px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-ink ${className}`}>
      {children}
    </span>
  )
}
