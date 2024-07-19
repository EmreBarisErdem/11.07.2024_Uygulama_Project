import React, { useContext } from 'react'
import defaultRecipePic from '../assets/img/defaultRecipePic.jpg'
import { RiEdit2Line } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";
import DataContext from '../context/DataContext';

const Card = ({recipe}) => {
  const {deleteRecipe, findRecipe, search} = useContext(DataContext);
  return (
    (
      // (recipe.title.startsWith(search.toLowerCase())) && 
      
      (
      <div className='card'>
  
        <img src={recipe.image ? recipe.image : defaultRecipePic} alt="recipe-picture" />
  
        <div className="card-body">
          <h4>{recipe.title}</h4>
          <p>{recipe.description}</p>
        </div>
        
        <div className="card-button">
        <button onClick={() => deleteRecipe(recipe.id)} className='deleteBtn'><FaRegTrashCan  size={40}/></button>
        <button onClick={()=> findRecipe(recipe.id)} className='editBtn'><RiEdit2Line size={40}/></button>
  
        </div>
        
      </div>

      )

    )
  )
}

export default Card