import React from 'react'
import Chat from './chat/Chat'
import FriendsTabs from './FriendsTabs'
import ChatIcon from '@material-ui/icons/Chat';


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