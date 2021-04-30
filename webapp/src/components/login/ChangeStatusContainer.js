import React from 'react';
import {addUser, updateStatus} from "../../api/api";



class ChangeStatusContainer extends React.Component{
    
    constructor(props) {
      super(props);
      this.webId = props.webId;
      this.status = props.status;
    }

    idleLogout(webId) {
      var t;
      var web = webId
      window.onload = resetTimer;
      window.onmousemove = resetTimer;
      window.onmousedown = resetTimer;  // catches touchscreen presses as well      
      window.ontouchstart = resetTimer; // catches touchscreen swipes as well 
      window.onclick = resetTimer;      // catches touchpad clicks as well
      window.onkeypress = resetTimer;   
      window.addEventListener('scroll', resetTimer, true); // improved; see comments
  
      function yourFunction() {
          // your function for too long inactivity goes here
          // e.g. window.location.href = 'logout.php';
          //alert("¿ Sigue usted ahi ?, refresque su página para continuar")
          console.log("actualizo a offline el usuario " + web)
          
          window.onpagehide = function() {
            updateStatus(web, "offline")
          };
         window.onbeforeunload = function(e) {
            updateStatus(web, "offline")
          };
          window.onunload = function(e) {
            updateStatus(web, "offline")
          };
         
      }
  
      function resetTimer() {
          clearTimeout(t);
          t = setTimeout(yourFunction, 10000);  // time is in milliseconds
          console.log("TIEMPO " + t)
      }
  }


    componentDidMount(){
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