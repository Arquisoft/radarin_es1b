const express = require("express");
const User = require("./models/users");
const Location = require("./models/locations");
const Friend = require("./models/friends");
const Meet = require("./models/meets");
const Chat = require("./models/chats");
const router = express.Router();
const mongoose = require("mongoose");

// Devuelve la lista de usuarios
router.get("/users/list", async (req, res) => {
    const users = await User.find({}).sort('-_id');//Inverse order
    res.send(users);
});
//register a new user
router.post("/users/add", async (req, res) => {

    let nombre = req.body.nombre;
    let webId = req.body.webId;
    let admin = req.body.admin;
    let status = req.body.status;

    //Check if the device is already in the db
    let user = await User.findOne(
        { webId: webId }
    );
    if (user) {
        res.send({ error: "Error: This user is already registered" + webId });
    }
    else {
        user = new User({
            webId: webId,
            nombre: nombre,
            admin: admin,
            status: status,
            ban: "false"
        });
        await user.save();
        res.send(user);
    }
});

//cambia el estado de una persona
router.post("/users/status/update", async (req, res) => {

    let webId = req.body.webId;

    let status = req.body.status;

    let user2 = await User.findOne(
        { webId: webId }
    );

    if (user2) {
        var query = { "_id": user2._id };
        user2.status = status;

        await User.findOneAndUpdate(query, user2, function (err, doc) {
            if (err) {
                res.send(err);
            } else {

                res.send(doc);
            }
        });
    }


    if (user2 != null) {
        await user2.save();
        res.send(user2);
    }


})

//cambia el estado de una persona
router.post("/users/lastTime/update", async (req, res) => {

    let webId = req.body.webId;

    let date = req.body.time;

    let user = await User.findOne(
        { webId: webId }
    );

    if (user) {
       var query = { "_id": user._id };
         user.time = date;
    }


     if(user!=null){
         await user.save();
         res.send(user);
     }


})


//borra un usuario
router.post("/users/remove", async (req, res) => {

    let userWebId = req.body.webId;

    let deleted = await User.deleteOne(
        { webId: userWebId },
            function (err) {
            if (err) {
            } 
            else {
            }
    });

    res.send(deleted);

})


//cambia el estado de una persona
router.post("/users/ban", async (req, res) => {

    let webId = req.body.webId;

    let baneable = req.body.ban;

    let user2 = await User.findOne(
        { webId: webId }
        );

    if (user2) {
        var query = { "_id": user2._id };
        user2.ban = baneable;

        await User.findOneAndUpdate(query, user2, function (err, doc) {
            if (err) {
                res.send(err);
            } else {
                res.send(doc);
            }
        });
    }

    await user2.save();
    res.send(user2);

})

router.post("/users/add/admin", async (req, res) => {

    let webId = req.body.webId;

    let admin = req.body.admin;

    let user2 = await User.findOne(
        { webId: webId }
        )

    if (user2) {
        var query = { "_id": user2._id };
        user2.admin = admin

        await User.findOneAndUpdate(query, user2, function (err, doc) {
            if (err) {
                res.send(err)
            } else {
                res.send(doc)
            }
        });
    }

    await user2.save();
    res.send(user2);

})


// register a new location
router.post("/location/add", async (req, res) => {
    let user = req.body.user;
    let location = req.body.location;
    let state = req.body.state;
    let country = req.body.country;
    let fullName = req.body.fullName;
    // Check if the user is already in the db
    let newEntry = await Location.findOne({ user: user });
    // If it exists, then we'll update it
    if (newEntry) {
        var query = { "_id": newEntry._id };
        newEntry.location = location;
        newEntry.state = state;
        newEntry.country = country;
        newEntry.fullName = fullName;
        await Location.findOneAndUpdate(query, newEntry, function (err, doc) {
            if (err) {
                res.send(err)
            } else {
                res.send(doc)
            }
        });
    } else {
        newEntry = new Location({
            user: user,
            location: location,
            state: state,
            country: country,
            fullName: fullName
        });

        //await newEntry.save();
        res.send(newEntry);
    }
});

