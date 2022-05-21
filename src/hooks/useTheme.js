import { useContext } from 'react'
import { ThemeContext } from '../context/useThemContext'

export function useTheme() {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useContext() must be use in ThemeContext Provider')
  }

  return context
}
