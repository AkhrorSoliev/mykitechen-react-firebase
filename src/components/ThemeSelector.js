// styles
import './ThemeSelector.css'
import { useTheme } from '../hooks/useTheme'
import ModeIcon from '../assets/mode_icon.svg'

const navThemeColors = ['#A91079', '#646FD4', '#F8B400']

function ThemeSelector() {
  const { changeNavColor, changeMode, mode } = useTheme()

  const toggleMode = () => {
    changeMode(mode === 'dark' ? 'light' : 'dark')
  }
  console.log(mode)

  return (
    <div className="theme-selector">
      <div className="mode-toggle">
        <img
          onClick={toggleMode}
          src={ModeIcon}
          alt="Mode Icon"
          style={
            mode === 'dark'
              ? { filter: 'invert(100%)' }
              : { filter: 'invert(0)' }
          }
        />
      </div>
      <div className="theme-buttons">
        {navThemeColors.map((color) => (
          <div
            key={color}
            onClick={() => {
              changeNavColor(color)
            }}
            style={{ background: color }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default ThemeSelector
