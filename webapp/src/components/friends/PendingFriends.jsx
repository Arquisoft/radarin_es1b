import React from 'react'
import { getPendingFriends } from '../../api/api';
import List from "@material-ui/core/List";

import Friend from "../friendList/friend";

class PendingFriends extends React.Component {

    constructor(webId) {
        super();
        this.webID = webId;
        this.state = {
            friends: [],
        };
        this.pendingFriend();
    }
    
    pendingFriend(){
        /**
        getPendingFriends(this.webID).then(res => {
            this.setState({ friends: res.slice(0, 1000)});
        })
        */
        this.setState({ friends:[]} );
        console.log(this.state.friends)
        getPendingFriends(this.webID).then((result)=>{
            result.map((e) =>{ 
                this.state.friends.push(e)
            })
           
          });
          console.log("pending")
          console.log(this.state.friends)
          var cons=this.state.friends[0]
          //console.log(cons.toString())
          this.state.friends.forEach(el => console.log(el))

    }
 
    getLIstaItems(){
		//return(
            //<Friend key={"https://uo271288.solidcommunity.net/profile/card#me".toString()} webId={"https://uo271288.solidcommunity.net/profile/card#me"}/>
			this.state.friends.forEach(el => 
                //<Friend key={element.toString()} webId={element}/>
                console.log(el)
				//console.log(webid)
        )
        //)
		
	}
    /**
   	{this.state.friends.forEach(element => 
                <Friend key={element.toString()} webId={element}/>
            )}*/
    render() {
        return (            
            <div>
                <form>
                <List dense>
                {this.getLIstaItems()}
            
                </List> 
                </form>          
            </div>
        );
    }   
}

export default PendingFriends