<<<<<<< HEAD
import React from 'react';

import ButtonAddOrDelete from './ButtonAddOrDelete';



export default ({webId,loggedUser}) => webId!=loggedUser ?
    <ButtonAddOrDelete webId={webId} loggedUser={loggedUser} /> : null
=======
import React from 'react';

import ButtonAddDelete from './ButtonAddDelete';



const ButtonFriendship = ({webId,loggedUser}) => webId!==loggedUser ?
    <ButtonAddDelete webId={webId} loggedUser={loggedUser} /> : null

export default ButtonFriendship
>>>>>>> 4ce71dd43fd61abe375d65537d59872c98507278
