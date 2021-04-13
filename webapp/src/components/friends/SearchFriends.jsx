import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import List from "@material-ui/core/List";
import { Button } from '@material-ui/core';


import Friend from "../friendList/friend";
import Typography from "@material-ui/core/Typography";

import {  getUsers, getSearcUser } from '../../api/api';

class SearchFriends extends React.Component {
    constructor(props) {
        super(props)
        this.friendList = []
        //this.searchName= "";
        this.list="users";
        this.logged=this.props.webId;
        this.fetchData();
        this.handleChange = this.handleChange.bind(this);
    }

    static defaultProps = {
        friends: [], // Lista de todas los amigos que se mostrarán.
        height: 300,
        showInitially: 10, // Número de amigos para mostrar inicialmente
        fetchCount: 5 // número de amigos para buscar a la vez, al desplazarse por la lista
      };

    state = {
        items: this.props.friends.slice(0, this.props.showInitially), //crea un array de amigos de 0 a el valor de showInitially
        hasMore: this.props.friends.length > this.props.showInitially, // Indica que tenemos mas amigos de los que se pueden monstrar inicialmente
        searchName:""
    };
    async fetchData() {
        if (this.list=="users"){
        var promise = getUsers()
        promise.then((result) => {
            result.map((e) => {
              this.friendList.push(e.webId)
            })
            this.forceUpdate()
          })
        }
        else{
            var promise = getSearcUser(this.state.searchName)
            promise.then((result) => {
                result.map((e) => {
                  this.friendList.push(e)
                })
                this.forceUpdate()
              })
        }
        console.log(this.friendList)
      }

      componentDidUpdate(){
        if(true){
          this.friendList=[]
          this.fetchData();
        }
        
      }
    
    
      componentDidMount() {
        this.fetchData()
    
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

    getList() {
        return (
            <List dense>
              {/* Scroll con la lista de amigos  */}
              <InfiniteScroll
                dataLength={this.state.items.length} //tamaño de la lista de amigos
                
                loader={<h4>Cargando...</h4>} //loader
                height={this.props.height}
              >
               
                {this.friendList.map((webId) => (
                  <Friend key={webId} webId={webId} logged={this.logged}/>
      
                ))}
      
              </InfiniteScroll>
              {/* Si tiene mas amigos indica un mensaje si no , el otro */}
              
            </List>
          );
    }   

    async handleClick(e) {
        e.preventDefault();
        if (this.state.searchName !== "") {
            this.list="search";            
        }
        else{
            this.list="users";
        }
        console.log(this.list)

}

      //funcion que aumenta la lista de amigos para la gente popular
  fetchMoreData = () => {
    const allFriends = this.props.friends; //almacena en una constante la lista de amigos
    //console.log(this.props.friends)
    const shownFriends = allFriends.slice(0, this.state.items.length + this.props.fetchCount); //un array con aun mas amigos
    this.setState({
      items: shownFriends, //lista de amigos mas larga
      hasMore: shownFriends.length < allFriends.length //amigos de mas incluidos
    });
  };
    render() {
        return (
            <div>
				<h1>BuscarAmigos</h1>
			      {this.searchFriends()}
			    <hr />
				{this.getList()}
				</div>
          );
    }   
}

/**

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
		/**<Friend key={e.toString()} webId={e}/>*//**
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
		*//**
		

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
*/
export default SearchFriends;