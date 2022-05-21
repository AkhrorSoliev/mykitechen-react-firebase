import { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

const changeColor = (state, action) => {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return { ...state, color: action.payload }
    case 'CHANGE_MODE':
      return { ...state, mode: action.payload }
    default:
      return state
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(changeColor, {
    color: 'black',
    mode: 'dark',
  })

  const changeNavColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color })
  }

  const changeMode = (mode) => {
    dispatch({ type: 'CHANGE_MODE', payload: mode })
  }

  return (
    <ThemeContext.Provider value={{ ...state, changeNavColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  )
}
