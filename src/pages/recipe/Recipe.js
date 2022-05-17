// styles
import './Recipe.css'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

function Recipe() {
  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { data, isPending, error } = useFetch(url)

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
