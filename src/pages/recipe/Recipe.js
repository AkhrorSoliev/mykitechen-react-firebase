// styles
import './Recipe.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { projectFirstore } from '../../firebase/config'

function Recipe() {
  const { id } = useParams()

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsPending(true)
    projectFirstore
      .collection('recipes')
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          setData(doc.data())
          setIsPending(false)
        } else {
          setError('Could not get this recipe')
          setIsPending(false)
        }
      })
  }, [id])

  return (
    <div className="recipe">
      {isPending && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {data && (
        <>
          <h2>{data.title}</h2>
          <p>{data.cookingTime}</p>
          <ul>
            {data.ingredients.map((ing) => {
              return <li key={ing}>{ing} </li>
            })}
          </ul>
          <p>{data.method}</p>
        </>
      )}
    </div>
  )
}

export default Recipe
