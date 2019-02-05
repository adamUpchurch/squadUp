const   mongoose    = require('mongoose'),
        validator   = require('validator');

var Schema = mongoose.Schema;

var StreamerSchema = new Schema({
    twitch: {
        display_name: String,
        _id: Number,
        name: String,
        bio: String,
        logo: String,
        email: String,
    },
    squad: {
        type: Schema.Types.ObjectId,
        ref: 'Squad'
    },
    isStreaming: {
        currently: Boolean,
        with: [String],
        featured: Boolean,
        game: String,
        isMature: Boolean,

    },
    info: {
        log_ins: {
            type: Number,
            default: 0
        }
    },
    tokens: [{
        access: {
            type: String,
            require: true
        },
        token: {
            type: String,
            require: true
        }
    }]

})

module.exports.Streamer = mongoose.model('Streamer', StreamerSchema)