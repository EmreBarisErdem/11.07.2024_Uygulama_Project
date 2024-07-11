import React from 'react'
import Card from './Card'

const CardList = ({tarifler,deleteRecipe}) => {
  
  return (
    <div className='card-list'>
      {
        tarifler.map(tarif => 
          <Card key={tarif.id} tarif={tarif} deleteRecipe={deleteRecipe}/>

        )
      }
    </div>
  )
}

export default CardList