import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoverPage from './components/CoverPage';
import RecipesList from './components/RecipesList';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<CoverPage />} />
        <Route path='/list-recipes' element={<RecipesList />} />
        <Route path='/recipe-details' element={<RecipeDetails />} />
       </Routes>
    </BrowserRouter>
  );
};

export default App;