//Solicitud de amistad
router.post("/friends/add", async (req, res) => {
    let userWebId = req.body.webId
    let friendWebId = req.body.friendwebId

    let friend = await Friend.findOne({
        requester: userWebId,
        target: friendWebId
    })
    if (friend)
        res.send({ error: "Error: This user is already registered" })
    else {
        let newFriend = new Friend({
            requester: userWebId,
            target: friendWebId,
            status: "pending"
        })
        await newFriend.save()
        res.send(newFriend);
    }

})

router.post("/friends/check", async (req, res) => {
    let userWebId = req.body.webId
    let friendWebId = req.body.friendwebId

    var query = {
        $or: [
            { "requester": userWebId, "target": friendWebId },
            { "requester": friendWebId, "target": userWebId }
        ]
    }
    let success = false

    await Friend.findOne(query, function (err, friends) {
        if (err) {
            res.send(err)
        }
        else {
            success = true;

            res.send(friends)
        }
    })

})

router.post("/friends/remove", async (req, res) => {
    let userWebId = req.body.webId
    let friendWebId = req.body.friendwebId

    var query = {
        $or: [
            { "requester": userWebId, "target": friendWebId },
            { "requester": friendWebId, "target": userWebId }
        ]
    }

    let friendship = await Friend.deleteMany(query, function (err) {
        if (err) {
            //console.log("Something wrong when deleting friendship!");
        } else {
            //console.log("Amistad eliminada!: " + userWebId + "; " + friendWebId);
        }
    });

    res.send(friendship)
})


router.post("/friends/accept", async (req, res) => {

    let userWebId = req.body.webId
    let target = req.body.target
    var query = {
        "requester": userWebId, "target": target
    }

    let oldFriendship = await Friend.findOne(query);

    if (oldFriendship) {
        oldFriendship.status = "accepted"
        let friendship = await Friend.findOneAndUpdate(query, oldFriendship, function (err) {
            if (err) {
                //console.log("Something wrong when accepting friendship!");
            } else {
                //console.log("Amistad acceptada!: " + userWebId + "; " + target);

            }
        });
    } 
    res.send(friendship)

});


// post peticiones enviadas por el usuairo
router.post("/friends/pending/target", async (req, res) => {
    const userWebId = req.body.logged

    var query = {
        "requester": userWebId, "status": "pending"
    };
    Friend.find().and(query).exec(function (err, docs) {
        if (err) {
            res.send(err)
        } else {
            var users = docs.map(function (elem) {
                return elem.target;
            }, this)


            res.send(users)
        }
    })
});

// Encontrar amigos cercanos
router.post("/friends/findNearest", async (req, res) => {
    let friendId = req.body.friend;
    let myId = req.body.webId;
    let friend = await User.findOne({ webId: friendId })
    if (friend != null) {
        if (friend.status != 'online') {
            res.send("No nearby user");
        } else {
            let friendLoc = await Location.findOne({ user: friendId })
            let myLoc = await Location.findOne({ user: myId })
            if (friendLoc != null && myLoc != null) {
                let d = distance(friendLoc.location, myLoc.location)
                if (d < 0.3)
                    res.send(friend.nombre);
                else
                    res.send("No nearby user");
            }
            else
                res.send("No nearby user");
        }
    } else {
        res.send("No nearby user");
    }
});

function distance(friendLoc, myLoc) {
    var dx = friendLoc[1] - myLoc[1],
        dy = friendLoc[0] - myLoc[0];

    return Math.sqrt(dx * dx + dy * dy);
}

// Notificar Peticiones de amistad
router.post("/friends/notify", async (req, res) => {
    let friendId = req.body.friend;
    let friend = await User.findOne({ webId: friendId })
    if (friend != null) {
        res.send(friend);
    } else {
        res.send("No hay nuevas solicitudes");
    }
});

//buscar a una persona 
router.post("/users/search/", async (req, res) => {
    const userWebId = req.body.webID
    var query = {

        "webId": userWebId
    };
    await User.find(query, function (err, docs) {
        if (err) {
            //console.log("Error al encontrar los usuarios dados los amigos")
        } else {
            var webIds = docs.map((doc) => { return doc.webId })

            res.send(webIds);
        }
    })
});


