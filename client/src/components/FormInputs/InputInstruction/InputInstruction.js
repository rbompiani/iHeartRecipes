import React from "react";
import AddButton from "../../AddButton/AddButton"

const InputInstruction = props => {
    const measuresArray=[];
    for (let key in props.units){measuresArray.push({
            id:key,
            measurements: props.units[key]
        })
    }

    return(
        <div className="instruction">
                <textarea {...props.elementProps} onChange={props.changed} value={props.instructionTxt} onChange={props.changed}/>
                <AddButton name="addInstructionButton" push={props.push}/>                  
        </div>        
    )
};

export default InputInstruction;