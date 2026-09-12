interface Props {
  children: React.ReactNode
  onClick?: () => void
}

export function Button({ children, onClick }: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-5 py-2.5 text-sm font-medium text-ink shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:bg-white/5"
    >
      {children}
    </button>
  )
}