import React from 'react'
import { getUsers, getLastUsers } from '../../api/api';
import InfiniteScroll from "react-infinite-scroll-component";
import List from "@material-ui/core/List";
import User from "./inactiveUser";


class LastUsers extends React.Component {

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
		var promise = getLastUsers()
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
						 Usuarios que han entrado en las ultimas 24 horas : 
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
				    
					<User key={webId} webId={webId} logged={this.logged}/>
			  ))}
	
			</InfiniteScroll>
			{/* Si tiene mas amigos indica un mensaje si no , el otro */}
			
		  </List>
		);
	  }


}


	export default LastUsers;