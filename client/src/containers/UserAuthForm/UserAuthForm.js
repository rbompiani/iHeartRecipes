import React from 'react';
import InputElement from '../../components/InputElement/InputElement';
import axios from 'axios';
import AuthContext from '../../shared/auth-context';

class SignUp extends React.Component {
	state = {
		isLogin: true
	};

	static contextType = AuthContext;

	authSubmitHandler = (event, auth) => {
		event.preventDefault();
		const data = new FormData(event.target);

		if (this.state.isLogin) {
			//get route for LOG IN

			// store form data
			const formData = {
				email: data.get('email'),
				password: data.get('password')
			};
			console.log("we're finding an existing user", formData);

			axios
				.get('/login', {
					params: {
						email: data.get('email'),
						password: data.get('password')
					},
					headers: {
						Authorization: `Bearer ${auth.token}`
					}
				})
				.then(function(response) {
					const responseData = response.data;
					console.log(responseData);
					auth.login(responseData.token, responseData.userId);
				});
		} else {
			// post route for SIGN UP

			// store form data
			const formData = {
				first: data.get('first'),
				last: data.get('last'),
				email: data.get('email'),
				password: data.get('password')
			};

			console.log("we're creating a new user", formData);
			axios.post('/signup', formData).then(function(response) {
				const responseData = response.data;
				console.log(responseData.token);
				auth.login(responseData.token);
			});
		}
	};

	switchModeHandler = () => {
		this.setState(prevState => {
			return { isLogin: !prevState.isLogin };
		});
	};

	render() {
		const auth = this.context;

		return (
			<div>
				<h2>{this.state.isLogin ? 'Log In' : 'Sign Up'}</h2>
				<form onSubmit={event => this.authSubmitHandler(event, auth)}>
					{!this.state.isLogin && (
						<InputElement
							label="first"
							type="text"
							elementProps={{
								name: 'first',
								size: '50',
								placeholder: 'first name',
								maxLength: '50',
								required: true
							}}
						/>
					)}
					{!this.state.isLogin && (
						<InputElement
							label="last"
							type="text"
							elementProps={{
								name: 'last',
								size: '50',
								placeholder: 'last name',
								maxLength: '50',
								required: true
							}}
						/>
					)}
					<InputElement
						label="email"
						type="email"
						elementProps={{
							name: 'email',
							size: '50',
							placeholder: 'email@email.com',
							maxLength: '100',
							required: true
						}}
					/>
					<InputElement
						label="password"
						type="password"
						elementProps={{
							name: 'password',
							size: '50',
							placeholder: 'min length 6',
							maxLength: '50',
							minLength: '6',
							required: true
						}}
					/>
					<button type="submit">
						{this.state.isLogin ? 'Log In' : 'Sign Up'}
					</button>
				</form>
				<button onClick={this.switchModeHandler}>switch</button>
			</div>
		);
	}
}

export default SignUp;
