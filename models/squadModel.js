const mongoose      = require('mongoose');

var Schema = mongoose.Schema;

var SquadSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    admin: [{
            type: Schema.Types.ObjectID,
            required: true,
            ref: 'Streamer'
    }],
    members: [{
            type: Schema.Types.ObjectID,
            required: true,
            ref: 'Streamer'
    }],
    stream: {
        current: [{
            type: Schema.Types.ObjectID,
            ref: 'Streamer'
        }],
        isActive: {
            type: Boolean,
            default: false
        }
    }
})

module.exports = mongoose.model('Squad', SquadSchema)