import React from "react";

import UserLogo from "../UserLogo/UserLogo";
import NavLinks from "../NavLinks/NavLinks";

import "./Header.css";



class Header extends React.Component {


    render () {
        return (
            <header>
                <span className="appLogo">Logo</span>
                <NavLinks />
                <UserLogo />
            </header>
        )
    }
}

export default Header;