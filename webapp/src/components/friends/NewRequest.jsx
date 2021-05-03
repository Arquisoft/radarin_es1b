import React from 'react'
import { getTargetFriends } from '../../api/api';
import List from "@material-ui/core/List";

import InfiniteScroll from "react-infinite-scroll-component";


import Friend from "../friendList/friend";


class NewRequest extends React.Component {
    
  constructor(props) {
    super(props)
    this.resultQuery = []
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
    var promise = getTargetFriends(this.logged)

    promise.then((result) => {
        this.resultQuery=[]
        result.forEach((e) => {
          this.resultQuery.push(e)
        })
      this.forceUpdate()
    })
  }


  componentDidMount() {
    this.fetchData()

  }



  //funcion que aumenta la lista de amigos para la gente popular
  fetchMoreData = () => {
    const allFriends = this.props.friends; //almacena en una constante la lista de amigos
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
         
          {this.resultQuery.map((webId) => (
            <Friend key={webId} webId={webId} logged={this.logged}/>

          ))}

        </InfiniteScroll>
        {/* Si tiene mas amigos indica un mensaje si no , el otro */}
        
      </List>
    );
  }
}
export default NewRequest
