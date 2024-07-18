import React from 'react'
import Card from './Card'

const CardList = ({ tarifler, deleteRecipe,findRecipe }) => {

  return (
    <div className="cardListBackGround">
      
      <div className='card-list'>

        {
          tarifler.map(tarif =>
            !tarif.isDeleted && <Card key={tarif.id} tarif={tarif} deleteRecipe={deleteRecipe} findRecipe={findRecipe} />

          )
        }
      </div>

    </div>
  )
}

export default CardList