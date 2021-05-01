
//REACT_APP_API_URI is an enviroment variable defined in the file .env.development or .env.production
export async function addUser(webId, nombre){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'webId':webId,
            'nombre': String(nombre),
            'admin': "false",
            "status": "online"
        })
      })
    return await response.json()
}

export async function removeUser(userWebId){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/remove', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'webId':userWebId
        })
      })
    return await response.json()
}


export async function banUser(userWebId, ban){

    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/ban', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'webId':userWebId,
            'ban':String(ban)
        })
      })
    return await response.json()
}

export async function makeAdmin(userWebId, admin){

    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/add/admin', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'webId':userWebId,
            'admin':String(admin)
        })
      })
    return await response.json()
}



export async function updateStatus(webId, status){

    console.log("llega el web id para cambiar el estado " + webId)
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/status/update', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'webId':webId,
            'status':String(status)
        })
      })
    return await response.json()
  }

  export async function updateLastTime(webId, date){

    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/lastTime/update', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'webId':webId,
             'time': date
        })
      })
    return await response.json()
  }

export async function getUsers(){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/list')
    return await response.json()
}

export async function addLocation(webId,location,state,country,fullName){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/location/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'user': String(webId), 
            'location':location,
            'state':state,
            'country':country,
            'fullName':String(fullName)
        })
      })
    return await response.json()
}



// Friends ---------------------------------------------------------------------


export async function getFriendsLocations(webId){
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
    //console.log("Añadiendo amigos:"+userWebId +" ; "+friendwebId);
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
    //console.log("Eliminando de amigos amigos:"+userWebId +" ; "+friendwebId);
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

/* export async function getPendingFriends(webId){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/friends/pending/requester', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'userWebId':webId, 
        })
      })
    return await response.json()
}
 */
export async function getTargetFriends(logged){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/friends/pending/target', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'logged':logged
        })
      })
    return await response.json()
}

export async function getSearcUser(webId){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/search/', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'webID':webId, 
        })
      })
    return await response.json()
}

export async function getLastTime(){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/lastTime/get/', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
      })
    return await response.json()
}

export async function getLastUsers(){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/lastUsers', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
      })
    return await response.json()
}


export async function getLastTimeUser(webId){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/lastTime/get/user/', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'webId':webId
        })
      })
    return await response.json()
}


export async function getSearcByName(str){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/search/name', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'str':str, 
        })
      })
    return await response.json()
}

export async function getSearcByStatus(){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/search/status', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
      })
    return await response.json()
}

export async function getSearcByAdmin(){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/search/admin', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
      })
    return await response.json()
}

export async function getSearcByNoAdmin(){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/search/admin/no', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
      })
    return await response.json()
}


export async function getSearcByBan(){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/search/ban', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
      })
    return await response.json()
}

export async function getSearcByNoBan(){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/search/ban/no', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
      })
    return await response.json()
}



/* export async function acceptFriend(webId,friendWebId){
    
       const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
       let response = await fetch(apiEndPoint+'/friends/accept/', {
           method: 'POST',
           headers: {'Content-Type':'application/json'},
           body: JSON.stringify({
               'webID':webId, 
               'friendWebId':friendWebId
           })
         })
       return await response.json()
   }  */

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

export async function getPendingFriends(webId){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/friends/list/pending', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'webId':webId
        })
      })
    return await response.json()
}

export async function acceptPendingFor(loggedUserWebID,webId){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    //console.log("Aceptando: "+ webId)
    let response = await fetch(apiEndPoint+'/friends/accept', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'target':loggedUserWebID,
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
    return  answer;
}


// Meets ------------------------------------- /
export async function addMeet(webId,location,state,country,date,time){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/meets/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'creator_webId': String(webId), 
            'location':location,
            'state':state,
            'country':country,
            'date':date,
            'time':time
        })
      })
    return await response.json()
}

// Meets ------------------------------------- /
export async function getMeetsForUser(webId,){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/meets/find', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'userWebId': String(webId)
        })
      })
    return await response.json()
}
    




// Menssages ----------------------------------- /msg
export async function addMsg(from, to, msg){
    //console.log("Añadiendo amigos:"+userWebId +" ; "+friendwebId);
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/msg/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'from':from, 
            'to':to,
            'msg': msg
        })
      })
    return await response.json()
}

export async function assist(meetId, asistenteWebId){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/meets/assist', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'asistenteWebId': String(asistenteWebId),
            'meetId': String(meetId)
        })
      })
    return await response.json()
}

export async function removeAttendance(meetId, asistenteWebId){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/meets/remove/attendance', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'asistenteWebId': String(asistenteWebId),
            'meetId': String(meetId)
        })
      })
    return await response.json()
}

export async function getMessages(from, to){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/msg/list', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'from': String(from), 
            'to': String(to)
        })
      })
    return await response.json()
}
