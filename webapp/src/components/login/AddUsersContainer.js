import React from 'react';
import {addUser} from "../../api/api";



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
              Console.log("Error adding users to restapi.")
           }
      }

    componentDidMount(){this.fetchUsers()}
  
    render(){
      return(
            null
      )
    }
  }
  
  export default AddUsersContainer