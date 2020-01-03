import React, { Component, useCallback } from 'react';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import Header from "../../components/Header/Header";
import RecipeBox from "../RecipeBox/RecipeBox";
import RecipeForm from "../RecipeForm/RecipeForm";
import UserAuthForm from "../UserAuthForm/UserAuthForm";
import AuthContext from "../../shared/auth-context";



class App extends Component {
  state = {
    data: null,
    isLoggedIn: false,
    token: null
  };

  componentDidMount() {
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
      throw Error(body.message) 
    }
    return body;
  };

  render() {

    const login = (token) => this.setState({isLoggedIn: true, token: token});
    const logout = () => this.setState({isLoggedIn: false, token: null});

    let routes;

    if (this.state.isLoggedIn){
      routes = (
        <Switch >
          <Route path="/" exact >
            <RecipeBox />
          </Route>

          <Route path="/new-recipe" exact >
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
      <AuthContext.Provider value={ {isLoggedIn : this.state.isLoggedIn, token: this.state.token, login : login, logout : logout} }>
        <BrowserRouter>
          <Header />
          {routes}  
        </BrowserRouter>        
      </AuthContext.Provider>

    );
  }
}

export default App;
