import React from 'react'
import { Button } from '@material-ui/core';
import { getSearcByName, getUsers } from '../../api/api';
import InfiniteScroll from "react-infinite-scroll-component";
import List from "@material-ui/core/List";
import User from "../admin/user";


class DeleteUsers extends React.Component {

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
	
		 
		var promise2= getUsers()
		promise2.then((result2)=>{
		result2.forEach((user)=>{
			this.resultQuery.push(user.webId)
		})
		this.forceUpdate()
		this.render()
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
			  height={this.props.height}>
			  {this.resultQuery.map((webId) => (
				     webId!==this.logged?
					<User key={webId} webId={webId}/>:null
	
			  ))}
	
			</InfiniteScroll>
			{/* Si tiene mas amigos indica un mensaje si no , el otro */}
			
		  </List>
		);
	  }
	}


	export default DeleteUsers;