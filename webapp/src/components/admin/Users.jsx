import React from 'react'
import UsersAutomaticScrollButtons from './UsersAutomaticTabs'

class Users extends React.Component{

    constructor(props){
        super(props)
        this.webId = this.props.webId;
    }

    render(){
        return (
            <div>
                <h1></h1>
                <div class="contenedorFriends">
                    <UsersAutomaticScrollButtons webId={this.webId}/>
                </div>
            </div>
        )
    }
}


export default Users