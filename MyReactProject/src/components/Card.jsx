import React from 'react'
import defaultRecipePic from '../assets/img/defaultRecipePic.jpg'
import { RiEdit2Line } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";

const Card = ({tarif, deleteRecipe, findRecipe}) => {
  return (
    <div className='card'>

      <img src={tarif.image ? tarif.image : defaultRecipePic} alt="recipe-picture" />

      <div className="card-body">
        <h4>{tarif.title}</h4>
        <p>{tarif.description}</p>
      </div>
      
      <div className="card-button">
      <button onClick={() => deleteRecipe(tarif.id)} className='deleteBtn'><FaRegTrashCan  size={40}/></button>
      <button onClick={()=> findRecipe(tarif.id)} className='editBtn'><RiEdit2Line size={40}/></button>

      </div>
      
    </div>
  )
}

export default Card