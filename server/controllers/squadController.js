var {Squad} = require('../models/squadModel')

module.exports = {
    list: (req, res) => {
        Squad.find()
            .then(squad => res.send(squad), e => res.status(400).send(e))
    },
    login: () => {
        
    },
    detail: (req, res) => { // Render detail of specific squad
        // How do I catch if id is the right format but none is found?
        var squad_id = req.params.squad_id
        console.log('Finding by id: ' + squad_id)
        Squad.findById(squad_id)
            .then(squad => res.send(squad))
            .catch(error => res.status(400).send())
    },
    create_get: (req, res) => { // TODO: Render form to create squad
        res.send('NOT IMPLEMENTED: Squad create_get')
    },
    create: (req, res) => { // Post squad to DB
        var their = req.body
        var newSquad = new Squad({
            "name": their.name,
            "admin": their.admin,
            "members": their.members
        })

        newSquad.save()
            .then(savedSquad => res.send(savedSquad), e => res.status(400).send(e, newSquad))
    },
    delete_get: (req, res) => { // TODO: Render confirmation to delete squad
        res.send('NOT IMPLEMENTED: Squad delete_get')
    },
    delete: (req, res) => { // TODO: Post confirmed delete to DB
        var squad_id = req.params.squad_id
        console.log('Finding by id: ' + squad_id)
        Squad.findByIdAndDelete(squad_id)
            .then(squad => res.send(squad))
            .catch(error => res.status(400).send())
    },
    update_get: (req, res) => { // TODO: Render form to update squad
        res.send('NOT IMPLEMENTED: Squad update_get')
    },
    update: (req, res) => { // TODO: Post updates to squad
        var squad_id = req.params.squad_id
        console.log('Finding by id: ' + squad_id)
        Squad.findByIdAndUpdate(squad_id)
            .then(squad => res.send(squad))
            .catch(error => res.status(400).send())
    
    }
}