import React from 'react'
import { getPendingFriends } from '../../api/api';
import List from './List';


class PendingFriends extends React.Component {

    constructor(webId) {
        super();
        this.webID = webId;
        this.state = {
            friends: [],
        };
        this.getPendingFriend();
    }
    
    getPendingFriend(){
        getPendingFriends(this.webID).then(res => {
            this.setState({ friends: res.slice(0, res.length)});
        })
        console.log(this.state.friends)
    }

    render() {
        return (
            <div>
            <List friends={ this.state.friends}/>;
            </div>
        );
    }   
}

export default PendingFriends