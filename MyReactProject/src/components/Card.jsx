import React from 'react'
import defaultRecipePic from '../assets/img/defaultRecipePic.jpg'
import { RiEdit2Line } from "react-icons/ri";
import { FaRegTrashCan } from "react-icons/fa6";

const Card = ({tarif,deleteRecipe,findRecipe}) => {
  return (
    <div className='card'>

      <img src={tarif.image ? tarif.image : defaultRecipePic} alt="recipe-picture" />

      <div className="card-body">
        <h5>{tarif.title}</h5>
        <p>{tarif.description}</p>
      </div>
      
      <div className="card-button">
      <button onClick={() => deleteRecipe(tarif.id)} className='deleteBtn'><FaRegTrashCan  size={30}/></button>
      <button onClick={()=> findRecipe(tarif.id)} className='editBtn'><RiEdit2Line size={30}/></button>

      </div>
      
    </div>
  )
}

export default Card