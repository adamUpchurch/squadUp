const mongoose      = require('mongoose');

var Schema = mongoose.Schema;

var SquadSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    gamers: [{
            type: Schema.Types.ObjectId,
            ref: 'Streamer',
            required: true
    }],
    img: {
        type: String,
    },
    isFeatured: Boolean,
    game: String,
    squad: {
        type: Schema.Types.ObjectId,
        ref: 'Squad'
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'Streamer',
        required: true
    }

})

module.exports.Squad = mongoose.model('Squad', SquadSchema)