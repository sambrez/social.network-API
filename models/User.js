const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            unique: true,
            required: true,
            match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/]
        },
        thoughts: [
            {
              type: Schema.Types.ObjectId,
              ref: 'Thought',
            },
          ],
          friends: [
            {
              type: Schema.Types.ObjectId,
              ref: 'User',
            },
          ],
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

// creates virtual friendCount property
userSchema
.virtual('friendCount')
.get(function () {
    return this.friends.length;
});

// initializes the model
const User = model('user', userSchema);

module.exports = User;