import React, {useState,useEffect} from 'react';
import Header from './Header';
import Form from './Form';
import Clima from './Clima';
import '../Styles/index.css';


const App= (props)=>{

  const [ClimaData, SetClima]= useState({
    Busqueda: {},
    Resultado: {},
    SearchSuccess: false
  })

  const RealizarBusqueda= Data=>{
    SetClima({
      Busqueda: Data
    });
    const { Ciudad, Pais } = Data;
    if (Ciudad !== null && Pais !== null) {
      //Realizar la consulta al API
      const AppID = "1f0a12e742f99cb53986dcc4ba9f1aa6";
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${Ciudad},${Pais}&lang=es&appid=${AppID}`;

      //consultar la api
      fetch(url)
        .then(Response => {
          return Response.json();
        })
        .then(json => {
          SetClima({
            Resultado: json,
            SearchSuccess: true
          });
        })
        .catch(error => console.log(error));
    }
  }

  const ShowClima= ()=>{
    if (ClimaData.SearchSuccess){
      return (
        <Clima Datos={ClimaData.Resultado}></Clima>
      )
    }
  }

  return (
    <div>
      <Header Title="Consulta el Clima v1.0"></Header>
      <Form RealizarBusqueda= {RealizarBusqueda}></Form>
      <br/>
      {ShowClima()}
    </div>
  )
}
  

export default App;
