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
                    name:"time",
                    min:"1",
                    max:"200"                    
                },
                units:["minutes","hours"],
                unitsval:"",
                timeval:0,
                value:""
            },
            ingredients:{
                label:"ingredients",
                type:"ingredient",
                ingredients:[],
                elementProps: {
                    name:"ingredients"                   
                },
                units:{
                    volume: ["tsp","tbsp","fl oz","c","pt","gal","mL","L"],
                    weight: ["oz","lb", "mg", "g"]
                }
            },
            instructions:{
                label:"instructions",
                type: "instructions",
                instructions:[],
                elementProps: {
                    name:"instructions"                   
                }
            }
        }
    }

    inputChangedHandler= (event, inputId) =>{
        console.log(event.target.value);
        const updatedRecipeForm = {...this.state.recipeForm};
        const updatedFormElement = {...updatedRecipeForm[inputId]};
        if(event.target.name==="time"||"timeUnit"){
            event.target.name==="time"? updatedFormElement.timeval = parseInt(event.target.value) : updatedFormElement.unitsval = event.target.value;
            updatedFormElement.value = updatedFormElement.timeval + " " + updatedFormElement.unitsval; 
        } else {
            updatedFormElement.value = event.target.value;
        }
        updatedRecipeForm[inputId] = updatedFormElement;
        this.setState({recipeForm: updatedRecipeForm});
    }

    getTimeHandler= (event,inputId) => {
        
        console.log(event.target.name);
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
                <form>
                    {formElementsArray.map(formElement => {
                        return(
                            <InputElement 
                                {...formElement.config} 
                                changed={(event)=> this.inputChangedHandler(event,formElement.id)} 
                            />
                        )
                    })}
                </form>        
            </div>            
        );
    };
};

export default RecipeForm;