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
                var aux=String(e)
                this.state.friends.push(aux)
            })
           
          });
          console.log("pending")
          console.log(this.state.friends)
         
          

    }
   
    getLIstaItems(){
		//return(
            const myArrMadeFromForEach = []; 
            this.state.friends.forEach((item, i) => console.log({item}));
			//this.state.friends.forEach(el => 
                //<Friend key={element.toString()} webId={element}/>
                //console.log(el)<Friend key={item.toString()} webId={item}/>
        
               //)
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