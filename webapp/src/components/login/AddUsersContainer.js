import React from 'react';
import {addUser} from "../../api/api";



class AddUsersContainer extends React.Component{
    
    constructor(props) {
      super(props);
      this.webId = props.webId;
      this.fullName = props.fullName;
      console.log("WebId " + this.webId);
      console.log("nombre " + this.fullName);
    }

    async fetchUsers(){
          try {
              const resp = await addUser(this.webId,this.fullName);

          } catch (e) {
              console.log("Error adding users to restapi.")
           }
      }

    componentDidMount(){this.fetchUsers()}
  
    render(){
      return(
            <h1></h1>
      )
    }
  }
  
  export default AddUsersContainer