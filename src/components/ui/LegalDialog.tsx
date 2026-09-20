import { useEffect, useRef, useState } from 'react'
import { XIcon } from '@phosphor-icons/react'
import { legalDocuments } from '../../data/legalDocuments'

const publishedLegalDocuments = legalDocuments.filter(
  (legalDocument) => legalDocument.clauses.length > 0,
)

function readPublishedSlugFromUrlHash() {
  const slugFromUrlHash = window.location.hash.replace('#', '')
  const isPublishedSlug = publishedLegalDocuments.some(
    (legalDocument) => legalDocument.slug === slugFromUrlHash,
  )
  return isPublishedSlug ? slugFromUrlHash : null
}

function clearUrlHashWithoutScrolling() {
  window.history.replaceState(null, '', window.location.pathname + window.location.search)
}

export function LegalDialog() {
  const dialogElementRef = useRef<HTMLDialogElement>(null)
  const [openDocumentSlug, setOpenDocumentSlug] = useState<string | null>(null)

  useEffect(() => {
    if (readPublishedSlugFromUrlHash()) {
      clearUrlHashWithoutScrolling()
    }

    const openDocumentMatchingUrlHash = () => {
      const slugFromUrlHash = readPublishedSlugFromUrlHash()
      if (slugFromUrlHash) {
        setOpenDocumentSlug(slugFromUrlHash)
      }
    }

    window.addEventListener('hashchange', openDocumentMatchingUrlHash)
    return () => window.removeEventListener('hashchange', openDocumentMatchingUrlHash)
  }, [])

  useEffect(() => {
    const dialogElement = dialogElementRef.current
    if (!dialogElement) {
      return
    }

    if (openDocumentSlug && !dialogElement.open) {
      dialogElement.showModal()
      document.documentElement.style.overflow = 'hidden'
    }

    if (!openDocumentSlug && dialogElement.open) {
      dialogElement.close()
    }

    if (!openDocumentSlug) {
      document.documentElement.style.overflow = ''
    }
  }, [openDocumentSlug])

  const closeLegalDialog = () => {
    clearUrlHashWithoutScrolling()
    setOpenDocumentSlug(null)
  }

  const closeWhenBackdropClicked = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogElementRef.current) {
      closeLegalDialog()
    }
  }

  const openDocument = publishedLegalDocuments.find(
    (legalDocument) => legalDocument.slug === openDocumentSlug,
  )

  return (
    <dialog
      ref={dialogElementRef}
      onClick={closeWhenBackdropClicked}
      onClose={closeLegalDialog}
      aria-label={openDocument?.title ?? 'Legal notice'}
      className="m-auto w-[min(42rem,calc(100vw-2rem))] rounded-[32px] border border-ink/10 bg-surface p-0 text-ink shadow-[0_40px_90px_-40px_rgba(25,35,38,0.6)] backdrop:bg-ink/40 backdrop:backdrop-blur-sm dark:border-white/10"
    >
      {openDocument && (
        <div className="max-h-[85vh] overflow-y-auto px-6 py-8 md:px-10 md:py-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl text-ink">{openDocument.title}</h2>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-ink-muted">
                Updated {openDocument.lastUpdated}
              </p>
            </div>

            <button
              type="button"
              onClick={closeLegalDialog}
              aria-label={`Close ${openDocument.title}`}
              className="shrink-0 cursor-pointer rounded-full p-2 text-ink-muted transition-colors hover:bg-ink/5 hover:text-ink"
            >
              <XIcon size={20} />
            </button>
          </div>

          <div className="mt-8 flex flex-col gap-6 border-t border-ink/5 pt-6">
            {openDocument.clauses.map(({ heading, paragraphs }) => (
              <div key={heading}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-ink">
                  {heading}
                </h3>
                {paragraphs.map((paragraph) => (
                  <p key={paragraph} className="mt-2 text-base leading-relaxed text-ink-muted">
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </dialog>
  )
}
