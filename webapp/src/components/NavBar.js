import React from 'react';
import {useWebId} from '@solid/react';
import BottomNav from './BottomNav';
import BottomNavAdmin from './BottomNavAdmin';
import StartPageBan from '../routes/StartPageBaneado';
import MainPage from '../routes/MainPage';

 const NavBar = (props) => {
    
    const webId = useWebId()

    var adminUsers = props.adminUser;

    var usersBan = props.banUser;

    if(webId!=null){

      for(var i = 0; i<usersBan.length;i++){

        if(webId==usersBan[i]){
          
          return  <StartPageBan />  

        }
      }

      for(var i = 0; i<adminUsers.length;i++){

        if(webId==adminUsers[i]){
          
          return  <BottomNavAdmin webId={webId} usuario = {"admin"}/>     

        }
      }
  
        return <BottomNav webId={webId} usuario = {"1"} /> 
     

    }
    else{

        return <MainPage/>  
        
    }


}

export  default NavBar
