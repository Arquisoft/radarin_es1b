const express = require("express")
const User = require("./models/users")
const Location = require("./models/locations")
const Friend = require("./models/friends")
const Meet = require("./models/meets")
const Chat = require("./models/chats")
const router = express.Router()
const mongoose = require("mongoose")


// Devuelve la lista de usuarios
router.get("/users/list", async (req, res) => {
    const users = await User.find({}).sort('-_id') //Inverse order
    res.send(users)
})

//register a new user
router.post("/users/add", async (req, res) => {

    let nombre = req.body.nombre;
    let webId = req.body.webId;
    let admin = req.body.admin;
    let status = req.body.status;

    //Check if the device is already in the db
    let user = await User.findOne({ webId: webId })
    if (user) {
        res.send({ error: "Error: This user is already registered" + webId })
    }
    else {
        user = new User({
            webId: webId,
            nombre: nombre,
            admin: admin,
            status: status,
            ban: "false"
        })
        await user.save()
        console.log("usuario añadido con exito")
        res.send(user)
    }
})

//cambia el estado de una persona
router.post("/users/status/update", async (req, res) => {

    let webId = req.body.webId;

    //console.log("El usuario para cambiar estado es " + webId)

    let status = req.body.status;

    let user2 = await User.findOne({ webId: webId })

    if (user2) {
        var query = { "_id": user2._id };
        user2.status = status

        await User.findOneAndUpdate(query, user2, function (err, doc) {
            if (err) {
                //console.error("Something wrong when updating data!");
            } else {
                //console.log(doc);
            }
        });
    }


    await user2.save();
    res.send(user2);

})

//borra un usuario
router.post("/users/remove", async (req, res) => {

    let userWebId = req.body.webId

    let deleted = await User.deleteOne({ webId: userWebId }, function (err) {
        if (err) {

        } else {

        }
    });

    res.send(deleted)

})


//cambia el estado de una persona
router.post("/users/ban", async (req, res) => {

    let webId = req.body.webId;

    let baneable = req.body.ban;

    let user2 = await User.findOne({ webId: webId })

    if (user2) {
        var query = { "_id": user2._id };
        user2.ban = baneable

        await User.findOneAndUpdate(query, user2, function (err, doc) {
            if (err) {
                //console.error("Something wrong when updating data!");
            } else {
                //console.log(doc);
            }
        });
    }

    await user2.save();
    res.send(user2);

})

router.post("/users/add/admin", async (req, res) => {

    let webId = req.body.webId;

    let admin = req.body.admin;

    let user2 = await User.findOne({ webId: webId })

    if (user2) {
        var query = { "_id": user2._id };
        user2.admin = admin

        await User.findOneAndUpdate(query, user2, function (err, doc) {
            if (err) {
                //console.error("Something wrong when updating data!");
            } else {
                //console.log(doc);
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
        console.log("Actualizada ubicacion del usuario")
        await Location.findOneAndUpdate(query, newEntry, function (err, doc) {
            if (err) {
                console.log("Something wrong when updating data!");
            } else {
                console.log(doc);
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

        


        await newEntry.save();
        res.send(newEntry);
    }
});


//Solicitud de amistad
router.post("/friends/add", async (req, res) => {
    console.log("Añadiendo amigos desde restApi")
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
        console.log("Amistad añadida!: " + userWebId + "; " + friendWebId);

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

    let friendship = await Friend.findOne(query, function (err, friends) {
        if (err) {
            console.log("Error, amistad existente")
            res.send(null)
        }
        else {
            console.log("Acedida amistad: " + userWebId + "; " + friendWebId)
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
            console.log("Something wrong when deleting friendship!");
        } else {
            console.log("Amistad eliminada!: " + userWebId + "; " + friendWebId);
        }
    });

    res.send(friendship)
})


router.post("/friends/accept", async (req, res) => {

    let userWebId = req.body.webId
    let target = req.body.target
    console.log("Aceptando solicitud para " + userWebId)
    var query = {
        "requester": userWebId, "target": target
    }

    let oldFriendship = await Friend.findOne(query);

    if (oldFriendship) {
        console.log("Encontrada solicitud!")
        oldFriendship.status = "accepted"
        let friendship = await Friend.findOneAndUpdate(query, oldFriendship, function (err) {
            if (err) {
                console.log("Something wrong when accepting friendship!");
            } else {
                console.log("Amistad acceptada!: " + userWebId + "; " + target);

            }
        });
    } else {
        console.log("No existe esa peticion")
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
            console.log("Error al encontrar los amigos");
        } else {
            var users = docs.map(function (elem) {
                return elem.target;
            }, this)


            res.send(users)
        }
    })
});


//buscar a una persona 
router.post("/users/search/", async (req, res) => {
    const userWebId = req.body.webID
    var query = {

        "webId": userWebId
    };
    console.log(userWebId)
    await User.find(query, function (err, docs) {
        if (err) {
            console.log("Error al encontrar los usuarios dados los amigos")
        } else {
            var webIds = docs.map((doc) => { return doc.webId })

            res.send(webIds);
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
            console.log("Error al encontrar los usuarios dados los amigos")
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

            console.log("ESTE ADMIN HA SIDO ENCONTRADO " + webIds)

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
        "ban": "false"
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
            console.log("Error al encontrar los amigos");
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
            console.log("Error al encontrar los amigos");
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
            console.log("Error al encontrar los amigos");
        } else {
            var users = docs.map(function (elem) {
                return (elem.target == userWebId) ? elem.requester : elem.target;
            }, this)
            //console.log(users)

            Location.find({ 'user': { $in: users } }, function (err, docs) {
                if (err) {
                    console.log("Error al encontrar los usuarios dados los amigos")
                } else {
                    //console.log(docs);
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
    console.log("Mensaje enviado" + "/n" + msg + "/n. ");
})

router.post("/msg/list", async (req, res) => {
    let from = req.body.from
    let to = req.body.to
    console.log(from)
    console.log(to)
    var query = {
        $or: [
            { "from": from, "to": to },
            { "from": to, "to": from }
        ]
    }

    await Chat.find(query, null, { sort: '-time' }, function (err, msgs) {
        if (err) {
            console.log("Error al obtener mensajes")
            res.send(null)
        }
        else {
            console.log(msgs)
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
    // Check if the user is already in the db
    console.log("Añadiendo meet")
    let creator = await User.findOne({ webId: creator_webid });
    // If it exists, then we'll update it

    if (creator) {
        console.log("Comprobado si existe...")
        let newEntry = await Meet.findOne({ creator: creator_webid, location: [location.lat, location.lng] })
        if (!newEntry) {
            console.log(creator._id)
            newEntry = new Meet({
                creator: creator_webid,
                location: [location.lat, location.lng],
                state: state,
                country: country,
                attendances: [],
                date: date,
                time: time
            });

            await newEntry.save();
            console.log("Meet Nuevo: " + newEntry)
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

    console.log("EE")
    if (meet) {

        console.log("Eliminando asistencia")
        const index = meet.attendances.indexOf(user);
        if (index > -1) {
            meet.attendances.splice(index, 1);
        }

        await Meet.findOneAndUpdate(query, meet, function (err, doc) {
            if (err) {
                console.log("No se pudo actualizar la lista de asistentes!");
            } else {
                console.log(doc);
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
                console.log("No se pudo actualizar la lista de asistentes!");
            } else {
                //console.log(doc);
                res.send(meet)
            }
        });
    } else {
        res.send({ error: "Error: No se pudo crear el meet" + meetId })

    }


    


})

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
            console.log("No se ha podido procesar la peticion de los meets para el usuairo")
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
                    console.log("Error al encontrar los amigos");
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
                            console.log("No se han podido procesar los meets para los amigos")
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
router.post("/meets/details", async (req, res) => {
    let id = mongoose.Types.ObjectId(req.body.meetId);

    let meet = await Meet.findOne({
        "_id" : id
    });

    if (meet) {
        res.send(meet);
    } else {
        res.send({
            "error" : "No se ha podido obtener el meet"
        });
    }
});

module.exports = router