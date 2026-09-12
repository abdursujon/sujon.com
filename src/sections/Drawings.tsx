import { ArtGallery } from '../components/ui/ArtGallery'
import { drawings } from '../data/drawings'

export function Drawings() {
  return (
    <ArtGallery
      sectionId="drawings"
      label="Drawings"
      heading="Drawn on paper"
      artworks={drawings}
    />
  )
}
