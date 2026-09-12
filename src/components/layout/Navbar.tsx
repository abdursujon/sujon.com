
import '../../style/nav.css'
import {
  HouseLineIcon,
  UserCircleIcon,
  MoonStarsIcon,
  SunDimIcon,
  FolderOpenIcon,
  ListIcon,
  XIcon,
} from '@phosphor-icons/react'
import { useTheme } from '../../hooks/useTheme'
import { useRef, useState, useEffect, useCallback } from 'react'
import { sectionLinks } from '../../data/sectionLinks'

const WATER_DROP_EASING_FACTOR = 0.08
const WATER_DROP_STRETCH_PER_PIXEL = 0.012
const WATER_DROP_MAX_STRETCH = 0.45

export function Navbar() {
  const { theme, toggle } = useTheme()
  const navElementRef = useRef<HTMLElement>(null)
  const waterDropElementRef = useRef<HTMLDivElement>(null)
  const waterDropTargetRef = useRef({ x: 0, y: 0 })
  const waterDropCurrentRef = useRef({ x: 0, y: 0 })
  const [isSectionMenuOpen, setIsSectionMenuOpen] = useState(false)

  useEffect(() => {
    const navElement = navElementRef.current
    const waterDropElement = waterDropElementRef.current
    if (!navElement || !waterDropElement) return

    const halfDropWidth = waterDropElement.offsetWidth / 2
    const halfDropHeight = waterDropElement.offsetHeight / 2

    const restingPosition = {
      x: navElement.offsetWidth / 2,
      y: navElement.offsetHeight / 2,
    }
    waterDropTargetRef.current = { ...restingPosition }
    waterDropCurrentRef.current = { ...restingPosition }

    let animationFrameId = 0

    function advanceWaterDropOneFrame() {
      const currentPosition = waterDropCurrentRef.current
      const targetPosition = waterDropTargetRef.current

      const horizontalVelocity = (targetPosition.x - currentPosition.x) * WATER_DROP_EASING_FACTOR
      const verticalVelocity = (targetPosition.y - currentPosition.y) * WATER_DROP_EASING_FACTOR

      currentPosition.x += horizontalVelocity
      currentPosition.y += verticalVelocity

      const travelSpeed = Math.hypot(horizontalVelocity, verticalVelocity)
      const stretchAmount = Math.min(
        travelSpeed * WATER_DROP_STRETCH_PER_PIXEL,
        WATER_DROP_MAX_STRETCH,
      )
      const travelAngleDegrees = (Math.atan2(verticalVelocity, horizontalVelocity) * 180) / Math.PI

      waterDropElement!.style.transform =
        `translate(${currentPosition.x - halfDropWidth}px, ${currentPosition.y - halfDropHeight}px) ` +
        `rotate(${travelAngleDegrees}deg) ` +
        `scale(${1 + stretchAmount}, ${1 - stretchAmount * 0.7})`

      animationFrameId = requestAnimationFrame(advanceWaterDropOneFrame)
    }

    advanceWaterDropOneFrame()
    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  useEffect(() => {
    if (!isSectionMenuOpen) return

    function closeSectionMenuOnOutsidePointerDown(event: PointerEvent) {
      if (!navElementRef.current?.contains(event.target as Node)) {
        setIsSectionMenuOpen(false)
      }
    }

    function closeSectionMenuOnEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsSectionMenuOpen(false)
    }

    document.addEventListener('pointerdown', closeSectionMenuOnOutsidePointerDown)
    document.addEventListener('keydown', closeSectionMenuOnEscape)

    return () => {
      document.removeEventListener('pointerdown', closeSectionMenuOnOutsidePointerDown)
      document.removeEventListener('keydown', closeSectionMenuOnEscape)
    }
  }, [isSectionMenuOpen])

  const updateWaterDropTargetFromPointer = useCallback((event: React.MouseEvent<HTMLElement>) => {
    const navElement = navElementRef.current
    if (!navElement) return
    const navBounds = navElement.getBoundingClientRect()
    waterDropTargetRef.current = {
      x: event.clientX - navBounds.left,
      y: event.clientY - navBounds.top,
    }
  }, [])

  const resetWaterDropTargetToCentre = useCallback(() => {
    const navElement = navElementRef.current
    if (!navElement) return
    waterDropTargetRef.current = {
      x: navElement.offsetWidth / 2,
      y: navElement.offsetHeight / 2,
    }
  }, [])

  return (
    <nav
      ref={navElementRef}
      className="nav fixed top-5 left-1/2 z-100 flex w-fit items-center gap-3 px-4 py-2.5 md:gap-5 md:px-5"
      onMouseMove={updateWaterDropTargetFromPointer}
      onMouseLeave={resetWaterDropTargetToCentre}
    >
      <div className="nav-drop-clip" aria-hidden="true">
        <div ref={waterDropElementRef} className="nav-water-drop" />
      </div>

      <a href="#hero" className="nav-item" data-label="Home"><HouseLineIcon size={20} /></a>
      <a href="#about" className="nav-item" data-label="CV"><UserCircleIcon size={20} /></a>
      <a href="#projects" className="nav-item" data-label="Projects"><FolderOpenIcon size={20} /></a>
      <div className="nav-divider" />

      <button onClick={toggle} className="nav-item" aria-label="Toggle theme">
        {theme === 'dark' ? <SunDimIcon size={20} /> : <MoonStarsIcon size={20} />}
      </button>

      <button
        type="button"
        onClick={() => setIsSectionMenuOpen((isOpen) => !isOpen)}
        className="nav-item"
        aria-haspopup="menu"
        aria-expanded={isSectionMenuOpen}
        aria-label="Section menu"
      >
        {isSectionMenuOpen ? <XIcon size={20} /> : <ListIcon size={20} />}
      </button>

      {isSectionMenuOpen && (
        <ul
          role="menu"
          className="absolute top-full right-0 z-20 mt-3 flex w-56 flex-col rounded-3xl border border-white/50 bg-white/75 p-2 shadow-[0_26px_90px_-50px_rgb(25_35_38/0.42)] backdrop-blur-xl dark:border-white/10 dark:bg-[#152b2b]/80"
        >
          {sectionLinks.map(({ label, href }) => (
            <li key={href} role="none">
              <a
                role="menuitem"
                href={href}
                onClick={() => setIsSectionMenuOpen(false)}
                className="block rounded-2xl px-4 py-2.5 text-sm text-ink transition-colors hover:bg-ink/5 hover:text-accent"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}