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
                <h1>Amigoos</h1>
                <p>To be done: Vista para buscar usuarios</p>
                <FriendsTabs webId={this.webId}/>         
            </div>
        )
    }
}


export default Friends