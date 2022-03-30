import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='headerBody'>
            <div className='header'>
                <h1> <span className='styil'>D</span>elicious <span className='styil'>F</span>ood</h1>
                <input type="text" placeholder='Search Food' />
                <button>Search Food</button>
            </div>
        </div>
    );
};

export default Header;