import React from 'react';
import Header from './Header';
import Form from './Form';
import Clima from './Clima';
import '../Styles/index.css';
class App extends React.Component{


  state=  {
    Busqueda: {},
    Resultado: {}
  }

  RealizarBusqueda= (Data)=>{
      this.setState({
        Busqueda: Data,
      })
  }
  componentDidUpdate(){
    const {Ciudad, Pais}= this.state.Busqueda;

    if (Ciudad!== null && Pais!== null){
      //Realizar la consulta al API
      const AppID= '1f0a12e742f99cb53986dcc4ba9f1aa6';
      let url= `https://api.openweathermap.org/data/2.5/weather?q=${Ciudad},${Pais}&appid=${AppID}`;
      
      //consultar la api
      fetch(url).then((Response)=>{
        return Response.json();
      }).then(json=>{
        this.setState({
          Resultado: json
        })
      })
      .catch(error=> console.log(error));
      
    }
  }

  ShowClima= ()=>{
      if (this.state.Resultado){
        return (
          <Clima Datos={this.state.Resultado}></Clima>
        )
      }
  }
  render(){
    return (
      <div>
        <Header Title="Consulta el Clima"></Header>
        <Form RealizarBusqueda= {this.RealizarBusqueda}></Form>
        <br/>
      </div>
    )
  }

}

export default App;
