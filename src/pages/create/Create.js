// style
import './Create.css'
import { useState, useEffect } from 'react'
import { useFetch } from '../../hooks/useFetch'
import { useNavigate } from 'react-router-dom'
function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredinets] = useState([])
  const navigate = useNavigate()

  // useFetch
  const { data, postData } = useFetch('http://localhost:3000/recipes', 'POST')

  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    postData({
      title,
      method,
      cookingTime: cookingTime + ' minutes',
      ingredients,
    })
  }

  useEffect(() => {
    if (data) {
      navigate('/')
      console.log(1)
    }
  }, [data, navigate])

  const addIngredients = (e) => {
    e.preventDefault()
    if (!ingredients.includes(newIngredient) && newIngredient) {
      const newIng = [...ingredients, newIngredient]
      setIngredinets(newIng)
    }
    setNewIngredient('')
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h2>Create New Recipe</h2>
      <label>
        <span>title:</span>
        <input
          type="text"
          onChange={(e) => {
            setTitle(e.target.value)
          }}
          required
        />
      </label>

      <label>
        <span>ingredients:</span>
        <div className="ingredients">
          <input
            type="text"
            onChange={(e) => {
              setNewIngredient(e.target.value)
            }}
            value={newIngredient}
          />
          <button onClick={addIngredients}>ADD</button>
        </div>
      </label>

      <label>
        <span>methods:</span>
        <textarea
          type="text"
          onChange={(e) => {
            setMethod(e.target.value)
          }}
          required
        />
      </label>
      <label>
        <span>cookingTime:</span>
        <input
          type="number"
          onChange={(e) => {
            setCookingTime(e.target.value)
          }}
          required
        />
      </label>

      <button>Submit</button>
    </form>
  )
}

export default Create
