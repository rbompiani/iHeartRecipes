import React from "react";
import userData from "../../UserData";
import "./Header.css";
import UserLogo from "../../components/UserLogo/UserLogo";

class Header extends React.Component {
    state = userData;

    render () {
        return (
            <header>
                <span className="appLogo">Logo</span>
                <UserLogo />
            </header>
        )
    }
}

export default Header;