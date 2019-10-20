import React from 'react';
import Alert from './AlertMessage';
import PropTypes from 'prop-types';


function Clima(props){

    if (props.Datos.main!= null){
        const { name, main, weather } = props.Datos;
        const TempImage = `http://openweathermap.org/img/wn/${weather[0].icon}.png`
        return (
            <div className="container">
                <div className="card text-center border-primary" style={{ width: '50%' }}>
                    <div className="card-body">
                        <h5 className="card-title">Mostrando el clima actual de: {name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Temperatura Actual: {ConvertToCelcius(main.temp)}&deg;C <img src={TempImage} /></h6>
                        <h6 className="card-subtitle mb-2 text-muted">Temperatura Maxima: {ConvertToCelcius(main.temp_max)}&deg;C</h6>
                        <h6 className="card-subtitle mb-2 text-muted">Temperatura Minima: {ConvertToCelcius(main.temp_min)}&deg;C</h6>
                        <p className="card-text">{weather[0].description}</p>
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="container">
                <Alert Message="No se ha Encontrado ningun resultado. Intente otra vez."></Alert>
            </div>
        )
    }
}
function ConvertToCelcius(KelvinValue){
    return (KelvinValue - 273.15).toFixed(2);
}

Clima.propTypes= {
    Datos: PropTypes.object.isRequired
}
export default Clima;