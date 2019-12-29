import React from "react";
import InputElement from "../../components/InputElement/InputElement";
import axios from "axios";

class SignUp extends React.Component {

    state = {
        isLogin: false
    }

    signupHandler = (event) => {
        event.preventDefault();
        // store form data
        const data = new FormData(event.target);
        const formData = {
            first : data.get('first'),
            last : data.get('last'),
            email : data.get('email'),
            password : data.get('password')            
        }

        console.log(formData);
        axios.post("/signup",formData).then(function(response){console.log(response)});

    }

    switchModeHandler = () => {
        this.setState((prevState) => {
            return {isLogin: !prevState.isLogin};
        })
    }

    render() {
        return (
            <div>
                <h2>{this.state.isLogin ? "Log In" : "Sign Up"}</h2>
                <form onSubmit={this.signupHandler}>
                    { !this.state.isLogin &&
                        <InputElement label="first" type="text" 
                            elementProps={{  
                                name:"first",
                                size:"50",
                                placeholder:"first name",
                                maxLength:"50",
                                required: true,                  
                            }}
                        />
                    }
                    { !this.state.isLogin &&
                        <InputElement label="last" type="text"
                            elementProps={{  
                                name:"last",
                                size:"50",
                                placeholder:"last name",
                                maxLength:"50",
                                required: true,                  
                            }}
                        />
                    }  
                    <InputElement label="email" type="email"
                        elementProps={{  
                            name:"email",
                            size:"50",
                            placeholder:"email@email.com",
                            maxLength:"100",
                            required: true,                  
                        }}
                    />
                    <InputElement label="password" type="password"
                        elementProps={{  
                            name:"password",
                            size:"50",
                            placeholder:"min length 6",
                            maxLength:"50",
                            minLength:"6",
                            required: true,                  
                        }}
                    />
                    <button type="submit">{this.state.isLogin ? "Log In" : "Sign Up"}</button>
                </form>
                    <button onClick={this.switchModeHandler}>switch</button>        
            </div> 
        )        
    }

}

export default SignUp;