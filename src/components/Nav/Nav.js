import React from 'react';
import './Nav.css'

const Nav = () => {
    return (
        <div className='nav'>
            <div className='logo'>
                <p><span className='logoStyil'>D</span>elicious <span className='logoStyil'>f</span>ood</p>
            </div>
            <div className='a'>
                <a href="/">Home</a>
                <a href="/abuot">Abuot</a>
                <a href="/food">food</a>
            </div>
        </div>
    );
};

export default Nav;