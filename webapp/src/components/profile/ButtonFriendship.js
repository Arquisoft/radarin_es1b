import React from 'react';

import ButtonAddOrDelete from './ButtonAddOrDelete';

import ButtonAddDelete from './ButtonAddDelete';



export default ({webId,loggedUser}) => webId!=loggedUser ?
    <ButtonAddDelete webId={webId} loggedUser={loggedUser} /> : null