//buscar a una persona 
router.post("/users/lastTime/get/", async (req, res) => {

    await User.find(function (err, docs) {
        if (err) {
            //console.log("Error al encontrar los usuarios dados los amigos")
        } else {
            const tiempoTranscurrido = Date.now();

            const hoy = new Date(tiempoTranscurrido);

            var webIds = docs.map((doc) => { 

                const fechaUsuario = doc.time.toUTCString()
                const currDate = new Date(hoy)
                const oldDate  = new Date(fechaUsuario)

                const diferenciaDias = (currDate - oldDate) / 60000;

                if( diferenciaDias > 43200){
                    return doc.webId 
                }

            })

            res.send(webIds);
        }
    })
});

router.post("/users/lastUsers", async (req, res) => {

    await User.find(function (err, docs) {
        if (err) {
           // console.log("Error al encontrar los usuarios dados los amigos")
        } else {
            const tiempoTranscurrido = Date.now();

            const hoy = new Date(tiempoTranscurrido);

            var webIds = docs.map((doc) => { 

                const fechaUsuario = doc.time.toUTCString()
                const currDate = new Date(hoy)
                const oldDate  = new Date(fechaUsuario)

                const diferenciaDias = (currDate - oldDate) / 60000;

                if( diferenciaDias < 1440){
                    return doc.webId 
                }

            })

            res.send(webIds);
        }
    })
});

router.post("/users/lastOnlineUsers", async (req, res) => {

    await User.find(function (err, docs) {
        if (err) {
           // console.log("Error al encontrar los usuarios dados los amigos")
        } else {
            const tiempoTranscurrido = Date.now();

            const hoy = new Date(tiempoTranscurrido);

            var webIds = docs.map((doc) => { 

                const fechaUsuario = doc.time.toUTCString()
                const currDate = new Date(hoy)
                const oldDate  = new Date(fechaUsuario)

                const diferenciaDias = (currDate - oldDate) / 60000;

                if( diferenciaDias > 10){
                    return doc.webId 
                }

            })

            res.send(webIds);
        }
    })
});



//buscar a una persona 
router.post("/users/lastTime/get/user/", async (req, res) => {
    
    const web = req.body.webId;

    var query = {
        "webId": web
    };
    await User.find(query, function (err, docs) {
        if (err) {
            //console.log("Error al encontrar los usuarios dados los amigos")
        } else {
            var webIds = docs.map((doc) => { return doc.time.toUTCString() })

            res.send(webIds[0]);
        }
    })

});



//buscar a una persona 
router.post("/users/search/name", async (req, res) => {
    const str = req.body.str
    var query =
        { "nombre": { '$regex': "" + str } }
        ;
    await User.find(query, function (err, docs) {
        if (err) {
            //console.log("Error al encontrar los usuarios dados los amigos")
        } else {
            var webIds = docs.map((doc) => { return doc.webId })

            res.send(webIds);
        }
    })
});

//buscar si una persona es online
router.post("/users/search/status", async (req, res) => {
    var query = {
        "status": "online"
    };
    await User.find(query, function (err, docs) {
        if (err) {
            //console.log("Error al encontrar los usuarios dados los amigos")
        } else {
            var webIds = docs.map((doc) => { return doc.webId })

            res.send(webIds);
        }
    })
});

//buscar si una persona es admin
router.post("/users/search/admin", async (req, res) => {
    var query = {
        "admin": "true"
    };
    await User.find(query, function (err, docs) {
        if (err) {
            //console.log("Error al encontrar los usuarios dados los amigos")
        } else {
            var webIds = docs.map((doc) => { return doc.webId })
            res.send(webIds);
        }
    })
});

//buscar si una persona no es admin
router.post("/users/search/admin/no", async (req, res) => {
    var query = {
        "admin": "false"
    };
    await User.find(query, function (err, docs) {
        if (err) {
            //console.log("Error al encontrar los usuarios dados los amigos")
        } else {
            var webIds = docs.map((doc) => { return doc.webId })
            res.send(webIds);
        }
    })
});

