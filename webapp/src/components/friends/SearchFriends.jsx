import React from 'react'
import { Button } from '@material-ui/core';
import { getUsers } from '../../api/api';
import List from './List'
class SearchFriends extends React.Component {

    constructor( webId) {
		super();
		this.webID = webId;
		//pasar json a lista
        this.friends=getUsers();
		this.state = {
			searchName: "",
			friends: []
		};
		this.getUser();
		this.handleChange = this.handleChange.bind(this);
	}

	getUser(){
		getUsers().then(res => {
            this.setState({ friends: res.slice(0, 10)});
        });
	}

    handleChange(event) {
		this.setState({ friendWebID: event.target.value });
	}

    searchFriends() {
		return (
			<div>
				<form>
					<label>
                        Busca un amigo:
						<input
							id="friendID"
							type="text"
							name="friendId"
							onChange={this.handleChange}
						/>

						<Button id="searchFriends" type="button" onClick={(e) => this.handleClick(e)}>
							Buscar
						</Button>
					</label>
				</form>
            </div>
		);
    }

    searchOneFriend(webId, friendsearch) {
        //api para buscar la persona
		
		//convertir a arryy
		/**
		 * ().then(res => {
            this.setState({ friends: res.slice(0, res.length)});
        });
		*/
		

    }

    

    getLista(){
        <List friends={this.state.friends} />
    }

    async handleClick(e) {
            e.preventDefault();
            if (this.state.friendName !== "") {
                this.searchOneFriend(this.webID, this.state.searchName);            
            }
            else{
                this.getUser();
            }
    }

    render() {
		return (
			<div>
				<h1>BuscarAmigos</h1>
			      {this.searchFriends()}
			    <hr />
                    {this.getLista()}
            </div> 
		);
	}



}
export default SearchFriends;