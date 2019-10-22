import React from "react";
import "./RecipeCard.css";

const RecipeCard = props => (
    <div className="recipeCard">
        {props.title}
    </div>
);

export default RecipeCard;