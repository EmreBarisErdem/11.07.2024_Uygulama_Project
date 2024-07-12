import { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import CardList from './components/CardList'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [tarifler,setTarifler] = useState([]);

  const addRecipe = (yeniTarif) => {
    const newRecipe = postAsync(yeniTarif);
    setTarifler(prev=>[...prev,newRecipe]);
  }

  const deleteRecipe = (id) => {
    deleteByIDAsync(id);
    // setTarifler(prev=>prev.filter(statedenGelen=>statedenGelen.id !== id));
    setTarifler(prev => prev.filter)
  }

  const getAsync = async () => {
    const url = "http://localhost:3000/fakeRecipes"
    const response = await fetch(url);
    const tarifler = await response.json();
    setTarifler(tarifler);
  }

  useEffect(()=>{
    getAsync();
  },[])


  const postAsync = async (newPost) => {
    const response = await fetch("http://localhost:3000/fakeRecipes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newPost)
    })
    const data = await response.json();
    return data
  }

  const deleteByIDAsync = async (ID) => {
    const response = await fetch(`"http://localhost:3000/fakeRecipes/${ID}"`,{
        method:"DELETE",
    })
    const data = await response.json()
    return data
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
