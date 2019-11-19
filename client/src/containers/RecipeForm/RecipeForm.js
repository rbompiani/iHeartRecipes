import React from "react";
import "./RecipeForm.css";

const RecipeForm = props => (
    <div>
        <h2>Add A Recipe</h2>
        <form>
            <fieldset>
                <div>
                    <label for="title">
                        Title:
                    </label>
                    <input type="text" name="title" size="50" placeholder="Recipe Title"></input>
                </div>
                <div>
                    <label for="description">
                        Description:
                    </label>
                    <input type="text" maxlength="100" placeholder="Short description of recipe."></input>
                </div>
                <div className="photoUpload">
                    ADD PHOTO
                </div>
                <div>
                    <fieldset>
                        <input type="radio" name="main" value="main"></input> 
                        <input type="radio" name="side" value="side"></input> 
                        <input type="radio" name="appetizer" value="appetizer"></input>  
                        <input type="radio" name="dessert" value="dessert"></input>    
                    </fieldset>
                </div>
                <div>
                    <label for="time">
                        Yield:
                    </label>
                    <input type="text" name="time" size="3"></input>
                    <span> minutes</span>
                </div>  
                <div>
                    <label for="yield">
                        Yield:
                    </label>
                    <input type="text" name="yield" size="3"></input>
                    <span> servings</span>
                </div>            
            </fieldset>
            <fieldset>
                <legend>Ingeredients:</legend>
                <input type="text" name="ingredients1" size="50"></input>
            </fieldset>
            <fieldset>
                <legend>Instructions:</legend>
                <input type="text" name="ingredients1" size="50"></input>
            </fieldset>
        </form>        
    </div>

);

export default RecipeForm;