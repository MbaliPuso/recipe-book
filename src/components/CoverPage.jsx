import React from 'react';
import '../styles.css'
import { Link } from 'react-router-dom';
import cover from '../assets/coverpage.png';

const CoverPage = () => {
    const coverStyle = {
        backgroundImage: `url(${cover})`,
    };

    return (
        <div className='cover-image' style={coverStyle}>
            <div className='container'>
            <Link to="/list-recipes" className='list-recipes-link'>See Recipes</Link>
            </div>
        </div>
    );
};

export default CoverPage;