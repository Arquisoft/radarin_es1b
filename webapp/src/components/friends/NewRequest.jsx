import React from 'react'
import { getTargetFriends } from '../../api/api';
import List from "@material-ui/core/List";

import Target from "./Target";


class NewRequest extends React.Component {
    constructor(webId) {
        super();
        this.webID = webId;
        this.state = {
            friends: [],
        };
        this.getNewRequ();
    }

    getNewRequ(){
      
        
        getTargetFriends(this.webID).then((result)=>{
            result.map((e) =>{ 
                this.state.friends.push(e)
            })
           
          });
    }

    render() {
        return (
            <div>
                {console.log("reque")}
				{console.log(this.state.friends)}
                <List dense>
                {this.state.friends.map((e) => (
                <Target key={e.toString()} webId={e}/>
            ))}
            </List>
            </div>
        );
    }   
}
export default NewRequest
