// components/layout/Navbar.tsx
import '../../style/nav.css'
import { HouseLineIcon, UserCircleIcon, MoonStarsIcon, SunDimIcon, FolderOpenIcon } from '@phosphor-icons/react'
import { useTheme } from '../../hooks/useTheme'
import { useRef, useCallback } from 'react'

export function Navbar() {
  const { theme, toggle } = useTheme()
  const navRef = useRef<HTMLElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const nav = navRef.current
    if (!nav) return
    const rect = nav.getBoundingClientRect()
    nav.style.setProperty('--x', `${e.clientX - rect.left}px`)
    nav.style.setProperty('--y', `${e.clientY - rect.top}px`)
  }, [])

  return (
    <nav ref={navRef} className="nav" onMouseMove={handleMouseMove}>
      <a href="#hero" className="nav-item"><HouseLineIcon size={20} /></a>
      <a href="#about" className="nav-item"><UserCircleIcon size={20} /></a>
      <a href="#projects" className="nav-item"><FolderOpenIcon size={20} /></a>

      <div className="nav-divider" />

      <button onClick={toggle} className="nav-item">
        {theme === 'dark' ? <SunDimIcon size={20} /> : <MoonStarsIcon size={20} />}
      </button>
    </nav>
  )
}   