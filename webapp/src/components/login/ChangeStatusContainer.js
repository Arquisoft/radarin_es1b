import React from 'react';
import {updateLastTime, updateStatus} from "../../api/api";



class ChangeStatusContainer extends React.Component{
    
    constructor(props) {
      super(props);
      this.webId = props.webId;
      this.status = props.status;
      this.hora = props.hora;
      console.log("uskdnjsad " + this.hola)
    }

    idleLogout(webId) {
    
      var web = webId
      yourFunction();
  
      function yourFunction() {

          window.beforeUnload = function(e) {
            updateStatus(web, "offline")
          };
         
      }
     
  }

  
    componentDidMount(){
       //EXTRAER LA HORA ACTUAL
      
       const tiempoTranscurrido = Date.now();
       const hoy = new Date(tiempoTranscurrido);

       if(this.hora == "true"){
          updateLastTime(this.webId, hoy );
       }
      updateStatus(this.webId, this.status)
      if(this.status=="online"){
        console.log("WEBID " + this.webId)
        this.idleLogout(this.webId);
       
      }
    }
  
    render(){
      return(
            null
      )
    }
  }
  
  export default ChangeStatusContainer