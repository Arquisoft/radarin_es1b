import React from 'react';
import {addUser, updateStatus} from "../../api/api";



class ChangeStatusContainer extends React.Component{
    
    constructor(props) {
      super(props);
      this.webId = props.webId;
      this.status = props.status;
      console.log("Id del usuario a eliminar " + this.webId)
    }


    componentDidMount(){
      updateStatus(this.webId, this.status)
    }
  
    render(){
      return(
            null
      )
    }
  }
  
  export default ChangeStatusContainer