import React from 'react';
import Button from "@material-ui/core/Button";

import { LoggedIn, AuthButton, LoggedOut} from '@solid/react';
import Typography from '@material-ui/core/Typography';

import LoginBadge from './LoginBadge';

//Url que sirve para iniciar sesión en solid desde una APP 
const popupUri = 'https://solidcommunity.net/common/popup.html';

var conectado = false;
var llamada = false;
var cont = 0;
var entradas = 0;
  
  function UserGreeting(props) {

    // if (conectado && cont>=5) {
    //     conectado=false;
    // }

    // if(conectado==false && cont<5){
    //     cont++;
    //     conectado=true
    //     console.log("ENTRO AQUIIII" + conectado);
    //     console.log("Aumenta" + cont);
        
    // }
   
    return conectado = true;

  }

  function IniciarSesion(props) {

    return <h1>amargado estoy</h1>

  }

  
  function GuestGreeting(props) {
   
    cont = 0;
    return conectado=false;
  }

  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting/>;
    }
    return <GuestGreeting />;
  }

  function Entro(props) {
    const isIn = props.isIn;
    if (isIn) {
      entradas++;
      if(entradas==28)
         return <h1> estoy aqui  {entradas}</h1>;
    
    }
    return <h1>No estoy aqui</h1>;
  }

// see https://material-ui.com/guides/composition/#caveat-with-refs

//AuthButtonComponent usa React.forwardRef para obtener la ref que le pasaron, y luego reenviarla al span que renderiza:
export const AuthButtonComponent = React.forwardRef((props, ref) => 
<span  ref={ref}><AuthButton {...props} />
    <div 
        style={{display: 'none'}}>{props.children}
    </div>
</span>)

//desde index.js le pasamos a esta función los datos extraidos que solicite, en este caso fullname, imageSrc ...
export default ({fullName, imageSrc, webId}) => {
    return <span>
        {/* LoggedIn solo se muestra si el usuario esta logueado */}
        <LoggedIn>   
           <Greeting isLoggedIn={true}/>  
            {console.log("Conectado : " + conectado)}
            {/* {((conectado) ? 
                ((llamada==false) ? 
                    llamada=true
                    ((llamada==true)?
                        console.log("Hago la llamada")
                    : console.log("NOOO Hago la llamada"))
                : console.log("NOOO Hago la llamada"))
            : console.log("NOOO Hago la llamada"))}   */}

             <LoginBadge webId={webId} fullName={fullName ? fullName.toString() : undefined} imageSrc={imageSrc ? imageSrc.toString() : undefined} />
          
        {/* LoginnBadge es el boton de acceso al perfin de usuario una vez logueado el usuario , el componente  LoginBadge crea el boton que recibe como parametro webId,nombre y foto del usuario logueado */}
        
        </LoggedIn>
      
        <LoggedOut>
            <Greeting isLoggedIn={false} />  
        </LoggedOut>
        {/* Boton para iniciar sesion en solid , muestra el boton de log in o log out dependiendo del estado del usuario */}
        <Button variant="contained" color="primary" edge="end" onClick={<IniciarSesion/>} component={AuthButtonComponent} popup={popupUri} >

        </Button>
    </span>;
};