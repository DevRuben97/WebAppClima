import React,{useState} from 'react';
import Alert from './AlertMessage'
import PropTypes from 'prop-types';

        let PaisRef = React.createRef();
        let CiudadRef = React.createRef();

const Form= (props)=>{

    const [FormStatus, SetStatus]= useState({
        HasErros: false
    })


    const BuscarClima= (event)=>{
        event.preventDefault();
        
        //Leer los datos para despues enviarlos por props:
        if (ValidarDatos()){
            //Crear el objeto:
            const SearchData= {
                Ciudad: CiudadRef.current.value,
                Pais: PaisRef.current.value
            }
            props.RealizarBusqueda(SearchData);
        }
        else{
            SetStatus({
                HasErros: true
            })
        }
    }

    const ShowErrorAlert= ()=>{
        if (FormStatus.HasErros){
            setTimeout(()=>{
                SetStatus({
                    HasErros: false
                })
            },10000)
           return (
               <Alert Message="Debes Ingresar los datos requeridos"></Alert>
           )
        }
    }

    const ValidarDatos=()=>{
        if (PaisRef.current.value!== '' && CiudadRef.current.value!== ''){
            return true;
        }
        else{
            return false;
        }
    }
    return (
        <div className="contenedor-form">
          <div className="container">
              <div className="row">
                  <div className="col-sm">
                      <label style={{color: 'white'}}>Ciudad</label>
                      <input className="form-control" style={{color: 'white'}} type="text" placeholder="Escribe tu ciudad" ref={CiudadRef}/>
                  </div>
                  <div className="col-sm">
                      <label style={{color: 'white'}}>Pais</label>
                      <select className="form-control" style={{color: 'white'}} ref={PaisRef}>
                          <option value="" style={{color: 'black'}} defaultValue>--Seleccione--</option>
                          <option value="DO" style={{color: 'black'}}>Republica Dominicana</option>
                          <option value="MX" style={{color: 'black'}}>Mexico</option>
                          <option value="CO" style={{color: 'black'}}>Colombia</option>
                          <option value="US" style={{color: 'black'}}>Estados Unidos</option>
                          <option value="PE" style={{color: 'black'}}>Peru</option>
                      </select>
                  </div>
                  <div className="col-sm">
                      <button className="btn btn-success" onClick={BuscarClima}><i className="fas fa-check"></i> Buscar Estado</button>
                  </div>
              </div>
              <br/>
              <br/>
              {ShowErrorAlert()}
          </div>
        </div>
      )
}




Form.propTypes= {
    RealizarBusqueda: PropTypes.func.isRequired
}
export default Form;