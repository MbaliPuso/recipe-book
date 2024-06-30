import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoverPage from './components/CoverPage';
import ListRecipes from './components/ListRecipes';

function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<CoverPage />} />
        <Route path='/link-recipes' element={<ListRecipes />} />
       </Routes>
    </BrowserRouter>
  );
};

export default App;
