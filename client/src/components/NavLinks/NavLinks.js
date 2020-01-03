import React from "react";
import { NavLink } from 'react-router-dom';

import "./NavLinks.css"

const NavLinks = props => {
    return (
        <nav id="mainNav">
            <ul>
                <li>
                    <NavLink to="/" exact>Recipe Box</NavLink>
                </li>
                <li>
                    <NavLink to="/new-recipe" exact>Add Recipe</NavLink>
                </li>
                <li>
                    <NavLink to="/search-recipes" exact>Search Recipes</NavLink>
                </li>
                <li>
                    Log Out
                </li>
            </ul>
        </nav>
    )
};

export default NavLinks;