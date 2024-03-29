import React,{useState} from 'react';
import Alert from './AlertMessage'
import PropTypes from 'prop-types';

const Form= (props)=>{

    const [FormHasErros, SetFormError]= useState(false);
    const [Busqueda, SetBusqueda]= useState({
        Ciudad: '',
        Pais: ''
    });


    const BuscarClima= (event)=>{
        event.preventDefault();
        
        //Leer los datos para despues enviarlos por props:
        if (ValidarDatos()){
            //Crear el objeto:
            const SearchData= {
                Ciudad: Busqueda.Ciudad,
                Pais: Busqueda.Pais
            };
            props.RealizarBusqueda(SearchData);
        }
        else{
            SetFormError(true)
        }
    }

    const HandleChange= event=>{
        //Setear el state de pais y ciudad:
       SetBusqueda({
           ...Busqueda,
           [event.target.name]: event.target.value
       })
       console.log(Busqueda);
    }
    const ShowErrorAlert= ()=>{
        if (FormHasErros){
            setTimeout(()=>{
                SetFormError(false)
            },10000)
           return (
               <Alert Message="Debes Ingresar los datos requeridos"></Alert>
           )
        }
    }

    const ValidarDatos=()=>{
        return Busqueda.Pais!== '' && Busqueda.Ciudad!== ''? true: false
    }
    return (
        <div className="contenedor-form">
          <div className="container">
              <div className="row">
                  <div className="col-sm">
                      <label style={{color: 'white'}}>Ciudad</label>
                      <input className="form-control" style={{color: 'white'}} name="Ciudad" type="text" placeholder="Escribe tu ciudad" onChange={HandleChange}/>
                  </div>
                  <div className="col-sm">
                      <label style={{color: 'white'}}>Pais</label>
                      <select className="form-control" style={{color: 'white'}} onChange={HandleChange} name="Pais">
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