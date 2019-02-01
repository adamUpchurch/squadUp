var {Streamer} = require('../models/streamerModel')

module.exports = {
    list:(req, res) => { // Return List of all streamers
        Streamer.find()
            .then(streamers => res.send(streamers), e => res.status(400).send(e))
    },
    detail:(req, res) => { // Render detail of specific streamer
        // How do I catch if id is the right format but none is found?
        var streamer_id = req.params.streamer_id
        console.log('Finding by id: ' + streamer_id)
        Streamer.findById(streamer_id)
            .then(streamer => res.send(streamer))
            .catch(error => res.status(400).send())
    },
    register_get:(req, res) => { // TODO: Render form to create streamer
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
    delete_get:(req, res) => { // TODO: Render confirmation to delete streamer
        res.send('NOT IMPLEMENTED: streamer delete_get')
    },
    delete:(req, res) => { // TODO: Post confirmed delete to DB
        res.send('NOT IMPLEMENTED: streamer delete_post')
    },
    update_get:(req, res) => { // TODO: Render form to update streamer
        res.send('NOT IMPLEMENTED: streamer update_get')
    },
    update:(req, res) => { // TODO: Post updates to streamer
        res.send('NOT IMPLEMENTED: streamer update_post')
    }
}