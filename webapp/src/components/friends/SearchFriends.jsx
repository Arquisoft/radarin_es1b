import React from 'react'
import { Button } from '@material-ui/core';
import { getSearcByName, getUsers } from '../../api/api';
import InfiniteScroll from "react-infinite-scroll-component";
import List from "@material-ui/core/List";
import Friend from "../friendList/friend";


class SearchFriends extends React.Component {

	constructor(props) {
		super(props)
		this.resultQuery = []
		this.logged = this.props.webId;
		this.querySuccess=false;
		this.state = {
			searchName: ""
		};

		this.fetchData()
	}
	
	static defaultProps = {
		friends: [], // Lista de todas los amigos que se mostrarán.
		height: 300,
		showInitially: 10, // Número de amigos para mostrar inicialmente
		fetchCount: 5 // número de amigos para buscar a la vez, al desplazarse por la lista
	  };
	
	  state = {
		items: this.props.friends.slice(0, this.props.showInitially), //crea un array de amigos de 0 a el valor de showInitially
		hasMore: this.props.friends.length > this.props.showInitially // Indica que tenemos mas amigos de los que se pueden monstrar inicialmente
	  };


	  async fetchData() {
		var promise = getSearcByName(this.state.searchName)
		this.querySuccess=false;
		this.resultQuery=[]
		promise.then((result) => {
			this.resultQuery=[]
		  result.forEach((e) => {
			this.resultQuery.push(e)
		  })
		  if(result.length===0){
			  var promise2= getUsers()
			  promise2.then((result2)=>{
				result2.forEach((user)=>{
					this.resultQuery.push(user.webId)
				})
				this.forceUpdate()
		  		this.render()
			  })
		  }
		  else{
			  this.querySuccess=true;
		  this.forceUpdate()
		  this.render()
		  }
		  
		  
		})
	  }

	

	handleChange(event) {
		this.setState({ searchName: event.target.value });
		this.handleClick(event)

	}

	

	handleClick(e) {
		e.preventDefault();
		if (this.state.searchName !== "") {
			this.fetchData()      
		}
		else{
			this.fetchData()
		} 


}

	buscarAmigos() {
		return (
			<div>
				<form>
					<label> 
						<input 
							id="friendID"
							type="text"
							name="searchArea"
							onSubmit={ (e)=>this.handleChange(e)}
							onChange={(e)=>this.handleChange(e)}
						/>
						<Button id="searchFriends" type="button" onClick={(e) => this.handleClick(e)}>
							Buscar
						</Button>
					</label>
				</form>
            </div>
		);
    }


	  render() {
		return (
		  <List dense>
			{/* Scroll con la lista de amigos  */}
			{this.buscarAmigos()}
			<InfiniteScroll
			  dataLength={this.resultQuery.length} //tamaño de la lista de amigos
			  
			  loader={<h4>Cargando...</h4>} //loader
			  height={this.props.height}>
			 
			  {this.resultQuery.map((webId) => (
				     webId!==this.logged?
					<Friend key={webId} webId={webId} logged={this.logged}/>:null
	
			  ))}
	
			</InfiniteScroll>
			{/* Si tiene mas amigos indica un mensaje si no , el otro */}
			
		  </List>
		);
	  }
	}


	export default SearchFriends;