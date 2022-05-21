// styles
import './RecipeList.css'
import { Link } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme'

function RecipeList({ data }) {
  const { mode } = useTheme()

  return (
    <div className="recipe-list">
      {data.map((recipe) => {
        return (
          <div key={recipe.id} className={`card ${mode}`}>
            <h3>{recipe.title}</h3>
            <p>{recipe.cookingTime} to make.</p>
            <div>{recipe.method.substring(0, 100)}...</div>
            <Link to={`/recipe/${recipe.id}`}>Read More</Link>
          </div>
        )
      })}
    </div>
  )
}

export default RecipeList
