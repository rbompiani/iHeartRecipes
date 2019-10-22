import React from "react";
import "./RecipeBox.css";
import RecipeData from "../../RecipeData";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

class RecipeBox extends React.Component {
    state=RecipeData;

    render(){
        return(
            <div id="recipeBox">
                {this.state.recipes.map((recipe, idx) =>{
                    return(
                        <RecipeCard {...recipe}/>
                    )
                })}  
            </div>
        );
    }
}

export default RecipeBox;