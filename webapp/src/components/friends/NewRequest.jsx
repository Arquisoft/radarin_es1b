import React from 'react'
import { getTargetFriends } from '../../api/api';
import ListRe from './ListRe';


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
      
        let au=[];
        getTargetFriends(this.webID).then((result)=>{
            result.map((e) =>{ 
                au.push(e)
            })
           
          });
          this.setState({ friends:au});
    }

    render() {
        return (
            <div>
                {console.log("reque")}
				{console.log(this.state.friends)}
                <ListRe friends={ this.state.friends} webId={this.webID}/>
            </div>
        );
    }   
}
export default NewRequest
