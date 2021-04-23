import React from 'react'
import Chat from './chat/Chat'
import Messages from './chat/Messages'
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
                {this.state.isToggled?
                    <button onClick={this.handleClick}  aria-label="CHAT" >CHAT</button>
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