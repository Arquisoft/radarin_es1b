import React from 'react';
import {addUser, updateStatus} from "../../api/api";



class AddUsersContainer extends React.Component{
    
    constructor(props) {
      super(props);
      this.webId = props.webId;
      this.fullName = props.fullName;
    }

    

    async fetchUsers(){
          try {
              await addUser(this.webId,this.fullName);
  

          } catch (e) {
              //console.log("Error adding users to restapi.")
           }
      }

    componentDidMount(){
      this.fetchUsers()
      //updateStatus(this.webId, "online")
    }
  
    render(){
      return(
            null
      )
    }
  }
  
  export default AddUsersContainer