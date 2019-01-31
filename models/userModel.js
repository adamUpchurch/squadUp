const mongoose      = require('mongoose');


var UserSchema = new mongoose.Schema({
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
        tag: {
            type: String,
            minLength: 1,
            trim: true,
        },
        picture: {
            type: Image
        }
    },
    info: {
        userCreationDate: {
            type: Date,
            default: Date.now
        }
    },
    squad: {
        Name: {
            type: String,
            default: "SQUADUP.gg"
        },
        Members: [{
            type: String
        }]
    },

})