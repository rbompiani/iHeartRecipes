import React from "react";

const InputTime=(props) => (
    <div>
        <input type="number" name="timeQty" {...props.elementProps} value={parseInt(props.timeQty)} onChange={props.changed}/>
        <select name="timeUnit" onChange={props.changed} value={props.timeUnit}>
            {props.units.map(u=>(<option value={u}>{u}</option>))} 
        </select>
    </div>
)

export default InputTime;