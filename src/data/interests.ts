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
    actionLabel: 'Lets play a game together. Find me on FootyAddicts — search name "sujon"',
    href: 'https://footyaddicts.com/account/search-players',
  },
  {
    slug: 'hiking',
    name: 'Hiking',
    IconComponent: PersonSimpleHikeIcon,
    actionLabel: 'Does mountain makes you happy too? Message me on Instagram so we can hike together',
    href: 'https://instagram.com/abdur.sujon',
  },
  {
    slug: 'cricket',
    name: 'Cricket',
    IconComponent: CricketIcon,
    actionLabel: 'Invite me for a match on Instagram',
    href: 'https://instagram.com/abdur.sujon',
  },
  {
    slug: 'music',
    name: 'Music',
    IconComponent: MusicNotesIcon,
    actionLabel: 'Hear what I listen to on Spotify',
    href: 'https://open.spotify.com/user/31xhjwnwn6mdcemhleot6aclqkqe?si=hKSsUQkSQr2vm_hi2mESMg&utm_source=copy-link',
  },
]