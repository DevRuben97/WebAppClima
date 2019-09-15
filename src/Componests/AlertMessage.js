import React from 'react';


const Alert= (props)=>{
    return (
        <div className="container">
            <div className="alert alert-danger"><i class="fas fa-times"></i> {props.Message}</div>
        </div>
    )
}

export default Alert;