import React from 'react'
import FriendsTabs from './FriendsTabs'



class Friends extends React.Component{

    constructor(props){
        super(props)
        this.webId=props.webId
    }

    render(){
        return (
            <div>
                <h1>Amigos</h1>
                <p>To be done: Vista para buscar usuarios</p>
                <div class="contenedorFriends">
                    <FriendsTabs webId={this.webId}/>
                </div>
            </div>
        )
    }
}


export default Friends