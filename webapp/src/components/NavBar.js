import React, { useState } from 'react';
import {useWebId} from '@solid/react';
import BottomNav from './BottomNav';
import BottomNavAdmin from './BottomNavAdmin';
import StartPage from '../routes/StartPage';
import StartPageBan from '../routes/StartPageBaneado';




 const NavBar = (props) => {
    
    const webId = useWebId()

    var adminUsers = props.adminUser;

    var usersBan = props.banUser;

    console.log("String de usuarios admin " + adminUsers.length)
    console.log("String de usuarios baneados " + usersBan.length)

    for(var i = 0; i<adminUsers.length;i++){

      console.log("Usuario  " + i + " es " + adminUsers[i])

    }

    if(webId!=null){

      for(var i = 0; i<adminUsers.length;i++){

        if(webId==usersBan[i]){
          
          return  <StartPageBan />  

        }

        if(webId==adminUsers[i]){
          
          return  <BottomNavAdmin webId={webId}/>     

        }
  
      }

     
        return <BottomNav webId={webId} /> 
     

        //return  (webId=="https://asw2021es1b.solidcommunity.net/profile/card#me") ? <BottomNavAdmin webId={webId}/> : <BottomNav webId={webId} />      

    }
    else{

        return <StartPage />  
        
    }


}

export  default NavBar
