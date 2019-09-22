import React from 'react';
import PropTypes from 'prop-types';

const Header= props=>{
    return (
        <div>
        <nav className="navbar bg-primary">
             <a className="navbar-brand mx-auto text-white" ><i className="fas fa-cloud"></i> {props.Title}</a>
        </nav>
    </div>
    )
}

Header.propTypes={
    Title: PropTypes.string.isRequired
}
export default Header;