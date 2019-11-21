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
                    <input type="text" name="title" size="50" placeholder="Recipe Title" maxLength="100" required></input>
                </div>
                <div>
                    <label for="description">
                        Description:
                    </label>
                    <textarea placeholder="Short description of recipe." rows="3" maxLength="100" ></textarea>
                </div>
                <div className="photoUpload">
                    ADD PHOTO
                </div>
                <div>
                    <fieldset>
                        <input type="radio" name="main" value="main"></input>
                        <label for="main">main</label> 
                        <input type="radio" name="side" value="side"></input>
                        <label for="side">side</label>  
                        <input type="radio" name="appetizer" value="appetizer"></input>  
                        <label for="appetizer">appetizer</label> 
                        <input type="radio" name="dessert" value="dessert"></input>
                        <label for="dessert">dessert</label>     
                    </fieldset>
                </div>
                <div>
                    <label for="time">
                        Time:
                    </label>
                    <input type="text" name="time" size="3"></input>
                    <span> minutes</span>
                </div>  
                <div>
                    <label for="yield">
                        Yield:
                    </label>
                    <input type="number" name="yield" min="1" max="100"></input>
                    <span> servings</span>
                </div>            
            </fieldset>
            <fieldset>
                <legend>Ingredients:</legend>
                <input type="text" name="ingredients1" size="50"></input>
            </fieldset>
            <fieldset>
                <legend>Instructions:</legend>
                <input type="text" name="instructions1" size="50"></input>
            </fieldset>
        </form>        
    </div>

);

export default RecipeForm;