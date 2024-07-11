import React from 'react'
import defaultRecipePic from '../assets/img/defaultRecipePic.jpg'

const Card = ({tarif,deleteRecipe}) => {
  return (
    <div className='card'>

      <img src={tarif.image ? tarif.image : defaultRecipePic} alt="tarif-resmi" />

      <div className="card-body">
        <h5>{tarif.title}</h5>
        <p>{tarif.description}</p>
      </div>
      
      <div className="card-button">
      <button onClick={() => deleteRecipe(tarif.id)} className='deleteBtn'>Delete</button>

      </div>
      
    </div>
  )
}

export default Card