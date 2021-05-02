import React from 'react'
import { getSearcByStatus, updateLastTime,getLastOnlineUsers, updateStatus } from '../../api/api';
import InfiniteScroll from "react-infinite-scroll-component";
import List from "@material-ui/core/List";
import Friend from "../friendList/friend";


class OnlineUsers extends React.Component {

	constructor(props) {
		super(props)
		this.resultQuery = []
		this.resultOnline=[]
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
		this.sacarUltimaHora(this.logged)
		this.fetchStatus() 
		this.fetchData()
	  }


	  async fetchData() {
		var promise = getSearcByStatus()
		this.querySuccess=false;
		this.resultQuery=[]
		promise.then((result) => {
			this.resultQuery=[]
		  result.forEach((e) => {
			this.resultQuery.push(e)
		  })
		  
		  this.forceUpdate()
		  this.render()	  
		})
	  }

	  async fetchStatus() {
         
		var promise = getLastOnlineUsers()
		this.querySuccess=false;
		this.resultOnline=[]
		promise.then((result) => {
		  this.resultOnline=[]
		  result.forEach((e) => {
		  this.resultOnline.push(e)
		  })
	
		  this.querySuccess=true;
		  this.forceUpdate()
		  this.render() 
		  this.actualizarOffline()
		 
		})
		
	}

	actualizarOffline(){
		
		if(this.resultOnline.length>0){
			
			for(var i = 0; i< this.resultOnline.length;i++){
  
				if(this.resultOnline[i]!==null){
					updateStatus(this.resultOnline[i], "offline")
				}
			  }
		  
		}
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

	sacarUltimaHora(webId){

		const tiempoTranscurrido = Date.now();
		const hoy = new Date(tiempoTranscurrido);
	
		updateLastTime(webId, hoy );

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
						Usuarios en linea : 
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
			  {console.log(this.resultQuery.length)}
			  {this.resultQuery.map((webId) => (
				     
					<Friend key={webId} webId={webId}/>
	
			  ))}
	
			</InfiniteScroll>
			{/* Si tiene mas amigos indica un mensaje si no , el otro */}
			
		  </List>
		);
	  }
	}


	export default OnlineUsers;