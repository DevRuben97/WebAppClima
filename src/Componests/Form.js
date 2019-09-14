import React,{Component} from 'react';

class Form extends Component{

    constructor(props){
        super(props)
        this.PaisRef= React.createRef();
        this.CiudadRef= React.createRef();
        this.state= {
            HasErros: false
        }
    }

    BuscarClima= (event)=>{
        event.preventDefault();
        
        //Leer los datos para despues enviarlos por props:
        if (this.ValidarDatos()){
            //Crear el objeto:
            const SearchData= {
                Ciudad: this.CiudadRef.current.value,
                Pais: this.PaisRef.current.value
            }
            this.props.RealizarBusqueda(SearchData);
        }
        else{
            this.setState({
                HasErros: true
            })
        }
    }
    ValidarDatos=()=>{
        if (this.PaisRef.current.value!== '' && this.CiudadRef.current.value!== ''){
            return true;
        }
        else{
            return false;
        }
    }
    ShowErrorAlert= ()=>{
        if (this.state.HasErros){
            setTimeout(()=>{
                this.setState({
                    HasErros: false
                })
            },10000)
            return (
                <div className="container">
                    <div className="alert alert-danger"><i class="fas fa-times"></i> Debes Ingresar los datos requeridos</div>
                </div>
            )
        }
    }


    render(){
        return (
          <div className="contenedor-form">
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <label style={{color: 'white'}}>Ciudad</label>
                        <input className="form-control" style={{color: 'white'}} type="text" placeholder="Escribe tu ciudad" ref={this.CiudadRef}/>
                    </div>
                    <div className="col-sm">
                        <label style={{color: 'white'}}>Pais</label>
                        <select className="form-control" style={{color: 'white'}} ref={this.PaisRef}>
                            <option value="" style={{color: 'black'}} defaultValue>--Seleccione--</option>
                            <option value="DO" style={{color: 'black'}}>Republica Dominicana</option>
                            <option value="MX" style={{color: 'black'}}>Mexico</option>
                            <option value="CO" style={{color: 'black'}}>Colombia</option>
                            <option value="US" style={{color: 'black'}}>Estados Unidos</option>
                            <option value="PE" style={{color: 'black'}}>Peru</option>
                        </select>
                    </div>
                    <div className="col-sm">
                        <button className="btn btn-success" onClick={this.BuscarClima}><i className="fas fa-check"></i> Buscar Estado</button>
                    </div>
                </div>
                <br/>
                <br/>
                {this.ShowErrorAlert()}
            </div>
          </div>
        )
    }
}

export default Form;