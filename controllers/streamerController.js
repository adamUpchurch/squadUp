var {Streamer} = require('../models/streamerModel')

module.exports = {
    list:(req, res) => { // Return List of all streamers
        Streamer.find()
            .then(streamers => res.send(streamers), e => res.status(400).send(e))
    },
    detail:(req, res) => { // Render detail of specific streamer
        res.send('NOT IMPLEMENTED: streamer detail')
    },
    register_get:(req, res) => { // Render form to create streamer
        res.send('NOT IMPLEMENTED: streamer register_get')
    },
    register:(req, res) => { // Post streamer to DB
        var his = req.body
        var newStreamer = new Streamer({
            "email": his.email,
            "twitch.streamerName": his.streamerName,
            "password": his.password
        })

        newStreamer.save()
            .then(savedStreamer => res.send(savedStreamer), e => res.status(400).send(e, newStreamer))
    },
    delete_get:(req, res) => { // Render confirmation to delete streamer
        res.send('NOT IMPLEMENTED: streamer delete_get')
    },
    delete:(req, res) => { // Post confirmed delete to DB
        res.send('NOT IMPLEMENTED: streamer delete_post')
    },
    update_get:(req, res) => { // Render form to update streamer
        res.send('NOT IMPLEMENTED: streamer update_get')
    },
    update:(req, res) => { // Post updates to streamer
        res.send('NOT IMPLEMENTED: streamer update_post')
    }
}