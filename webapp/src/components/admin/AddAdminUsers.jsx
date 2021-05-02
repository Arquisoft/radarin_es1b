import React from 'react'
import { getSearcByNoAdmin } from '../../api/api';
import InfiniteScroll from "react-infinite-scroll-component";
import List from "@material-ui/core/List";
import User from "../admin/addAdmin";


class AddAdminUsers extends React.Component {

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
		var promise = getSearcByNoAdmin()
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

	  render() {
		return (
		  <List dense>
			{/* Scroll con la lista de amigos  */}
			<InfiniteScroll
			  dataLength={this.resultQuery.length} //tamaño de la lista de amigos
			  loader={<h4>Cargando...</h4>} //loader
			  height={'60vh'}>
			  {this.resultQuery.map((webId) => (
				     webId!==this.logged?
					<User key={webId} webId={webId} logged={this.logged}/>:null
	
			  ))}
	
			</InfiniteScroll>
			{/* Si tiene mas amigos indica un mensaje si no , el otro */}
			
		  </List>
		);
	  }
	}


	export default AddAdminUsers;