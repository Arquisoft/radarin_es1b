import React from 'react'
import { Button } from '@material-ui/core';
import { getUsers } from '../../api/api';
import List from './List'

import Typography from "@material-ui/core/Typography";
import Grid from '@material-ui/core/Grid';
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
		let au=[];
        getUsers().then((result)=>{
            result.map((e) =>{ 
                au.push(e)
            })
           
          });
		  
		  this.setState({ friends:au});
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
		 * let au=[];
        let aux = getUsers().then((result)=>{
            result.map((e) =>{ 
                au.push(e)
            })
           
          });
		  
        this.state.friends=au;
		console.log("user")
		console.log(this.state.friends)
        });
		*/
		

    }

    

    getLista(){
        
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
			<Grid container
				spacing={2}
				direction="row"
				justify="flex-start"
				alignItems="center">
				<Grid item xs={12} md={2}>
					<h1>BuscarAmigos</h1>
					{this.searchFriends()}
	
			</Grid>   
				<Grid>
					{console.log("search")}
					{console.log(this.state.friends)}
					<List friends={this.state.friends} />
				</Grid> 
			</Grid>
		);
	}



}
export default SearchFriends;