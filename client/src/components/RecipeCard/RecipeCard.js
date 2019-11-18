import React from "react";
import "./RecipeCard.css";
import Heart from "../Heart/Heart";

const RecipeCard = props => (
    <div className="recipeCard">
        <img src={props.img} className="cardThumbnail"/>
        <div className="cardInfoWrapper">
            <h2>{props.title}</h2>
            <p>{props.description}</p>
            <div className="cardFooter">
                <span className="category">{props.category}</span>
                <span className="time">{props.time}</span>
                <Heart isFav={props.isFav} item={props.id} click={props.heartClick}/>       
            </div>
        </div>
        
    </div>
);

export default RecipeCard;