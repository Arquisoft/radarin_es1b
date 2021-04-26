import React from 'react'
import { Button } from '@material-ui/core';
import { getSearcByBan, getSearcByStatus, getUsers } from '../../api/api';
import InfiniteScroll from "react-infinite-scroll-component";
import List from "@material-ui/core/List";
import User from "../admin/userBaned";


class BanedUsers extends React.Component {

	constructor(props) {
		super(props)
		this.resultQuery = []
		this.logged = this.props.webId;
		this.querySuccess=false;
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

	  componentDidMount(){
		this.fetchData()
	  }


	  async fetchData() {
		var promise = getSearcByBan()
		this.querySuccess=false;
		this.resultQuery=[]
		promise.then((result) => {
			this.resultQuery=[]
		  result.forEach((e) => {
			this.resultQuery.push(e)
		  })
		 
	
		  this.querySuccess=true;
		  this.forceUpdate()
		  this.render()
		
		  
		  
		})
	  }

	handleChange(event) {
		this.setState({ searchName: event.target.value });
	}

	componentDidUpdate(){
		var aucx=true;
		if(aucx){
		  this.resultQuery=[]
		  this.fetchData();
		}
	}

	


	handleClick(e) {
		e.preventDefault();
		if (this.state.searchName !== "") {
			this.fetchData()      
		}
		else{
			//console.error("No hay texto para buscar")
		} 
    }

	buscarAmigos() {
		return (
			<div>
				<form>
					<label> 
						No hay usuario baneados
					</label>
				</form>
            </div>
		);
    }
	


	  render() {
		return (
		  <List dense>
			{/* Scroll con la lista de amigos  */}
		
			<InfiniteScroll
			
			  dataLength={this.resultQuery.length} //tamaño de la lista de amigos
			  loader={<h4>Cargando...</h4>} //loader
			  height={this.props.height}>
			  
			  {this.resultQuery.map((webId) => (
				     webId!==this.logged?
					<User key={webId} webId={webId} logged={this.logged}/>:null
	
			  ))}

				{this.resultQuery.length<1 ? this.buscarAmigos() : ""}
				
			
	
			</InfiniteScroll>
			{/* Si tiene mas amigos indica un mensaje si no , el otro */}
			
		  </List>
		);
	  }
	}


	export default BanedUsers;