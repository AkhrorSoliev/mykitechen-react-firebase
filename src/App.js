import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

// styles
import './App.css'

// pages components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Recipe from './pages/recipe/Recipe'
import Create from './pages/create/Create'
import Search from './pages/search/Search'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
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
