import React from 'react'
import Chat from './chat/Chat'
import FriendsTabs from './FriendsTabs'



class Friends extends React.Component{

    constructor(props){
        super(props)
        this.webId=props.webId
        this.state={
            isToggled: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            isToggled: !prevState.isToggled
          }));
    }

    render(){
        return (
            <div>
                <h1>Amigos</h1>
                {this.state.isToggled?
                    <button onClick={this.handleClick} aria-label="CHAT" >CHAT</button>
                :
                    <button onClick={this.handleClick} aria-label="ATRÁS" >ATRÁS</button>
                }
                {this.state.isToggled?
                    <div class="contenedorFriends">
                        <FriendsTabs webId={this.webId}/>
                    </div>
                :
                    <div >
                        <Chat webId={this.webId}/>
                    </div>
                }
            </div>
        )
    }
}


export default Friends