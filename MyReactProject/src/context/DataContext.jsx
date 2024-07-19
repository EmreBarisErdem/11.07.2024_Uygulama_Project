import axios from 'axios';
import { createContext, useEffect, useState } from "react";


const DataContext = createContext();

export const DataProvider = ({children}) => {
 
  const [recipes, setRecipes] = useState([]);
  const [choosenRecipe, setChoosenRecipe] = useState("");

  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipeImageURL, setImageURL] = useState("");
  
  const [titleError, setTitleError] = useState(true);
  const [descriptionError, setDescriptionError] = useState(true);
  const [imageURLError, setImageURLError] = useState(true);


  const url = "http://localhost:5174/fakeRecipes";
  
  const getAsync = async () => {

    const response = await axios.get(url);

    const recipes = await response.data;

    setRecipes(recipes);

  }


  const postAsync = async (newPost) => {

    const response = await axios.post(url, newPost);

  }


  const deleteByIDAsync = async (ID) => {

    //FrontEnd

    setRecipes(prev => prev.filter(recipe => recipe.id !== ID));

    //BackEnd

    //aktif silmek yerine pasif silerek, tarife isDeleted:true özelliği ekliyoruz.

    const response = await axios.patch(`${url}/${ID}`, { isDeleted: true });
  }


  const addRecipe = async (newRecipe) => {

    let url = "http://localhost:5174/fakeRecipes";

    if (!choosenRecipe) {

      //frontend
      setRecipes(prev => [...prev, newRecipe]);
      //backend
      postAsync(newRecipe);

    }
    else {

      //backend

      url += `${choosenRecipe.id}`;

      const response = await axios.put(url, newRecipe);

      //Frontend

      setRecipes(prev =>
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
    setChoosenRecipe(recipes.find(recipe => recipe.id === id));
    console.log(recipes.find(recipe => recipe.id === id));
  }

  
  
  
  const handleSubmit = (e) => {
      e.preventDefault(); //submit butonunun sayfayı yenilemesini önlemek için...
      
      
      if (recipeTitle.trim() && recipeDescription.trim() && recipeImageURL.trim()) {
          //Form Validasyonları
          setTitleError(true); 
          setImageURLError(true);
          setDescriptionError(true);
          
          //Forma Girilen Tarifi Ekleme
          addRecipe({
              id: recipes.length === 0 ? "1" : (Number(recipes[recipes.length - 1].id) + 1).toString(),
              title: recipeTitle,
              description: recipeDescription,
              image: recipeImageURL,
            });
            
            resetForm();
            
        }
        else {

            if (!recipeTitle.trim()) {
                setTitleError(false);
            }
            if (!recipeDescription.trim()) {
                setDescriptionError(false);
            }
            if (!recipeImageURL.trim()) {
                setImageURLError(false);
            }
            
        }
    };
    
    
    //Formu Temizleme Fonksiyonu...
  const resetForm = () => {
    setRecipeTitle("");
    setRecipeDescription("");
    setImageURL("");
    
    setChoosenRecipe("");
}

useEffect(() => {
    if (choosenRecipe) {
        setRecipeTitle(choosenRecipe.title);
        setRecipeDescription(choosenRecipe.description);
        setImageURL(choosenRecipe.image);
    }
}, [choosenRecipe]); // secilen tarife bağımlı hale getirdik...

useEffect(() => {

  getAsync();

}, [])


return <DataContext.Provider value={{   
    
    handleSubmit,
    resetForm,
    addRecipe,
    findRecipe,
    deleteRecipe,
    getAsync,

    recipes,
    setRecipes,

    choosenRecipe,
    setChoosenRecipe,

    recipeTitle,
    recipeDescription,
    recipeImageURL,
    titleError,
    descriptionError,
    imageURLError,

    setRecipeTitle,
    setRecipeDescription,
    setImageURL,
    setTitleError,
    setDescriptionError,
    setImageURLError,

}}>
        {children}
    </DataContext.Provider>
}

export default DataContext