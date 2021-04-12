
//REACT_APP_API_URI is an enviroment variable defined in the file .env.development or .env.production
export async function addUser(webId, nombre){
    
    console.log("nombre a meter en la base de datos " + nombre)
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'webId':webId,
            'nombre': String(nombre)
        })
      })
    return await response.json()
}

export async function getUsers(){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    console.log(apiEndPoint)
    let response = await fetch(apiEndPoint+'/users/list')
    return await response.json()
}


// Locations -----------------------------------------------------------------------


export async function addLocation(webId,location,state,country){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/location/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'user':webId, 
            'location':location,
            'state':state,
            'country':country
        })
      })
    return await response.json()
}



// Friends ---------------------------------------------------------------------


export async function getFriendsLocations(webId){
    console.log("Pidiendo localizacionies de los amigos...")
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/friends/locations', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'webId':webId, 
        })
      })
    return await response.json()
}

export async function addFriend(userWebId, friendwebId){
    console.log("Añadiendo amigos:"+userWebId +" ; "+friendwebId);
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/friends/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'webId':userWebId, 
            'friendwebId':friendwebId
        })
      })
    return await response.json()
}

export async function removeFriend(userWebId, friendwebId){
    console.log("Eliminando de amigos amigos:"+userWebId +" ; "+friendwebId);
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/friends/remove', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'webId':userWebId, 
            'friendwebId':friendwebId
        })
      })
    return await response.json()
}

export async function getFriends(webId){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/friends/list', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'webId':webId
        })
      })
    return await response.json()
}


export async function getFriendShip(userWebId, friendwebId){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/friends/check', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'webId':userWebId, 
            'friendwebId':friendwebId
        })
      })
      let answer;
    try{
         answer= await response.json()
    }
    catch{
         answer= null;
    }
    //console.log(answer)
    return  answer;
}



// Meets ------------------------------------- /
export async function addMeet(webId,location,state,country){
    console.log("wbaide" +webId)
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/meets/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'creator_webId': String(webId), 
            'location':location,
            'state':state,
            'country':country
        })
      })
    return await response.json()
}