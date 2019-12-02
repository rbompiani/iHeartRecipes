import React from "react";
import "./RecipeForm.css";
import InputElement from "../../components/InputElement/InputElement";
import InputIngredient from "../../components/FormInputs/InputIngredient/InputIngredient";

class RecipeForm extends React.Component{
    state = {
        recipeForm:{
            title: {
                label:"title",
                type:"text",
                elementProps: {  
                    name:"title",
                    size:"50",
                    placeholder:"Recipe Title",
                    maxLength:"100",
                    required: true,                  
                },
                value:""
            },
            description:{
                label:"description",
                type:"textarea", 
                elementProps:{ 
                    name:"description",
                    rows:"3",
                    placeholder:"Short description of recipe.",
                    maxLength:"100"                    
                },
                value:"" 
            },
            category:{
                label: "category",               
                labels:["main","side","appetizer","dessert"],
                type: "radio",
                elementProps: {
                    name:"category"                    
                },
                value:""
            },
            img: "placeholder for now",
            yield:{
                label:"yield",
                type:"number", 
                elementProps: {
                    name:"yield",
                    min:"1",
                    max:"100"                    
                },
                unit:"servings",
                value:""
            },
            time:{
                label:"time",
                type:"time", 
                elementProps: {
                    min:"1",
                    max:"200"                    
                },
                units:["minutes","hours"],
                timeUnit:"",
                timeQty:0,
                value:""
            },
            ingredients:{
                label:"ingredients",
                type:"ingredient",
                elementProps: {
                    name:"ingredients"                   
                },
                units:{
                    volume: ["tsp","tbsp","fl oz","c","pt","gal","mL","L"],
                    weight: ["oz","lb", "mg", "g"]
                },
                ingredientQty: 0,
                ingredientUnit: "",
                ingredientName: "",
                value: []

            },
            instructions:{
                label:"instruction",
                type: "instruction",
                instructions:[],
                elementProps: {
                    name:"instructionTxt"                   
                },
                instructionTxt: "",
                value: []
            }
        }
    }

    inputChangedHandler= (event, inputId) =>{
        console.log(event.target.value);
        console.log(event.target.name);
        const updatedRecipeForm = {...this.state.recipeForm};
        const updatedFormElement = {...updatedRecipeForm[inputId]};

        //if getting time, combine qty and units
        if(event.target.name==="timeQty"||event.target.name==="timeUnit"){
            updatedFormElement[event.target.name] = event.target.value;
            updatedFormElement.value = updatedFormElement.timeQty + " " + updatedFormElement.timeUnit; 

        // if getting ingredient, combine qty, units, and ingredient name    
        } else if(event.target.name==="ingredientQty"||event.target.name==="ingredientUnit"||event.target.name==="ingredientName"){
            updatedFormElement[event.target.name] = event.target.value;
        
        // for instructions
        } else if(event.target.name==="instructionTxt"){
            updatedFormElement[event.target.name] = event.target.value;
        }else{
            updatedFormElement.value = event.target.value;
        }
        updatedRecipeForm[inputId] = updatedFormElement;
        this.setState({recipeForm: updatedRecipeForm});
    }

    pushData = (event, inputId) =>{
        const updatedRecipeForm = {...this.state.recipeForm};
        let updatedFormElement={};

        if(event.target.name === "addIngredientButton"){
            updatedFormElement = {...updatedRecipeForm["ingredients"]};
            updatedFormElement.value.push(updatedFormElement.ingredientQty + "  " + updatedFormElement.ingredientUnit + "  " + updatedFormElement.ingredientName) 
            //clear input fields
            updatedFormElement.ingredientName="";
            updatedFormElement.ingredientQty=0;
            updatedFormElement.ingredientUnit="";

            updatedRecipeForm["ingredients"] = updatedFormElement;


        }else if(event.target.name === "addInstructionButton"){
            updatedFormElement = {...updatedRecipeForm["instructions"]};
            updatedFormElement.value.push(updatedFormElement.instructionTxt);
            // clear text area
            updatedFormElement.instructionTxt="";
            updatedRecipeForm["instructions"]= updatedFormElement
        }

        this.setState({recipeForm: updatedRecipeForm});
    }

    recipeHandler = (event) =>{
        event.preventDefault();
        this.setState({loading:true});
        const formData = {};
        for(let key in this.state.recipeForm) {
            formData[key] = this.state.recipeForm[key].value
        }
        console.log(formData)
    }

    render(){

        // create array from recipe form state object
        const formElementsArray=[];
        for (let key in this.state.recipeForm){
            formElementsArray.push({
                id:key,
                config: this.state.recipeForm[key]
            })
        };

        return(
            <div>
                <h2>Add a Recipe</h2>
                <form onSubmit={this.recipeHandler}>
                    {formElementsArray.map(formElement => {
                        return(
                            <InputElement 
                                {...formElement.config} 
                                changed={(event)=> this.inputChangedHandler(event,formElement.id)} 
                                push={this.pushData}
                            />
                        )
                    })}
                    <button type="submit">Add Recipe</button>
                </form>        
            </div>            
        );
    };
};

export default RecipeForm;