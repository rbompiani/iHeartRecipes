import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';

import Header from '../../components/Header/Header';
import RecipeBox from '../RecipeBox/RecipeBox';
import RecipeForm from '../RecipeForm/RecipeForm';
import UserAuthForm from '../UserAuthForm/UserAuthForm';
import AuthContext from '../../shared/auth-context';

import './App.css';

let logoutTimer;

class App extends Component {
	state = {
		isLoggedIn: false,
		token: null,
		userId: null,
		tokenExpiration: null
	};

	// ------- LOG IN FUNCTION -------- //
	login = (token, uid, expirationDate) => {
		// create expiration timer for authentication
		const tokenExpirationDate =
			expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);

		// add user authentication info to state
		this.setState({
			isLoggedIn: true,
			token: token,
			userId: uid,
			tokenExpiration: tokenExpirationDate
		});

		// add web authentication information to local storage
		localStorage.setItem(
			'userData',
			JSON.stringify({
				userId: uid,
				token: token,
				expiration: tokenExpirationDate.toISOString()
			})
		);
	};

	// ------- LOG OUT FUNCTION -------- //
	logout = () => {
		// remove authentication info from state
		this.setState({
			isLoggedIn: false,
			token: null,
			userId: null,
			tokenExpiration: null
		});
		// clear authentication information from local storage
		localStorage.removeItem('userData');
	};

	componentDidMount() {
		// check local storage for authentication information
		const storedUserData = JSON.parse(localStorage.getItem('userData'));

		// if authentication info exists in local storage and timer is still valid, auto login user
		if (
			storedUserData &&
			storedUserData.token &&
			new Date(storedUserData.expiration) > new Date()
		) {
			this.login(
				storedUserData.token,
				storedUserData.userId,
				new Date(storedUserData.expiration)
			);
		}
	}

	render() {
		// ------- GENERATE LOGOUT TIMER -------- //
		if (this.state.token && this.state.tokenExpiration) {
			const remainingTime =
				this.state.tokenExpiration.getTime() - new Date().getTime();
			logoutTimer = setTimeout(this.logout, remainingTime);
		} else {
			clearTimeout(logoutTimer);
		}

		// ------- GENERATE ROUTES BASED ON USER LOGIN -------- //
		let routes;

		if (this.state.isLoggedIn) {
			routes = (
				<Switch>
					<Route path="/" exact>
						<RecipeBox />
					</Route>

					<Route path="/new-recipe" exact>
						<RecipeForm />
					</Route>

					<Redirect to="/" />
				</Switch>
			);
		} else {
			routes = (
				<Switch>
					<Route path="/auth" exact>
						<UserAuthForm />
					</Route>
					<Redirect to="/auth" />
				</Switch>
			);
		}

		return (
			<AuthContext.Provider
				value={{
					isLoggedIn: this.state.isLoggedIn,
					token: this.state.token,
					userID: this.state.userId,
					login: this.login,
					logout: this.logout
				}}
			>
				<BrowserRouter>
					<Header />
					{routes}
				</BrowserRouter>
			</AuthContext.Provider>
		);
	}
}

export default App;
