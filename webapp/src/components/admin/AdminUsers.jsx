import React from 'react'
import { getSearcByAdmin, getUsers } from '../../api/api';
import InfiniteScroll from "react-infinite-scroll-component";
import List from "@material-ui/core/List";
import Friend from "../admin/deleteAdmin";


class AdminUsers extends React.Component {

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
		var promise = getSearcByAdmin()
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



	  render() {
		return (
		  <List dense>
			{/* Scroll con la lista de amigos  */}
			<InfiniteScroll
			  dataLength={this.resultQuery.length} //tamaño de la lista de amigos
			  loader={<h4>Cargando...</h4>} //loader
			  height={this.props.height}>
			  {this.resultQuery.map((webId) => (
				     
					<Friend key={webId} webId={webId} logged={this.logged}/>
			  ))}
	
			</InfiniteScroll>
			{/* Si tiene mas amigos indica un mensaje si no , el otro */}
			
		  </List>
		);
	  }
	}


	export default AdminUsers;