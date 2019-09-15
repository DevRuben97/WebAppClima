import React from 'react';
import Header from './Header';
import Form from './Form';
import Clima from './Clima';
import '../Styles/index.css';
class App extends React.Component{


  state=  {
    Busqueda: {},
    Resultado: {},
    SearchSuccess: false
  }

  RealizarBusqueda= (Data)=>{
      this.setState({
        Busqueda: Data,
      })
      const {Ciudad, Pais}= Data;
    if (Ciudad!== null && Pais!== null){
      
      //Realizar la consulta al API
      const AppID= '1f0a12e742f99cb53986dcc4ba9f1aa6';
      let url= `https://api.openweathermap.org/data/2.5/weather?q=${Ciudad},${Pais}&lang=es&appid=${AppID}`;
      
      //consultar la api
      fetch(url).then((Response)=>{
        return Response.json();
      }).then(json=>{
        this.setState({
          Resultado: json,
          SearchSuccess: true
        })
      })
      .catch(error=> console.log(error));
    }
  }

  ShowClima= ()=>{
      if (this.state.SearchSuccess){
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
        {this.ShowClima()}
      </div>
    )
  }

}

export default App;
