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
		data: null,
		isLoggedIn: false,
		token: null,
		userId: null,
		tokenExpiration: null
	};

	login = (token, uid, expirationDate) => {
		const tokenExpirationDate =
			expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);

		this.setState({
			isLoggedIn: true,
			token: token,
			userId: uid,
			tokenExpiration: tokenExpirationDate
		});

		localStorage.setItem(
			'userData',
			JSON.stringify({
				userId: uid,
				token: token,
				expiration: tokenExpirationDate.toISOString()
			})
		);
	};

	logout = () => {
		this.setState({
			isLoggedIn: false,
			token: null,
			userId: null,
			tokenExpiration: null
		});
		localStorage.removeItem('userData');
	};

	componentDidMount() {
		// check local storage for user id
		const storedUserData = JSON.parse(localStorage.getItem('userData'));
		console.log(storedUserData);
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

		// Call our fetch function below once the component mounts
		this.callBackendAPI()
			.then(res => this.setState({ data: res.express }))
			.catch(err => console.log(err));
	}
	// Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
	callBackendAPI = async () => {
		const response = await fetch('/express_backend');
		const body = await response.json();

		if (response.status !== 200) {
			throw Error(body.message);
		}
		return body;
	};

	render() {
		if (this.state.token && this.state.tokenExpiration) {
			const remainingTime =
				this.state.tokenExpiration.getTime() - new Date().getTime();
			logoutTimer = setTimeout(this.logout, remainingTime);
		} else {
			clearTimeout(logoutTimer);
		}

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
