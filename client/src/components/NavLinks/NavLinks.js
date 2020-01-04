import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import AuthContext from '../../shared/auth-context';

import './NavLinks.css';

const NavLinks = props => {
	const auth = useContext(AuthContext);

	return (
		<nav id="mainNav">
			{auth.isLoggedIn && (
				<ul>
					<li>
						<NavLink to="/" exact>
							Recipe Box
						</NavLink>
					</li>
					<li>
						<NavLink to="/new-recipe" exact>
							Add Recipe
						</NavLink>
					</li>
					<li>
						<NavLink to="/search-recipes" exact>
							Search Recipes
						</NavLink>
					</li>
					<li>
						<button onClick={auth.logout}>Log Out</button>
					</li>
				</ul>
			)}
		</nav>
	);
};

export default NavLinks;
