import React from 'react'
import FriendsTabs from './FriendsTabs'
import {updateLastTime} from '../../api/api'


class Friends extends React.Component{

    constructor(props){
        super(props)
        this.webId=props.webId
    }

    componentDidMount(){

        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);
    
        updateLastTime(this.webId, hoy );
    }

    render(){
        return (
            <div class="contenedorFriends">
                        <FriendsTabs webId={this.webId}/>
                    </div>
        )
    }
}


export default Friends