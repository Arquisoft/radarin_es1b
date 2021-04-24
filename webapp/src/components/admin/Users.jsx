import React from 'react'
import UsersTabs from './UsersTabs'



class Users extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1>Gestión de usuarios</h1>
                <div class="contenedorFriends">
                    <UsersTabs webId={this.webId}/>
                </div>
            </div>
        )
    }
}


export default Users