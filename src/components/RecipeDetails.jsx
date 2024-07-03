import React from 'react';
import { Link } from 'react-router-dom';
import {recipeDisplayData}  from "./RecipesList";
import recipeOne from '../assets/spaghetti-bolognese.png';
import recipeTwo from '../assets/chicken-curry.jpg';
import recipeThree from '../assets/margherita-pizza.jpg';
import recipeFour from '../assets/beef-taco.jpg';
import recipeFive from '../assets/stir-fry.jpg';
import recipeSix from '../assets/grilled-salmon.png';


const recipeDetails = () => {
    
  
     /* 0 - id,
    1 - title,
    2 - description,
    3 - ingredients,
    4 - steps 
    5 - image
    */


    const title = recipeDisplayData[1];
    const description = recipeDisplayData[2];
    const ingredients = recipeDisplayData[3];
    const steps = recipeDisplayData[4];
    const image = recipeDisplayData[5];
    
    return(
    <>


    <h1>{title}</h1> <hr />

    <img alt={title} src={image}></img>
    
    <h2>{description}</h2> <hr />

    <h3> Ingredients </h3> <hr /> 
        
    <ul>            
        {                   
        ingredients.map((ingredient, index) => (
         <li key = {index}>
            {ingredients[index]}   
         </li>
        ))
        }
    </ul>

   

    <h3> Steps </h3> <hr />

    <ul>            
        {                   
        steps.map((step, index) => (
         <li key = {index}>
            {steps[index]}   
         </li>
        ))
        }
    </ul>


    <button type="button" className='btn btn-warning d-block m-auto'><Link to='/list-recipes'>Back to recipes</Link></button>
 
    </>
)

}

export default recipeDetails;