import React from 'react'
import { Button } from '@material-ui/core';
import { getSearcByNoBan, getUsers } from '../../api/api';
import InfiniteScroll from "react-infinite-scroll-component";
import List from "@material-ui/core/List";
import User from "./userBan";


class BanUsers extends React.Component {

	constructor(props) {
		super(props)
		this.resultQuery = []
		this.logged = this.props.webId;
		this.querySuccess=false;
		this.state = {
			searchName: ""
		};
	}
	
	  async fetchData() {
		var promise = getSearcByNoBan()
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

	componentDidUpdate(){
		var aucx=true;
		if(aucx){
		  this.resultQuery=[]
		  this.fetchData();
		}
	}

	componentDidMount(){
		this.fetchData()
	}

	  render() {
		return (
		  <List dense>
			{/* Scroll con la lista de amigos  */}
			<InfiniteScroll
			  dataLength={this.resultQuery.length} //tamaño de la lista de amigos
			  
			  loader={<h4>Cargando...</h4>} //loader
			  height={'60vh'}>
			 {!this.querySuccess? <span>No se encontraron usuarios, mostrando usuarios del sistema</span>: 
			 	<span>{this.state.searchName}</span>}
			  {this.resultQuery.map((webId) => (
				    
					<User key={webId} webId={webId}/>
	
			  ))}
	
			</InfiniteScroll>
			{/* Si tiene mas amigos indica un mensaje si no , el otro */}
			
		  </List>
		);
	  }
	}


	export default BanUsers;