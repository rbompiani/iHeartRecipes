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
                        <div id="category">
                            <div>
                                <input type="radio" name="main" value="main"></input>
                                <label for="main">main</label> 
                            </div>
                            <div>
                                <input type="radio" name="side" value="side"></input>
                                <label for="side">side</label> 
                            </div>
                            <div>
                                <input type="radio" name="appetizer" value="appetizer"></input>  
                                <label for="appetizer">appetizer</label>                             
                            </div>
                            <div>
                                <input type="radio" name="dessert" value="dessert"></input>
                                <label for="dessert">dessert</label>                              
                            </div>
                        </div>

                    </fieldset>
                </div>
                <div>
                    <label for="time">
                        Time:
                    </label>
                    <input type="number" name="time" min="1" max="200"></input>
                    <select name="timeUnit">
                        <option value="minutes">minutes</option>
                        <option value="hours">hours</option>
                    </select>
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
                <div className="ingredient">
                    <input type="number" name="ingredientQty1" min="1" max="100" placeholder="1.5"></input>
                    <select name="ingredientUnit1">
                        <option value="" selected>measurement</option>
                        <optgroup label="Volume">
                            <option value="tsp">tsp</option>
                            <option value="tbsp">tbsp</option>
                            <option value="fl oz">fl oz</option>
                            <option value="c">c</option>
                            <option value="pt">pt</option>
                            <option value="gal">gal</option>
                            <option value="ml">mL</option>
                            <option value="L">L</option>
                        </optgroup>
                            <optgroup label="Weight">
                            <option value="lb">lb</option>
                            <option value="oz">oz</option>
                            <option value="mg">mg</option>
                            <option value="g">g</option>
                        </optgroup>
                    </select>
                    <input type="text" name="ingredientName1" maxLength="50" placeholder="ingredient"></input>                    
                </div>
            </fieldset>
            <fieldset>
                <legend>Instructions:</legend>
                <textarea name="instructions1" rows="4" maxLength="200" placeholder="Enter your instruction step here - we'll number for you"></textarea>
            </fieldset>
        </form>        
    </div>

);

export default RecipeForm;