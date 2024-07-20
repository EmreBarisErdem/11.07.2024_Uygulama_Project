import React, { useContext } from 'react'
import defaultRecipePic from '../assets/img/defaultRecipePic.jpg'
import { RiEdit2Line } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";
import DataContext from '../context/DataContext';
import AuthContext from '../context/AuthContext';

const Card = ({ recipe }) => {
  const { deleteRecipe, findRecipe, search} = useContext(DataContext);
  const {isAuthenticated} = useContext(AuthContext);
  return (
    (
      (recipe.title.toLowerCase().startsWith(search.toLowerCase())) && 
      
      (
        <div className='card'>
          <div className="card-head">

            <img src={recipe.image ? recipe.image : defaultRecipePic} alt="recipe-picture" />

            <div className="card-body">
              <h4>{recipe.title}</h4>
              <p>{recipe.description}</p>
            </div>

          </div>

          <div className="card-button">

            {isAuthenticated &&

              <>
              <button onClick={() => deleteRecipe(recipe.id)} className='deleteBtn'><FaRegTrashCan size={20} /></button>
              <button onClick={() => findRecipe(recipe.id)} className='editBtn'><RiEdit2Line size={20} /></button>
              </>

            }
          </div>

        </div>

      )

    )
  )
}

export default Card