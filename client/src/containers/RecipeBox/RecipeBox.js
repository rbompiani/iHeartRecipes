import React from 'react';
import axios from 'axios';

import AuthContext from '../../shared/auth-context';
import RecipeData from '../../RecipeData';
import RecipeCard from '../../components/RecipeCard/RecipeCard';

import './RecipeBox.css';

class RecipeBox extends React.Component {
	state = RecipeData;

	static contextType = AuthContext;

	componentDidMount() {
		axios
			.get('/recipebox', {
				headers: {
					Authorization: `Bearer ${this.context.token}`
				}
			})
			.then(response => {
				this.setState(response.data);
			});
	}

	heartClickHandler = id => {
		this.setState(prevState => {
			return {
				recipes: prevState.recipes.filter(r => r.id !== id)
			};
		});
	};

	render() {
		return (
			<div id="recipeBox">
				{this.state.recipes.map((recipe, idx) => {
					return (
						<RecipeCard
							key={recipe.id}
							{...recipe}
							heartClick={this.heartClickHandler}
						/>
					);
				})}
			</div>
		);
	}
}

export default RecipeBox;
