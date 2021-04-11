import React from 'react';
import {addUser} from "../../api/api";
import { useLDflexValue, useWebId } from "@solid/react";


async function Name(props) {
     
    let webId = props.webId;
    let fullName = useLDflexValue(`[${webId}].name`);
    return fullName;
}

class AddUsersContainer extends React.Component{
    
    constructor(props) {
      super(props);
      this.webId = props.webId;
      this.fullName = props.fullName;
      console.log("WebId " + this.webId);
      console.log("nombre " + this.fullName);
      this.fetchUsers();
    }


    async fetchUsers(){
          try {
              const resp = await addUser(this.webId,this.fullName);
              console.log(resp);
              console.log("Hago la llamada")
          
          } catch (e) {
              console.log("Error adding users to restapi.")
           }
      }
  
    render(){
      return(
            <h1></h1>
      )
    }
  }
  
  export default AddUsersContainer