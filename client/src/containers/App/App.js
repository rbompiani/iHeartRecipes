import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import Header from "../Header/Header";
import RecipeBox from "../RecipeBox/RecipeBox";
import RecipeForm from "../RecipeForm/RecipeForm";
import UserAuthForm from "../UserAuthForm/UserAuthForm";

class App extends Component {
state = {
    data: null
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
    return (
      <BrowserRouter>
        <div>
          
          <Header />
          
          <Switch >
            {
              /*Unauthorized Routes*/
            } 

            <Route path="/auth" exact >
              <UserAuthForm />
            </Route>

            {
              /*Authorized Routes*/
            } 

            <Route path="/" exact >
              <RecipeBox />
            </Route>

            <Route path="/new-recipe" exact >
              <RecipeForm /> 
            </Route>

            <Redirect to="/" />
          </Switch>

        </div>      
      </BrowserRouter>
    );
  }
}

export default App;
