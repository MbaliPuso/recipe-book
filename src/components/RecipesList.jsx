import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import recipeOne from '../assets/spaghetti-bolognese.png';
import recipeTwo from '../assets/chicken-curry.jpg';
import recipeThree from '../assets/margherita-pizza.jpg';
import recipeFour from '../assets/beef-taco.jpg';
import recipeFive from '../assets/stir-fry.jpg';
import recipeSix from '../assets/grilled-salmon.png';


const recipes = [
    {
        title: 'Spaghetti Bolognese',
        description: 'A classic Italian pasta dish with rich meat sauce.',
        ingredients: ['200g Spaghetti', '200g Ground beef', '1 can Tomato sauce', '1 Onion, chopped', '2 cloves garlic, minced', '2 tbsp olive oil'],
        steps: ['1. Cook the spaghetti according to package instructions.', '2. In a pan, cook the ground beef until browned.', '3. Add onions and garlic and sauté until translucent.', '4. Stir in the tomato sauce and simmer for 20 minutes.', '5. Serve the sauce over the cooked spaghetti.'],
        image: recipeOne
    },
    {
        title: 'Chicken Curry',
        description: 'A flavorful and spicy chicken curry.',
        ingredients: ['500g Chicken', '1 can coconut milk', '2 tbsp curry powder', '1 onion, chopped', '3 cloves garlic, minced', '1 tbsp ginger, minced'],
        steps: ['1. Cut the chicken into pieces.', '2. In a pot, sauté onions, garlic, and ginger.', '3. Add the chicken and cook until browned.', '3. Stir in the curry powder and coconut milk', '4. Simmer until chicken is cooked through.'],
        image: recipeTwo
    },
    {
        title: 'Margherita Pizza',
        description: 'A simple yet delicious pizza with fresh tomatoes, mozzarella, and basil.',
        ingredients: ['1 pizza dough', '1/2 cup tomato sauce', '2 cups mozzarella cheese, shredded', '2 tomatoes, sliced', 'Fresh basil leaves', '1 tbsp olive oil', 'Salt and pepper to taste'],
        steps: ['1. Preheat the oven to 220C.', '2. Roll out the pizza dough on a floured surface.', '3. Spread the tomato sauce evenly over the dough.', '4. Top with mozzarella cheese and tomato slices', '5. Drizzle with olive oil and season with salt and pepper.', '6. Bake for 15 - 20 minutes or until the crust is golden and the cheese is bubbly', 'Garnish with fresh basil leaves before serving'],
        image: recipeThree
    },
    {
        title: 'Beef Tacos',
        description: 'Mexican-style tacos with seasoned beef and fresh toppings.',
        ingredients: ['300g ground beef', '1 taco seasoning packet', '8 taco shells', '1 cup shredded lettuce', '1 cup diced tomatoes', '1/2 cup shredded cheese'],
        steps: ['1. Cook the ground beef in a skillet until browned.', '2. Add the taco seasoning and water according to the packet instructions.', '3. Fill the taco shells with the beef mixture.', '4. Top with lettuce, tomatoes, and cheese'],
        image: recipeFour
    },
    {
        title: 'Vegetable Stir-Fry',
        description: 'A quick and healthy stir-fry with a mix of fresh vegetables.',
        ingredients: ['1 bell pepper, sliced', '1 carrot, sliced', '1 broccoli head, cut into florets', '1 cup snap peas', '2 tbsp soy sauce', '1 tbsp olive oil'],
        steps: ['1. Heat olive oil in a large pan or wok.', '2. Add the bell pepper, carrot, broccoli, and snap peas.', '3. Stir-fry until the vegetables are tender-crisp.', '4. Add soy sauce and stir to coat the vegetables.'],
        image: recipeFive
    },
    {
        title: 'Grilled Salmon',
        description: 'A simple and healthy grilled salmon with a lemon garlic sauce.',
        ingredients: ['4 salmon fillets', '2 tbsp olive oil', '2 cloves garlic, minced', 'Juice of 1 lemon', 'Salt and pepper to taste', 'Fresh dill, garnish'],
        steps: ['1. Preheat the grill to medium-high heat.', '2. In a small bowl, mix together the olive oil, garlic, lemon juice, salt, and pepper.', '3. Brush the salmon fillets with the olive oil mixture.', '4. Grill the salmon for 6-8 minutes per side, or until the fish flakes easily with a fork.', '5. Garnish with fresh dill before serving.'],
        image: recipeSix
    }
];

//our data we will be exporting
let data;

const ListRecipes = () => {

      
      const [recipeDisplayData, setData] = useState([
            recipes[0].title,
            recipes[0].description,
            recipes[0].ingredients,
            recipes[0].steps,
            recipes[0].image]);

        console.log(recipeDisplayData)


    return (
        <div>
            <h1>Recipes</h1>
            <div className="container recipes-list">
                <div className='row'>
                {recipes.map((recipe, index) => (
                    <div key={index} className='col-lg-4 col-md-6 mb-4'>
                           <div className='card h-100'>
                              <img src={recipe.image} alt={recipe.title} />
                              <div className='card-body text-center'>
                              <div className='title fw-bold mb-2'>{recipe.title}</div>
                              <div className='fw-bold mb-3'>{recipe.description}</div>
                              <button type="button" className='btn btn-warning d-block m-auto' onClick={() => {setData(
                                    [
                                    recipe.title,
                                    recipe.description,
                                    recipe.ingredients,
                                    recipe.steps,
                                    recipe.image 
                                    ])
                                    
                                    data = recipeDisplayData
                                    
                                    }}>                                         
                              <Link to='/recipe-details'>Recipe Details</Link>
                              </button>
                              </div>
                           </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
};

export default ListRecipes;
export {data};