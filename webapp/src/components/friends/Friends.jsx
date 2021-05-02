import React from 'react'
import Chat from './chat/Chat'
import FriendsTabs from './FriendsTabs'
import ChatIcon from '@material-ui/icons/Chat';
import {updateLastTime} from '../../api/api'


class Friends extends React.Component{

    constructor(props){
        super(props)
        this.webId=props.webId
        this.state={
            isToggled: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){

        const tiempoTranscurrido = Date.now();
        const hoy = new Date(tiempoTranscurrido);
    
        updateLastTime(this.webId, hoy );
    }

    handleClick() {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
          }));
    }

    render(){
        return (
            <div>
                {this.state.isToggled?
                    <ChatIcon onClick={this.handleClick}  aria-label="CHAT"/>
                :
                    null
                }
                {this.state.isToggled?
                    <div class="contenedorFriends">
                        <FriendsTabs webId={this.webId}/>
                    </div>
                :
                    <div class="contenedorFriends">
                        <Chat 
                            webId={this.webId}
                            backFunc={this.handleClick}
                            />
                    </div>
                }
            </div>
        )
    }
}


export default Friends