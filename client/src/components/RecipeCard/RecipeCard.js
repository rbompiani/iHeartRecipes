import React, { useState } from 'react';

import Heart from '../Heart/Heart';
import Modal from '../../shared/Modal/Modal';

import './RecipeCard.css';

const RecipeCard = props => {
	const [showRecipe, setShowRecipe] = useState(false);
	const openRecipeHandler = () => setShowRecipe(true);
	const closeRecipeHandler = () => setShowRecipe(false);

	return (
		<React.Fragment>
			<Modal
				show={showRecipe}
				onCancel={closeRecipeHandler}
				header={props.title}
			>
				<img className="cardThumbnail" src={props.img} />
				<div>{props.description}</div>
				<div>{props.ingredients}</div>
				<div>{props.instructions}</div>
				<span className="category">{props.category}</span>
				<span className="time">{props.time}</span>
				<Heart isFav={props.isFav} item={props.id} click={props.heartClick} />
			</Modal>
			<div className="recipeCard" onClick={openRecipeHandler}>
				<img src={props.img} className="cardThumbnail" alt={props.title} />
				<div className="cardInfoWrapper">
					<h2>{props.title}</h2>
					<p>{props.description}</p>
					<div className="cardFooter">
						<span className="category">{props.category}</span>
						<span className="time">{props.time}</span>
						<Heart
							isFav={props.isFav}
							item={props.id}
							click={props.heartClick}
						/>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default RecipeCard;
