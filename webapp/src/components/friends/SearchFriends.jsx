import React from 'react'
import { Button } from '@material-ui/core';
import { getUsers, getSEarcUser } from '../../api/api';
import List from "@material-ui/core/List";
import Friend from "../friendList/friend";

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
		this.setState({ searchName: event.target.value });
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

    
    async handleClick(e) {
            e.preventDefault();
            if (this.state.searchName !== "") {
				console.log("searchName")
				console.log(this.state.searchName)
                this.searchOneFriend(this.state.searchName);            
            }
            else{
                this.getUser();
            }

    }
	getLIstaItems(){
		return(
			this.state.friends.map((e) => (
				console.log(e)
			//<Friend key={e.toString()} webId={e}/>
		))
		)
		/**<Friend key={e.toString()} webId={e}/>*/
	}


	searchOneFriend(webId) {
        //api para buscar la persona
		let aux=[];
		console.log(getSEarcUser(webId))
		getSEarcUser(webId).then((result)=>{
            result.map((e) =>{ 
				aux.push(e)
            })
           
          });
		  console.log("ITEMS : ",aux)
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


    render() {
		return (
			<div>
				<h1>BuscarAmigos</h1>
			      {this.searchFriends()}
			    <hr />
				{console.log("search")}
				{console.log(this.state.friends)}
				<div>
				<List dense>
                {this.getLIstaItems()}
				</List>
				</div>
				
				
          
            </div> 
		);
	}



}
export default SearchFriends;