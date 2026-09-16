import { useState, useEffect } from 'react'

type Theme = 'light' | 'dark'

const THEME_STORAGE_KEY = 'theme'

function readStoredThemeChoice(): Theme | null{
  const stored = localStorage.getItem(THEME_STORAGE_KEY)
  return stored === 'light' || stored === 'dark' ? stored : null
}

function readSystemThemePreference(): Theme{
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function resolveInitialTheme(): Theme{
  return readStoredThemeChoice() ?? readSystemThemePreference()
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(resolveInitialTheme)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark')
  }, [theme])

  useEffect(() => {
    const systemThemeQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const applySystemThemeWhenNoStoredChoice = () => {
      if (readStoredThemeChoice() === null) {
        setTheme(systemThemeQuery.matches ? 'dark' : 'light')
      }
    }
    systemThemeQuery.addEventListener('change', applySystemThemeWhenNoStoredChoice)
    return () => systemThemeQuery.removeEventListener('change', applySystemThemeWhenNoStoredChoice)
  }, [])
  
  const toggleThemeAndPersistChoice = () => {
    setTheme(current => {
      const next: Theme = current === 'light' ? 'dark' : 'light'
      localStorage.setItem(THEME_STORAGE_KEY, next)
      return next
    })
  }

  return { theme, toggleTheme: toggleThemeAndPersistChoice }
}   