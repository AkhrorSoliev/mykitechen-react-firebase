// styles
import './Home.css'
import { useEffect, useState } from 'react'
import { useFetch } from '../../hooks/useFetch'
import RecipeList from '../../components/RecipeList'
import { projectFirstore } from '../../firebase/config'

import React from 'react'

function Home() {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsPending(true)
    projectFirstore
      .collection('recipes')
      .get()
      .then((data) => {
        if (data.empty) {
          setError('Could not fetch this recipes')
          setIsPending(false)
        } else {
          let recipes = []
          data.forEach((doc) => {
            recipes.push({ ...doc.data(), id: doc.id })
            setData(recipes)
            setIsPending(false)
            setError(null)
          })
        }
      })
  }, [])

  return (
    <div className="home">
      {isPending && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {data && <RecipeList data={data} />}
    </div>
  )
}

export default Home
