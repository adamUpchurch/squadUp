module.exports = {
    list: (req, res) => { // Return List of all squads
        res.send('NOT IMPLEMENTED: Squad list')
    },
    detail: (req, res) => { // Render detail of specific squad
        res.send('NOT IMPLEMENTED: Squad detail')
    },
    create_get: (req, res) => { // Render form to create squad
        res.send('NOT IMPLEMENTED: Squad create_get')
    },
    create: (req, res) => { // Post squad to DB
        res.send('NOT IMPLEMENTED: Squad create_post')
    },
    delete_get: (req, res) => { // Render confirmation to delete squad
        res.send('NOT IMPLEMENTED: Squad delete_get')
    },
    delete: (req, res) => { // Post confirmed delete to DB
        res.send('NOT IMPLEMENTED: Squad delete_post')
    },
    update_get: (req, res) => { // Render form to update squad
        res.send('NOT IMPLEMENTED: Squad update_get')
    },
    update: (req, res) => { // Post updates to squad
        res.send('NOT IMPLEMENTED: Squad update_post')
    }
}