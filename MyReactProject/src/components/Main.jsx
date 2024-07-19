import React, { useContext } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import DataContext from "../context/DataContext";

const Main = () => {
  const {

      choosenRecipe,

      recipeTitle,
      recipeDescription,
      recipeImageURL,

      setRecipeTitle,
      setRecipeDescription,
      setImageURL,

      titleError,
      descriptionError,
      imageURLError,

      resetForm,
      handleSubmit,
    
    } = useContext(DataContext);

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
        <label></label>
        <button disabled={recipeTitle === "" || recipeDescription === "" || recipeImageURL === ""} type="submit"><MdOutlineAddCircleOutline size={25}/> {choosenRecipe ? "Update Your Recipe" : "Add Your Recipe"}</button>

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
