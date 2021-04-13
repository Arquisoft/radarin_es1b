import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import List from "@material-ui/core/List";


import Friend from "./friend";
import Typography from "@material-ui/core/Typography";

import { getPendingFriends } from '../../api/api';

export default class PendingFriends extends Component {

  constructor(props) {
    super(props)
    this.friendList = []
    this.logged=this.props.webId;
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
    var promise = getPendingFriends(this.props.webId)

    promise.then((result) => {
      result.map((e) => {
        this.friendList.push(e)
      })
      this.forceUpdate()
    })
  }

  componentDidUpdate(){
    if(true){
      this.friendList=[]
      this.fetchData();
    }
    
  }


  componentDidMount() {
    this.fetchData()

  }



  //funcion que aumenta la lista de amigos para la gente popular
  fetchMoreData = () => {
    const allFriends = this.props.friends; //almacena en una constante la lista de amigos
    //console.log(this.props.friends)
    const shownFriends = allFriends.slice(0, this.state.items.length + this.props.fetchCount); //un array con aun mas amigos
    this.setState({
      items: shownFriends, //lista de amigos mas larga
      hasMore: shownFriends.length < allFriends.length //amigos de mas incluidos
    });
  };

  render() {
    return (
      <List dense>
        {/* Scroll con la lista de amigos  */}
        <InfiniteScroll
          dataLength={this.state.items.length} //tamaño de la lista de amigos
          
          loader={<h4>Cargando...</h4>} //loader
          height={this.props.height}
        >
         
          {this.friendList.map((webId) => (
            <Friend key={webId} webId={webId} logged={this.logged}/>

          ))}

        </InfiniteScroll>
        {/* Si tiene mas amigos indica un mensaje si no , el otro */}
        
      </List>
    );
  }
}
