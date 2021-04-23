import React, { Component } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import ChatFriend from "./chatFriend";

import { getFriends } from '../../../api/api';
import { makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  chatSection: {
    width: '100%',
    height: '80vh'
  },
  headBG: {
      backgroundColor: '#e0e0e0'
  },
  borderRight500: {
      borderRight: '1px solid #e0e0e0'
  },
  messageArea: {
    height: '80vh',
    overflowY: 'auto'
  }
  
});

export default class ChatList extends Component {

  constructor(props) {
    super(props)
    this.friendList = []
    this.backFunc=props.backFunc
    this.onClickFunction=this.props.onClickFunction;
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
    var promise = getFriends(this.props.webId)

    promise.then((result) => {
      result.forEach((e) => {
        this.friendList.push(e)
      })
      this.forceUpdate()
    })
  }

  componentDidUpdate(){
    var aucx=true;
    if(aucx){
      this.friendList=[]
      this.fetchData();
    }
    
  }


  componentDidMount() {
    this.fetchData()
  }



  //funcion que aumenta la lista de amigos para la gente popular
  fetchMoreData = () => {
    const allFriends = this.props.friends; 
    const shownFriends = allFriends.slice(0, this.state.items.length + this.props.fetchCount); 
    this.setState({
      items: shownFriends,      
      hasMore: shownFriends.length < allFriends.length 
    });
  };

  render() {
    return (
      <div>
        <div align="left">
          <ArrowBackIcon align="left" onClick={this.backFunc} aria-label="ATRÁS" />
        </div>
        <List dense>
          <InfiniteScroll
            dataLength={this.state.items.length} //tamaño de la lista de amigos
            
            loader={<h4>Cargando...</h4>} //loader
            height={this.props.height}
          >
          
            {this.friendList.map((webId) => (
              <ChatFriend key={webId} webId={webId} onClickFunction={this.onClickFunction}/>

            ))}

          </InfiniteScroll>        
        </List>
      </div>
    );
  }
}
