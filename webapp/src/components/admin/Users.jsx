import React from 'react'
import UsersAutomaticScrollButtons from './UsersAutomaticTabs'



class Users extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1>Gestión de usuarios</h1>
                <div class="contenedorFriends">
                    <UsersAutomaticScrollButtons webId={this.webId}/>
                </div>
            </div>
        )
    }
}


export default Users