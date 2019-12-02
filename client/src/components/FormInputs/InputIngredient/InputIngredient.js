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
        <div className="ingredient">
                <input type="number" name="ingredientQty" min="1" max="100" placeholder="1.5"></input>
                <select name="ingredientUnit">
                    <option value="" selected>val</option>
                    {measuresArray.map(u=>{
                        return(
                            <optgroup label={u.id}>
                                {u.measurements.map(i=>(<option value={i}>{i}</option>))}
                            </optgroup>
                        )
                    })}
                </select>
                <input type="text" name="ingredientName" maxLength="50" placeholder="ingredient"></input>
                <AddButton />                  
        </div>        
    )
};

export default InputIngredient;