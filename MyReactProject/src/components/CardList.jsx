import React, { useContext } from 'react'
import Card from './Card'
import DataContext from '../context/DataContext'

const CardList = () => {
  const {recipes} = useContext(DataContext);
  return (
    <div className="cardListBackGround">
      
      <div className='card-list'>

        {
          recipes.map(recipe =>
            !recipe.isDeleted && <Card key={recipe.id} recipe={recipe} />

          )
        }
      </div>

    </div>
  )
}

export default CardList