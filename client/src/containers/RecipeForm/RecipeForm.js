import React from "react";
import "./RecipeForm.css";
import InputIngredient from "../../components/InputIngredient/InputIngredient";

class RecipeForm extends React.Component{
    state = {
        recipeForm:{
            title: {
                label:"Title",
                type:"input",
                elementProps: {
                     
                    name:"title",
                    size:"50",
                    placeholder:"Recipe Title",
                    maxLength:"100"                    
                },
                required: true,
                value:""
            },
            description:{
                label:"Description",
                type:"textarea", 
                elementProps:{
                    
                    name:"description",
                    rows:"3",
                    placeholder:"Short description of recipe.",
                    maxLength:"100"                    
                },
                value:"" 
            },
            category:{               
                labels:["main","side","appetizer","dessert"],
                type: "radio",
                value:""
            },
            img: "placeholder for now",
            yield:{
                label:"Yield",
                type:"number", 
                elementProps: {
                    name:"yield",
                    min:"1",
                    max:"100"                    
                },
                unitSelect: false,
                units:"servings"
            },
            time:{
                label:"Time",
                type:"number", 
                elementProps: {
                    name:"time",
                    min:"1",
                    max:"200"                    
                },
                unitSelect: true,
                units:["minutes","hours"]
            },
            ingredients: "",
            instructions: ""
        }
    }

    render(){
        return(
            <div>
                <h2>Add a Recipe</h2>
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
                        <InputIngredient />
                        <InputIngredient />
                    </fieldset>
                    <fieldset>
                        <legend>Instructions:</legend>
                        <textarea name="instructions1" rows="4" maxLength="200" placeholder="Enter your instruction step here - we'll number for you"></textarea>
                    </fieldset>
                </form>        
            </div>            
        );
    };
};

export default RecipeForm;