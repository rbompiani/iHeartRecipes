import React from "react";
import AddButton from "../../AddButton/AddButton"

const InputIngredient = props => {
    const measuresArray=[];
    for (let key in props.units){measuresArray.push({
            id:key,
            measurements: props.units[key]
        })
    }

    return(
        <div id="ingredients">
            <ul>
                {props.value.map(element => (<li>{element}</li>))}
            </ul>
            <div className="ingredient">
                <input type="number" name="ingredientQty" value={props.ingredientQty} min="0" max="100" placeholder="1.5" onChange={props.changed}></input>
                <select name="ingredientUnit" onChange={props.changed} value={props.ingredientUnit}>
                    <option value="">val</option>
                    {measuresArray.map(u=>{
                        return(
                            <optgroup label={u.id}>
                                {u.measurements.map(i=>(<option value={i}>{i}</option>))}
                            </optgroup>
                        )
                    })}
                </select>
                <input type="text" name="ingredientName" value={props.ingredientName} maxLength="50" placeholder="ingredient" onChange={props.changed}></input>
            </div>
            <AddButton name="addIngredientButton" push={props.push}/>                  
        </div>        
    )
};

export default InputIngredient;