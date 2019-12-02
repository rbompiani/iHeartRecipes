import React from "react";

const AddButton = (props) => (
    <button type="button" className="addButton" name={props.name} onClick={props.push}>
        +
    </button>
);

export default AddButton;