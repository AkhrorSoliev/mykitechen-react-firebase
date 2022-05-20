import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// styles
import './App.css'

// pages components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Recipe from './pages/recipe/Recipe'
import Create from './pages/create/Create'
import Search from './pages/search/Search'
import ThemeSelector from './components/ThemeSelector'
import { useTheme } from './hooks/useTheme'

function App() {
  const { mode } = useTheme()
  return (
    <div className={`App ${mode}`}>
      <Router>
        <Navbar />
        <ThemeSelector />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/:id" element={<Recipe />} />
          <Route path="/create" element={<Create />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
