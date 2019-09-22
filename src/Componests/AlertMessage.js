import React from 'react';
import PropTypes from 'prop-types';

const Alert= (props)=>{
    return (
        <div className="container">
            <div className="alert alert-danger"><i class="fas fa-times"></i> {props.Message}</div>
        </div>
    )
}

Alert.propTypes= {
    Message: PropTypes.string.isRequired
}
export default Alert;