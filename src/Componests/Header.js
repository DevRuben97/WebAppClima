import React from 'react';


const Header= props=>{
    return (
        <div>
        <nav className="navbar bg-primary">
             <a className="navbar-brand mx-auto text-white" ><i className="fas fa-cloud"></i> {props.Title}</a>
        </nav>
    </div>
    )
}

export default Header;