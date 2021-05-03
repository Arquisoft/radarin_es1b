import React from 'react';
import Button from "@material-ui/core/Button";

import { LoggedIn, AuthButton,LoggedOut, LogoutButton, useWebId} from '@solid/react';
import LoginBadge from './LoginBadge';
import { updateStatus } from '../../api/api';



//Url que sirve para iniciar sesión en solid desde una APP 
const popupUri = 'https://solidcommunity.net/common/popup.html';



 function Cerrar(web) {

     let webId = web;

     window.onbeforeunload = function(web) {
 		ejecutar(webId);
         return null;
 	}

       function ejecutar(web) {

         let webId = web

         if(webId!==null && webId !==undefined){
            
             updateStatus(webId, "offline")
         }
         //addUser(webId, "paquirrin")

       } 

    return ""
    
 }


// see https://material-ui.com/guides/composition/#caveat-with-refs

//AuthButtonComponent usa React.forwardRef para obtener la ref que le pasaron, y luego reenviarla al span que renderiza:
export const AuthButtonComponent = React.forwardRef((props, ref) => 
<span  ref={ref}><AuthButton login="Iniciar sesión" logout="Salir" {...props} />
    <div 
        style={{display: 'none'}}>{props.children}
    </div>
</span>)

//desde index.js le pasamos a esta función los datos extraidos que solicite, en este caso fullname, imageSrc ...
const Container = ({fullName, imageSrc, webId}) => {
    return <span>
        {/* LoggedIn solo se muestra si el usuario esta logueado */}
        <LoggedIn>   
          
            {/* <LoginBadge webId={webId} fullName={fullName ? fullName.toString().split(" ")[0] : undefined} imageSrc={imageSrc ? imageSrc.toString() : undefined} /> */}
          
            {Cerrar(webId)}

    
          
        {/* LoginnBadge es el boton de acceso al perfin de usuario una vez logueado el usuario , el componente  LoginBadge crea el boton que recibe como parametro webId,nombre y foto del usuario logueado */}
        
        </LoggedIn>
      
        {/* Boton para iniciar sesion en solid , muestra el boton de log in o log out dependiendo del estado del usuario */}
        <Button id="bottonInicio" variant="contained" color="primary" edge="end" component={AuthButtonComponent} popup={popupUri} >
            
        </Button>

        
    </span>;
};

export default Container