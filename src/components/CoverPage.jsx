import React from 'react';
import { Link } from 'react-router-dom';
import cover from '../assets/cookbook-coverpage.png';

const CoverPage = () => {
    const coverStyle = {
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${cover})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',

    };

    return (
        <div style={coverStyle}>
            <button className='next-page-button'><Link to="/list-recipes">Next Page</Link></button>
        </div>
    );
};

export default CoverPage;