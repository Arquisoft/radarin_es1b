import React, { useState } from 'react';
import {useWebId} from '@solid/react';
import BottomNav from './BottomNav';
import BottomNavAdmin from './BottomNavAdmin';
import StartPage from '../routes/StartPage';
import {getAdmin} from '../api/api'



  

  function mostrarVistaAdmin(webId) {
      
    return <BottomNavAdmin webId={webId}/>
      
  }

  function mostrarVistaNormal(webId) {

    return <BottomNav webId={webId}/>
      
  }

  async function isAdmin(b,web) {

    let webId = web;

    let a = b;

    console.log("la a es "  + a)
    console.log("la id es "  + webId)

    let aux = await getAdmin(webId).then(admin => {

        console.log("Aqui sale " + admin);  
        a = admin          
        console.log("Aqui sale " + a);  
        return a
    })

    console.log(aux)

    console.log("PORQUE ME HACES ESTO " + a)
        
    //return  (a == false ) ? <StartPageAdmin/> : <BottomNav webId={webId} />  
    return a ;
}

 const NavBar = () => {
    
    const webId = useWebId()

    const [admin, setAdmin]= useState(false)

    let a = false;

    function change() {
        setAdmin(!admin)
      }

    if(webId!=null){

        a = isAdmin(a, webId);

        console.log("QUE ESTA PASANDO AQUI " + a)

        // return <div>
        //     {admin?
               
        //           mostrarVistaAdmin(webId)
               
        //     :
              
        //           mostrarVistaNormal(webId)
               
        //     }
        // </div>

        return  (webId=="https://asw2021es1b.solidcommunity.net/profile/card#me") ? <BottomNavAdmin webId={webId}/> : <BottomNav webId={webId} />      

    }
    else{

        return (webId) ? <BottomNav webId={webId} /> : <StartPage />;  
        
    }


}

export  default NavBar
