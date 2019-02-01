const   mongoose    = require('mongoose'),
        validator   = require('validator');

var Schema = mongoose.Schema;

var StreamerSchema = new Schema({
    email: {
        type: String,
        required: true,
        minLength: 1,
        trim: true,
        unique: true,
        validate: {
            validator: validator.isEmail,
            message: `{value is not a valid email}`
        }
    },
    twitch: {
        streamerName: {
            type: String,
            minLength: 3,
            trim: true,
            unique: true,
        }
    },
    squad: {
        type: Schema.Types.ObjectId,
        ref: 'Squad'
    },
    password: {
        type: String,
        require: true,
        minLength: 6
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