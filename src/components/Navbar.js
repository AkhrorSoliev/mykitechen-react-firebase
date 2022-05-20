// styles
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useTheme } from '../hooks/useTheme'

function Navbar() {
  const { color } = useTheme()

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>MyKitchen</h1>
        </Link>
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  )
}

export default Navbar
