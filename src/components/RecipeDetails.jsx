import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { displayData }  from "./RecipesList";
import detailsBackground from '../assets/details-background.png';
import '../styles.css';

const RecipeDetails = () => {
    const [info] = useState(displayData)

    /*
    1 - title,
    2 - description,
    3 - ingredients,
    4 - steps 
    5 - image
    */

    const title = info[0];
    const description = info[1];
    const ingredients = info[2];
    const steps = info[3];
    const image = info[4];

    const detailStyle = {
        backgroundImage: `url(${detailsBackground})`,
    }


    return (
    <div className='container' style={detailStyle}>

    <h1>{title}</h1> 

    <p>{description}</p>
    <div className='row'>
        <div className='col-md-8'>
            <h5> Ingredients </h5>
            <ul className='list-unstyled'>            
                {ingredients.map((ingredient, index) => (
                    <li key = {index} className="d-flex align-items-start mb-2">
                        <span className="badge bg-primary me-2">{index + 1}</span>
                        {ingredient}   
                    </li>
                ))}
            </ul>
        </div>
        <div className="col-md-4">
            <img alt={title} src={image} className="img-fluid" />
        </div>
    </div>

    <div>
        <h5>Preparation Steps</h5> 
    <ul>            
        {                   
        steps.map((step, index) => (
         <li key = {index} className='mb-2'>
            {step}   
         </li>
        ))
        }
    </ul>
    </div>
    
    <button type="button" className='btn btn-warning d-block m-auto'><Link to='/list-recipes'>Back to recipes</Link></button>
 
    </div>
);
}

export default RecipeDetails;