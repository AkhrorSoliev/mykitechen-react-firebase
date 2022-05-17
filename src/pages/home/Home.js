// styles
import './Home.css'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'

import React from 'react'

function Home() {
  const { data, isPending, error } = useFetch('http://localhost:3000/recipes')
  return (
    <div className="home">
      {isPending && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {data && <RecipeList data={data} />}
    </div>
  )
}

export default Home