//buscar si una persona es admin
router.post("/users/search/ban", async (req, res) => {
    var query = {
        "ban": "true"
    };
    await User.find(query, function (err, docs) {
        if (err) {
            //console.log("Error al encontrar los usuarios dados los amigos")
        } else {
            var webIds = docs.map((doc) => { return doc.webId })
            res.send(webIds);
        }
    })
});

//buscar si una persona es admin
router.post("/users/search/ban/no", async (req, res) => {
    var query = {
        "ban": "false",
        "admin": "false"
    };
    await User.find(query, function (err, docs) {
        if (err) {
            //console.log("Error al encontrar los usuarios dados los amigos")
        } else {
            var webIds = docs.map((doc) => { return doc.webId })
            res.send(webIds);
        }
    })
});


// get friends
router.get("/friends/list/:id", async (req, res) => {


})

router.post("/friends/list", async (req, res) => {

    const userWebId = req.body.webId
    var query = {
        $and: [
            {
                $or: [
                    { "requester": userWebId },
                    { "target": userWebId }
                ]
            },
            { "status": "accepted" }
        ]
    };
    Friend.find().and(query).exec(function (err, docs) {
        if (err) {
            res.send(err);
        } else {
            var users = docs.map(function (elem) {
                return (elem.target == userWebId) ? elem.requester : elem.target;
            }, this)

            res.send(users)

        }
    })
}

)


router.post("/friends/list/pending", async (req, res) => {

    const userWebId = req.body.webId
    var query = {
        "target": userWebId, "status": "pending"
    };
    Friend.find().and(query).exec(function (err, docs) {
        if (err) {
            res.send(err)
        } else {
            var users = docs.map(function (elem) {
                return (elem.target == userWebId) ? elem.requester : elem.target;
            }, this)

            res.send(users)
        }
    })
})




// get friends locations
router.post("/friends/locations/", async (req, res) => {

    const userWebId = req.body.webId
    var query = {
        $and: [
            {
                $or: [
                    { "requester": userWebId },
                    { "target": userWebId }
                ]
            },
            { "status": "accepted" }
        ]
    };

    Friend.find().and(query).exec(function (err, docs) {
        if (err) {
            res.send(err)
        } else {
            var users = docs.map(function (elem) {
                return (elem.target == userWebId) ? elem.requester : elem.target;
            }, this)

            Location.find({ 'user': { $in: users } }, function (err, docs) {
                if (err) {
                   // console.log("Error al encontrar los usuarios dados los amigos")
                } else {
                    res.send({ "locs": docs });
                }
            })
        }
    })
})





// Mensajes ------------------------------------------------ /msg
router.post("/msg/add", async (req, res) => {

    let from = req.body.from
    let to = req.body.to
    let msg = req.body.msg

    let newMsg = new Chat({
        from: from,
        to: to,
        msg: msg
    })
    await newMsg.save()
})

router.post("/msg/list", async (req, res) => {
    let from = req.body.from
    let to = req.body.to
    var query = {
        $or: [
            { "from": from, "to": to },
            { "from": to, "to": from }
        ]
    }

    await Chat.find(query, null, { sort: '-time' }, function (err, msgs) {
        if (err) {
            res.send(err)
        }
        else {
            res.send(msgs)
        }
    })

})

// Meets ------------------------------------------------------------------------/
router.post("/meets/add", async (req, res) => {
    let creator_webid = req.body.creator_webId;
    let location = req.body.location;
    let state = req.body.state;
    let country = req.body.country;
    let date = req.body.date;
    let time = req.body.time;
    let meetName = req.body.name;

    // Check if the user is already in the db
    let creator = await User.findOne({ webId: creator_webid });
    // If it exists, then we'll update it

    if (creator) {
        let newEntry = await Meet.findOne({ creator: creator_webid, location: [location.lat, location.lng] })
        if (!newEntry) {
            newEntry = new Meet({
                creator: creator_webid,
                location: [location.lat, location.lng],
                state: state,
                country: country,
                attendances: [],
                date: date,
                time: time,
                name: meetName,
            });

            await newEntry.save();
            res.send(newEntry);
        } else {
            res.send({ error: "Error: Ya existe esta reunioni" })
        }
    } else {
        res.send({ error: "Error: Este usuario no existe" + creator_webid })
    }
});

