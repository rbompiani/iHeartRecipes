import React from "react";
import InputIngredient from "../FormInputs/InputIngredient/InputIngredient";
import InputTime from "../FormInputs/InputTime/InputTime";

const InputElement = (props) => {

    //check for type of input
    let inputElement;
    switch(props.type){
        case("text"):
            inputElement=<input type="text" {...props.elementProps} value={props.value} onChange={props.changed} />
            break;
        case("textarea"):
            inputElement=<textarea {...props.elementProps} onChange={props.changed}/>
            break;
        case("radio"):
            inputElement=(
                <fieldset>
                    <div id="category">
                        {props.labels.map(radio=>(
                            <div>
                                <input type="radio" name={radio} value={radio} onChange={props.changed} checked={props.value===radio}></input>
                                <label htmlFor={radio}>{radio}</label> 
                            </div>
                        ))}    
                    </div> 
                </fieldset>
            );
            break;
        case("number"):
            let units;
            if(props.unit) {
                units=<span>{props.unit}</span>
            }
            inputElement=(
                <div>
                    <input type="number" {...props.elementProps} value={props.value} onChange={props.changed}/>
                    {units}
                </div>
            )
            break;
        case("ingredient"):
            inputElement=<InputIngredient {...props}/>;
            break;
        case("time"):
            inputElement=<InputTime {...props}/>;
            break;  
    }

    return(
        <div>
            <label htmlFor={props.label}>{props.label}</label>
            {inputElement}
        </div>        
    );
};

export default InputElement;