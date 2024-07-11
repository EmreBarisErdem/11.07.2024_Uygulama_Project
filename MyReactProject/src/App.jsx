import { useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import CardList from './components/CardList'
import fakeRecipes from './assets/js/recipes'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [tarifler,setTarifler] = useState(fakeRecipes);

  const addRecipe = (yeniTarif) => {
    setTarifler(prev=>[...prev,yeniTarif]);
  }

  const deleteRecipe = (id) => {
    setTarifler(prev=>prev.filter(statedenGelen=>statedenGelen.id !== id));
  }
  return (
    <>
      <Header/>
      <Main addRecipe = {addRecipe} tarifler={tarifler}/>
      <CardList tarifler = {tarifler} deleteRecipe={deleteRecipe}/>
    </>
  )
}

export default App
