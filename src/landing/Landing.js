import React from 'react';

import logo from '../saluna-logo.png';
import moon from '../saluna-moon.png';
import sun from '../saluna-sun.png';

const Landing = ({handleClick}) => {
    return (
        <div id="landing" className="landing-wrapper">
            <img src={moon} className="moon-logo" alt="moon" />
            <img src={sun} className="sun-logo" alt="sun" />
            <p className ="App-title">
                SOLUNA
            </p>
            <button 
                type="button" 
                className ="btn btn-enter" 
                onClick={()=>handleClick()}
                >
                ENTER
            </button>
        </div>
    )
}

export default Landing;