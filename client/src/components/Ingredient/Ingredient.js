import React from 'react';

const Ingredient = props => {

	return (
		<label>
			<input type="checkbox" name="ingredient" value={props.ingredient} />
			<span>{props.ingredient}</span>
		</label>

	)
};

export default Ingredient;
