import React, { useEffect, useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";

const Main = ({ addRecipe, tarifler, choosenRecipe, setChoosenRecipe }) => {

  const [recipeTitle, setRecipeTitle] = useState("");
  const [recipeDescription, setRecipeDescription] = useState("");
  const [recipeImageURL, setImageURL] = useState("");

  const [titleError, setTitleError] = useState(true);
  const [descriptionError, setDescriptionError] = useState(true);
  const [imageURLError, setImageURLError] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault(); //submit butonunun sayfayı yenilemesini önlemek için...


    if (recipeTitle.trim() && recipeDescription.trim() && recipeImageURL.trim()) {
      //Form Validasyonları
      setTitleError(true); 
      setImageURLError(true);
      setDescriptionError(true);

      //Forma Girilen Tarifi Ekleme
      addRecipe({
        id: tarifler.length === 0 ? "1" : (Number(tarifler[tarifler.length - 1].id) + 1).toString(),
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

  return (
    <main>
      <h1>Welcome to Chef's Recipe Book Website</h1>
      <p>You can create your own recipe book by using this website. So get creative and fill out the form below!</p>

      <form onSubmit={handleSubmit}>

        <h3>{choosenRecipe ? "Update Your Recipe" : "Add A New Recipe"}</h3>

        <input
          value={recipeTitle}
          onChange={(e) => setRecipeTitle(e.target.value)}
          type="text"
          placeholder="Recipe Title"
        />
        {titleError ? <p></p> : <p>You must enter a recipe title!</p>}

        <textarea
          
          value={recipeDescription}
          onChange={(e) => setRecipeDescription(e.target.value)}
          placeholder="Recipe Description"
        ></textarea>
        {descriptionError ? <p></p> : <p>You must enter a recipe description!</p>}

        <input
          value={recipeImageURL}
          onChange={(e) => setImageURL(e.target.value)}
          type="url"
          placeholder="Recipe Image URL"
        />
        {imageURLError ? <p></p> : <p>You must enter a image url!</p>}

        <button disabled={recipeTitle === "" || recipeDescription === "" || recipeImageURL === ""} type="submit"><MdOutlineAddCircleOutline size={24}/> {choosenRecipe ? "Update Your Recipe" : "Add Your Recipe"}</button>

        <input 
        disabled={!choosenRecipe} 
        onClick={() => resetForm()}
        type="button" 
        value={"Cancel"} 
        />
        
      </form>
    </main>
  );
};

export default Main;
