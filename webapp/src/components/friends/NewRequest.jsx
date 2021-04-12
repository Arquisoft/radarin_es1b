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
        /**
        getTargetFriends(this.webID).then(data => {
            var tmpArray = []
            for (var i = 0; i < data.results.length; i++) {
                tmpArray.push(data.results[i].requester)
            }
            this.setState({
                friends: tmpArray
            })
        });
        */
        getTargetFriends(this.webID).then(res => {
            this.setState({ friends: res.slice(0, res.length)});
        })
    }

    render() {
        return (
            <div>
            <ListRe friends={ this.state.friends} webId={this.webID}/>;
            </div>
        );
    }   
}
export default NewRequest
