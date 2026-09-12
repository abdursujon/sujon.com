import {
  SoccerBallIcon,
  PersonSimpleHikeIcon,
  CricketIcon,
  MusicNotesIcon,
  type Icon,
} from '@phosphor-icons/react'

export interface Interest {
  slug: string
  name: string
  IconComponent: Icon
  actionLabel: string
  href: string
}

export const interests: Interest[] = [
  {
    slug: 'football',
    name: 'Football',
    IconComponent: SoccerBallIcon,
    actionLabel: 'Connect with me on FootyAddict',
    href: 'https://footyaddict.com/your-handle',
  },
  {
    slug: 'hiking',
    name: 'Hiking',
    IconComponent: PersonSimpleHikeIcon,
    actionLabel: 'Message me on Instagram to hike together',
    href: 'https://instagram.com/your-handle',
  },
  {
    slug: 'cricket',
    name: 'Cricket',
    IconComponent: CricketIcon,
    actionLabel: 'Invite me for a match',
    href: 'mailto:you@example.com?subject=Cricket%20match',
  },
  {
    slug: 'music',
    name: 'Music',
    IconComponent: MusicNotesIcon,
    actionLabel: 'Hear what I listen to on Spotify',
    href: 'https://open.spotify.com/user/your-handle',
  },
]