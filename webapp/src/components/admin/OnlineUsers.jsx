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