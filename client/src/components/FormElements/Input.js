import React, {useReducer} from "react";

const inputReducer = (state,action) => {
    switch (action.type) {
        case "CHANGE" :
            return {
                ...state,
                value: action.val,
                isValid: true
            };
        default:
            return state;
    }
}

const Input = (props) => {

    const [inputState, dispatch] = useReducer(inputReducer, {value:"", isValid:false});

    // handle input to form
    const changeHandler = event => {
        dispatch({type: "CHANGE", value: event.target.value});
    }

    //is the elementan input or textarea?
    const element = props.element === "input" ? (
    <input id={props.id} type={props.type} placehoder={props.placeholder} onChange={changeHandler} value={inputState.value} /> 
    ):(
        <textarea id={props.id} rows={props.rows || 3} onChange={changeHandler} value={inputState.value} />        
    );


    return (
        <div className={`form-control ${!inputState.isValid && 'form-control-invalid'}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && <p>{props.errorText}</p>}
        </div>
    )
}

export default Input;