router.post("/meets/remove/attendance", async (req, res) => {
    let user = req.body.asistenteWebId;
    let meetId = req.body.meetId;
    query = {
        _id: mongoose.Types.ObjectId(meetId)
    }
    let meet = await Meet.findOne(query);
    if (meet) {
        const index = meet.attendances.indexOf(user);
        if (index > -1) {
            meet.attendances.splice(index, 1);
        }

        await Meet.findOneAndUpdate(query, meet, function (err, doc) {
            if (err) {
               // console.log("No se pudo actualizar la lista de asistentes!");
            } else {
                res.send(meet)
            }
        });
    } else {
        res.send({ error: "Error: No se pudo crear el meet" + meetId })

    }



})

router.post("/meets/assist", async (req, res) => {
    let user = req.body.asistenteWebId;
    let meetId = req.body.meetId;
    query = {
        _id: mongoose.Types.ObjectId(meetId)
    }
    let meet = await Meet.findOne(query);

    if (meet) {
        let asiste = false;
        meet.attendances.map((asistente) => {
            if (asistente == user) {
                asiste = true
            }
        })

        if (!asiste) {
            meet.attendances.push(user)
        }


        await Meet.findOneAndUpdate(query, meet, function (err, doc) {
            if (err) {
                //console.log("No se pudo actualizar la lista de asistentes!");
            } else {
                //console.log(doc);
                res.send(meet)
            }
        });
    } else {
        res.send({ error: "Error: No se pudo crear el meet" + meetId })

    }



})

router.post("/meets/details", async (req, res) => {
    let id = mongoose.Types.ObjectId(req.body.meetId);

    let meet = await Meet.findOne({
        "_id": id
    });

    if (meet) {
        res.send(meet);
    } else {
        res.send({
            "error": "No se ha podido obtener el meet"
        });
    }
});

//busca entre los meets creados por el usuario + los meets creados por sus amigos
router.post("/meets/find", async (req, res) => {
    let user = req.body.userWebId;
    // Check if the user is already in the db
    let creator = await User.findOne({ webId: user });

    let meets = []

    queryForUser = {
        creator: (user)
    }
    Meet.find().and(queryForUser).exec(function (err, meetsUser) {
        if (err) {
            //console.log("No se ha podido procesar la peticion de los meets para el usuairo")
        }
        else {
            meetsUser.map(function (meet) {
                meets.push(meet)
            })

            var queryForFriends = {
                $and: [
                    {
                        $or: [
                            { "requester": user },
                            { "target": user }
                        ]
                    },
                    { "status": "accepted" }
                ]
            };

            //Encuentra los amigos
            Friend.find().and(queryForFriends).exec(function (err, docs) {
                if (err) {
                    //console.log("Error al encontrar los amigos");
                } else {
                    var friends = docs.map(function (elem) {
                        return (elem.target == user) ? elem.requester : elem.target;
                    }, this)
                    //buscar meets creados por esos amigos:

                    let queryForFirends = {
                        creator: friends
                    }

                    Meet.find().and(queryForFirends).exec(function (err, meetsFriends) {
                        if (err) {
                            //console.log("No se han podido procesar los meets para los amigos")
                        }
                        else {
                            meetsFriends.map(function (meet) {
                                meets.push(meet)
                            })

                            res.send(meets)
                        }
                    })
                }
            })

            //res.send(meets)


        }
    })


});

// Obtener toda la información de un meet
router.post("/meets/delete", async (req, res) => {

    let meets_ids = []
    req.body.meetsIds.forEach(id => {
        meets_ids.push(mongoose.Types.ObjectId(id))
    });

    let query = { _id: { $in: meets_ids } }
    await Meet.deleteMany(query, function (err, result) {
        if (err) {
            res.send(err)
        } else {
            res.send(result)
        }
    });
});

module.exports = router