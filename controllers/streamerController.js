module.exports = {
    list:(req, res) => { // Return List of all streamers
        res.send('NOT IMPLEMENTED: streamer list')
    },
    detail:(req, res) => { // Render detail of specific streamer
        res.send('NOT IMPLEMENTED: streamer detail')
    },
    register_get:(req, res) => { // Render form to create streamer
        res.send('NOT IMPLEMENTED: streamer register_get')
    },
    register:(req, res) => { // Post streamer to DB
        res.send('NOT IMPLEMENTED: streamer create_post')
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