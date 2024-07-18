import { useEffect, useState } from 'react'
import Header from './components/Header'
import Main from './components/Main'
import CardList from './components/CardList'
import axios from 'axios';
import './assets/style/App.scss'

function App() {

  const [tarifler, setTarifler] = useState([]);

  const [choosenRecipe, setChoosenRecipe] = useState("");

  const url = "http://localhost:5174/fakeRecipes";


  const getAsync = async () => {

    const response = await axios.get(url);

    const tarifler = await response.data;

    setTarifler(tarifler);

  }


  const postAsync = async (newPost) => {

    const response = await axios.post(url, newPost);

  }


  const deleteByIDAsync = async (ID) => {

    //FrontEnd

    setTarifler(prev => prev.filter(tarif => tarif.id !== ID));

    //BackEnd

    //aktif silmek yerine pasif silerek, tarife isDeleted:true özelliği ekliyoruz.

    const response = await axios.patch(`${url}/${ID}`, { isDeleted: true });
  }


  const addRecipe = async (newRecipe) => {
    
    let url = "http://localhost:5174/fakeRecipes";

    if (!choosenRecipe) {

      //frontend
      setTarifler(prev => [...prev, newRecipe]);
      //backend
      postAsync(newRecipe);

    }
    else {

      //backend

      url += `${choosenRecipe.id}`;

      const response = await axios.put(url, newRecipe);

      //Frontend

      setTarifler(prev =>
        prev.map(recipe => {
  
          if (recipe.id === choosenRecipe.id) {
            return { ...response.data }
          }
          else {
            return { ...recipe }
          }
  
        }))


    }
    setChoosenRecipe("");

  }

  const deleteRecipe = (id) => {

    deleteByIDAsync(id);

  }

  const findRecipe = (id) => {
    setChoosenRecipe(tarifler.find(tarif => tarif.id === id));
  }

  useEffect(() => {

    getAsync();

  }, [])



  return (
    <>
      <Header />

      <Main choosenRecipe={choosenRecipe} setChoosenRecipe={setChoosenRecipe} addRecipe={addRecipe} tarifler={tarifler} />

      <CardList findRecipe={findRecipe} tarifler={tarifler} deleteRecipe={deleteRecipe} />

    </>
  )
}

export default App
