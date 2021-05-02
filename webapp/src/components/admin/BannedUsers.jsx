import React from 'react'
import { getSearcByBan, getSearcByStatus, getUsers } from '../../api/api';
import InfiniteScroll from "react-infinite-scroll-component";
import List from "@material-ui/core/List";
import User from "./userBanned";


class BannedUsers extends React.Component {

	constructor(props) {
		super(props)
		this.resultQuery = []
		this.logged = this.props.webId;
		this.querySuccess=false;
	}
	
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


	componentDidUpdate(){
		var aucx=true;
		if(aucx){
		  this.resultQuery=[]
		  this.fetchData();
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
				    
					<User key={webId} webId={webId} logged={this.logged}/>
	
			  ))}

				{this.resultQuery.length<1 ? this.buscarAmigos() : ""}
				
			</InfiniteScroll>
			{/* Si tiene mas amigos indica un mensaje si no , el otro */}
			
		  </List>
		);
	  }
	}


	export default BannedUsers;