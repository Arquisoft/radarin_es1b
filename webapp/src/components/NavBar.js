import React, { useState } from 'react';
import {useWebId} from '@solid/react';
import BottomNav from './BottomNav';
import BottomNavAdmin from './BottomNavAdmin';
import StartPage from '../routes/StartPage';




 const NavBar = (props) => {
    
    const webId = useWebId()

    
    var adminUsers = props.adminUser;

    console.log("String de usuaarios " + adminUsers.length)

    for(var i = 0; i<adminUsers.length;i++){

      console.log("Usuario  " + i + " es " + adminUsers[i])

    }

    if(webId!=null){

      for(var i = 0; i<adminUsers.length;i++){

        if(webId==adminUsers[i]){
          
          return  <BottomNavAdmin webId={webId}/>     

        }
  
      }

     
        return <BottomNav webId={webId} /> 
     

        //return  (webId=="https://asw2021es1b.solidcommunity.net/profile/card#me") ? <BottomNavAdmin webId={webId}/> : <BottomNav webId={webId} />      

    }
    else{

        return (webId) ? <BottomNav webId={webId} /> : <StartPage />;  
        
    }


}

export  default NavBar
