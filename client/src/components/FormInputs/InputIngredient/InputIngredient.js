import React from "react";
import AddButton from "../../AddButton/AddButton"

const InputIngredient = props => (
    <div className="ingredient">
            <input type="number" name="ingredientQty" min="1" max="100" placeholder="1.5"></input>
            <select name="ingredientUnit">
                <option value="" selected>val</option>
                <optgroup label="Volume">
                    <option value="tsp">tsp</option>
                    <option value="tbsp">tbsp</option>
                    <option value="fl oz">fl oz</option>
                    <option value="c">c</option>
                    <option value="pt">pt</option>
                    <option value="gal">gal</option>
                    <option value="ml">mL</option>
                    <option value="L">L</option>
                </optgroup>
                    <optgroup label="Weight">
                    <option value="lb">lb</option>
                    <option value="oz">oz</option>
                    <option value="mg">mg</option>
                    <option value="g">g</option>
                </optgroup>
            </select>
            <input type="text" name="ingredientName" maxLength="50" placeholder="ingredient"></input>
            <AddButton />                  
    </div>
);

export default InputIngredient;