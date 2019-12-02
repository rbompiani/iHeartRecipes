import React from "react";

const InputTime=(props) => (
    <div>
        <input type="number" name="timeQty" {...props.elementProps} value={parseInt(props.value)} onChange={props.changed}/>
        <select name="timeUnit" onChange={props.changed}>
            {props.units.map(u=>(<option value={u}>{u}</option>))} 
        </select>
    </div>
)

export default InputTime;