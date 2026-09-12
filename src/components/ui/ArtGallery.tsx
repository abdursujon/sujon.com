import { useState } from 'react'
import { CaretDownIcon } from '@phosphor-icons/react'
import { SectionLabel } from './SectionLabel'
import { Button } from './Button'
import { ArtworkCard } from './ArtworkCard'
import type { Artwork } from '../../types/artwork'

const INITIALLY_VISIBLE_ARTWORK_COUNT = 3

interface Props {
  sectionId: string
  label: string
  heading: string
  artworks: Artwork[]
}

export function ArtGallery({ sectionId, label, heading, artworks }: Props) {
  const [areAllArtworksVisible, setAreAllArtworksVisible] = useState(false)

  const visibleArtworks = areAllArtworksVisible
    ? artworks
    : artworks.slice(0, INITIALLY_VISIBLE_ARTWORK_COUNT)

  const hasHiddenArtworks = artworks.length > INITIALLY_VISIBLE_ARTWORK_COUNT

  return (
    <section id={sectionId} className="mx-auto w-full max-w-6xl px-6 py-20">
      <div className="flex flex-col items-center text-center">
        <SectionLabel>{label}</SectionLabel>
        <h2 className="mt-6 font-display text-4xl text-ink md:text-5xl">{heading}</h2>
      </div>

      <div className="mt-12 gap-6 sm:columns-2 lg:columns-3">
        {visibleArtworks.map((artwork) => (
          <ArtworkCard key={artwork.slug} {...artwork} />
        ))}
      </div>

      {hasHiddenArtworks && (
        <div className="mt-4 flex justify-center">
          <Button onClick={() => setAreAllArtworksVisible((isVisible) => !isVisible)}>
            <CaretDownIcon
              size={16}
              className={`transition-transform duration-300 ${areAllArtworksVisible ? 'rotate-180' : ''}`}
            />
            {areAllArtworksVisible ? 'Show Less' : 'Show All'}
          </Button>
        </div>
      )}
    </section>
  )
}