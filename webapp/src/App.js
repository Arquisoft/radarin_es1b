import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppBar from './components/AppBar';
import * as qs from 'query-string';
import CssBaseline from '@material-ui/core/CssBaseline';
import Profile from './components/profile';
import NavBar from './components/NavBar';
import { LoggedIn} from '@solid/react';
import {getSearcByAdmin, getSearcByBan} from './api/api'


require("leaflet-easybutton");

class App extends React.Component {
  constructor() {
    super()
    /* array para almacenar los usuarios conectados*/ 
    this.resultQuery = []
    this.resultBan = []
    this.resultOnline = []
    this.querySuccess=false;
    this.status = false;
   
  }

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

      async fetchBan() {
        var promise = getSearcByBan()
        this.querySuccess=false;
        this.resultBan=[]
        promise.then((result) => {
          this.resultBan=[]
          result.forEach((e) => {
          this.resultBan.push(e)
          })
    
          this.querySuccess=true;
          this.forceUpdate()
          this.render() 
        })
        }


      componentDidMount(){

        this.fetchData();
        this.fetchBan();

      }
    
       


  render() {

    return (

      <div className="App">
          <CssBaseline />
          <Router paht="/#/*">
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
            </LoggedIn> 
          </main>
          <NavBar adminUser= {this.resultQuery} banUser = {this.resultBan} />
           
        </Router>

        {/*<MeetCreationDialog/>*/}
      </div>

    )
  }

}

export default App;