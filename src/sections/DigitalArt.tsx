import { ArtGallery } from '../components/ui/ArtGallery'
import { digitalArtworks } from '../data/digitalArt'

export function DigitalArt() {
  return (
    <ArtGallery
      sectionId="digital-art"
      label="Digital Art"
      heading="Drawn on a screen"
      artworks={digitalArtworks}
    />
  )
}