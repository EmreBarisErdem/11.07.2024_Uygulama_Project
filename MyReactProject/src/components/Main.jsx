import React, { useState } from 'react'

const Main = ({addRecipe,tarifler}) => {
  const [recipeTitle,setRecipeTitle] = useState("");
  const [recipeDescription,setRecipeDescription] = useState("");
  const [recipeImageURL,setImageURL] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    addRecipe({
      id: tarifler.length === 0 ? "1" : (Number(tarifler[tarifler.length-1].id)+1).toString(),
      title: recipeTitle,
      description: recipeDescription,
      image: recipeImageURL
    })

  }

  return (
    
      <main>
          <h2>Welcome to My Recipe Sharing Platform</h2>
          <p>Lorem ipsum dolor sit amet.</p>

        <form onSubmit={handleSubmit}>
          <input onChange={(e)=>setRecipeTitle(e.target.value)} type="text" placeholder='Recipe Title'/>
          <textarea onChange={(e)=>setRecipeDescription(e.target.value)} placeholder='Recipe Description'></textarea>
          <input onChange={(e)=>setImageURL(e.target.value)} type="url" placeholder='Image URL' />
          <button type='submit'>Add Recipe</button>
        </form>
  



      </main>
   
  )
}

export default Main