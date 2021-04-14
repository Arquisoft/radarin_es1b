import React from 'react';

import ButtonAddDelete from './ButtonAddDelete';



const ButtonFriendship = ({webId,loggedUser}) => webId!==loggedUser ?
    <ButtonAddDelete webId={webId} loggedUser={loggedUser} /> : null

export default ButtonFriendship