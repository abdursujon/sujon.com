interface Props {
  children: React.ReactNode
}

export function SectionLabel({ children }: Props) {
  return (
    <span className="inline-block rounded-full border border-ink/10 bg-white/50 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-ink shadow-sm dark:bg-white/5">
      {children}
    </span>
  )
}