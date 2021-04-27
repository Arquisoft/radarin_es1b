import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './components/AppBar';
import { LocationsContextProvider } from './context/LocationsContext';

import * as qs from 'query-string';
import CssBaseline from '@material-ui/core/CssBaseline';
import Profile from './components/profile';
import Delete from './components/delete';
import NavBar from './components/NavBar';
import { LoggedIn } from '@solid/react';
import {getSearcByAdmin} from './api/api'

class App extends React.Component {
  constructor() {
    super()
    /* array para almacenar los usuarios conectados*/ 
    this.resultQuery = []
    this.querySuccess=false;
    this.state = {
      users: []
    }
   
  }
  
  static defaultProps = {
    users: [], // Lista de todas los amigos que se mostrarán.
    height: 300,
    showInitially: 10, // Número de amigos para mostrar inicialmente
  };

    async fetchData() {
      var promise = getSearcByAdmin()
      this.querySuccess=false;
      this.resultQuery=[]
      promise.then((result) => {
        this.resultQuery=[]
        result.forEach((e) => {
        this.resultQuery.push(e)
        })
  
        this.querySuccess=true;
        this.forceUpdate()
        this.render() 
      })
      }

      componentDidMount(){

        this.fetchData();

      }


  render() {

    return (

      <div className="App">
        <LocationsContextProvider>
          <CssBaseline />
          <Router>
            {/*Router conjunto de componentes de navegación  */}
            {/* <header className="App-header">  */}
            {/* <AppHeader/> */}
            {/* </header>  */}
            <AppBar />
            <main>      
              {/*Route, enlace a la ruta indica que en StartPage en la direcion / se vera el contenido de la clase StartPage  */}
              {/* <Route exact path="/" component={StartPage}/>  */}
              {/* location es la localizacion donde se encuentra la app y sirve para almacenar donde quieras ir, en este caso si queremos ir a /profile le tenemos que pasar lo que quiere mostrar mediante la llamada a la IU Profile*/}
              {/* En webId lo que le pasa en la direccion del perfil de solid */}
              <LoggedIn>
                <Route path="/profile/" render={({ location }) => {
                  const params = qs.parse(location.search);
                  //SaveWebId(params.webId)
                  return <Profile webId={params.webId} />
                }} />

                <Route path="/delete/" render={({ location }) => {
                  const params = qs.parse(location.search);
                  //SaveWebId(params.webId)
                  return <Delete webId={params.webId} />
                }} />

              </LoggedIn> 
            </main>
            {console.log(this.resultQuery)}
            {this.resultQuery.length>0 ?  <NavBar adminUser= {this.resultQuery}/>:  <NavBar adminUser= {this.resultQuery}/>}
           
          </Router>
        </LocationsContextProvider>
      </div>

    )
  }




}

export default App;