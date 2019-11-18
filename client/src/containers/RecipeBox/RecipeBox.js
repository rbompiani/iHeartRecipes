import React from "react";
import "./RecipeBox.css";
import RecipeData from "../../RecipeData";
import RecipeCard from "../../components/RecipeCard/RecipeCard";

class RecipeBox extends React.Component {
    state=RecipeData;

    heartClickHandler = (id)=>{
        this.setState(prevState => {
            return{
                recipes: prevState.recipes.filter(r => r.id !== id)
            };
        });
    };

    render(){
        return(
            <div id="recipeBox">
                {this.state.recipes.map((recipe, idx) =>{
                    return(
                        <RecipeCard key={recipe.id} {...recipe} heartClick={this.heartClickHandler}/>
                    )
                })}  
            </div>
        );
    }
}

export default RecipeBox;