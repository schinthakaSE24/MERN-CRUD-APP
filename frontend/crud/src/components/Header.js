import React from 'react';
import {Link} from "react-router-dom";


function Header() {
    return (
    <div className='header'>
    <div className='header-right'>
            <Link to="/"> 
            <p className= 'dff'>Home</p>
            
             </Link>

             <Link to="/create"> 
            <p className= 'nuhd'>Create</p>
            
             </Link>
        </div>

    </div>
   
    );
}

export default Header;