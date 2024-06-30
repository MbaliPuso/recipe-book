import React, { useState } from 'react';
import recipeOne from '../assets/spaghetti-bolognese.png';
import recipeTwo from '../assets/chicken-curry.jpg';

const ListRecipes = () => {
    const [recipes] = useState([
        {
            title: 'Spaghetti Bolognese',
            description: 'A classic Italian pasta dish with rich meat sauce.',
            ingredients: ['Spaghetti', 'Ground beef', 'Tomato sauce', 'Onions', 'Garlic', 'Olive oil'],
            steps: ['Cook the spaghetti according to package instructions.', 'In a pan, cook the ground beef until browned.', 'Add onions and garlic and sauté until translucent.', 'Stir in the tomato sauce and simmer for 20 minutes.', 'Serve the sauce over the cooked spaghetti.'],
            image: recipeOne
        },
        {
            title: 'Chicken Curry',
            description: 'A flavorful and spicy chicken curry.',
            ingredients: ['Chicken', 'Coconut milk', 'Curry powder', 'Onions', 'Garlic', 'Ginger'],
            steps: ['Cut the chicken into pieces.', 'In a pot, sauté onions, garlic, and ginger.', 'Add the chicken and cook until browned.', 'Stir in the curry powder and coconut milk and simmer until chicken is cooked through.'],
            image: recipeTwo
        }
    ])

    return (
        <div>
            <h1>Recipes</h1>
            <ul>
                {recipes.map((recipe, index) => (
                    <li key={index}>
                        <img src={recipeOne} alt={recipe.title} />
                        <h2>{recipe.title}</h2>
                        <p>{recipe.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListRecipes;