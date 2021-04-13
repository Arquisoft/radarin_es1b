const express = require("express")
const User = require("./models/users")
const Location = require("./models/locations")
const Friend = require("./models/friends")
const Meet = require("./models/meets")
const router = express.Router()
const mongoose = require("mongoose")

// Get all users
router.get("/users/list", async (req, res) => {
    const users = await User.find({}).sort('-_id') //Inverse order
    res.send(users)
})

//register a new user
router.post("/users/add", async (req, res) => {

    let nombre = req.body.nombre;
    let webId = req.body.webId;

    //Check if the device is already in the db
    let user = await User.findOne({ webId: webId })
    if (user)
        res.send({ error: "Error: This user is already registered" + webId })
    else {
        user = new User({
            webId: webId,
            nombre: nombre
        })
        await user.save()
        res.send(user)
    }
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

    let friendship = await Friend.findOne(query, function (err) {
        if (err) {
            console.log("Error, amistad existente")
        }
        else {
            console.log("Acedida amistad: " + userWebId + "; " + friendWebId)
            success = true;
        }
    })
    if (success) {
        res.send(friendship)
    }
    else {
        res.send(null)
    }
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
    // post peticiones pendientes
    /* router.post("/friends/pending/requester", async (req, res) => {
    
        const userWebId = req.body.userWebId
        var query = { 
             "requester": userWebId, "status": "pending"  
        };
    
        var friends =  await Friend.find((query, function(err, docs) {
            if (err) {
                console.log("Error al encontrar los amigos");
            } else {
                return docs;
            }
        }))
    
    
        var users = friends.map(function(elem) {
            return elem.target;
        })
    
        await User.find({'webId' : { $in: users}}, function(err, docs){
            if(err) {
                console.log("Error al encontrar los usuarios dados los amigos")
            } else {
                var webIds=docs.map((doc) => { return doc.webId})
                res.send(webIds);
            }
        })*/
    }); 


    // post peticiones para aceptar
    router.post("/friends/pending/target", async (req, res) => {

        const userWebId = req.body.userWebId
        var query = {
            "target": userWebId, "status": "pending"
        };

        var friends = await Friend.find((query, function (err, docs) {
            if (err) {
                console.log("Error al encontrar los amigos");
            } else {
                return docs;
            }
        }))


        var users = friends.map(function (elem) {
            return elem.requester;
        })

        await User.find({ 'webId': { $in: users } }, function (err, docs) {
            if (err) {
                console.log("Error al encontrar los usuarios dados los amigos")
            } else {
                var webIds = docs.map((doc) => { return doc.webId })
                res.send(webIds);
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
                console.log(webIds)
                res.send(webIds);
            }
        })
    });



    //buscar a una persona 
    router.post("/users/search/name", async (req, res) => {
        const str = req.body.str
        var query =
            { "nombre": { '$regex': str } }
            ;
        await User.find(query, function (err, docs) {
            if (err) {
                console.log("Error al encontrar los usuarios dados los amigos")
            } else {
                var webIds = docs.map((doc) => { return doc.webId })
                console.log(webIds)
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
                console.log(users)
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
                console.log(users)
                console.log("Peticiones: " + users)
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
                console.log(users)

                Location.find({ 'user': { $in: users } }, function (err, docs) {
                    if (err) {
                        console.log("Error al encontrar los usuarios dados los amigos")
                    } else {
                        console.log(docs);
                        res.send({ "locs": docs });
                    }
                })
            }
        })


    })


    // Meets ------------------------------------------------------------------------/
    router.post("/meets/add", async (req, res) => {
        let creator_webid = req.body.creator_webId;
        let location = req.body.location;
        let state = req.body.state;
        let country = req.body.country;
        // Check if the user is already in the db
        let creator = await User.findOne({ webId: creator_webid });
        // If it exists, then we'll update it


        if (creator) {
            let newEntry = await Meet.findOne({ creator: creator._id, location: [location.lat, location.lng] })

            console.log("Alla")
            if (!newEntry) {
                console.log(creator._id)
                newEntry = new Meet({
                    user: mongoose.Types.ObjectId(creator._id),
                    location: [location.lat, location.lng],
                    state: state,
                    country: country,
                    attendances: []
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


    module.exports = router