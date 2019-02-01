const mongoose      = require('mongoose');

var Schema = mongoose.Schema;

var SquadSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    admin: [{
            type: Schema.Types.ObjectId,
            ref: 'Streamer',
            required: true
    }],
    members: [{
            type: Schema.Types.ObjectId,
            ref: 'Streamer',
            required: true
    }],
    stream: {
        current: [{
            type: Schema.Types.ObjectId,
            ref: 'Streamer'
        }],
        isActive: {
            type: Boolean,
            default: false
        }
    }
})

module.exports.Squad = mongoose.model('Squad', SquadSchema)