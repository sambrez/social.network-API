const { Schema, model } = require('mongoose');
const formatDate = require('../utils/helpers');
const reactionSchema = require('./Reaction');

// schema to create model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 1,
            max_length: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (date) => formatDate(date)
        },
        username: {
            type: String,
            required: true
        },
        reactions: [reactionSchema],
    },
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
        id: false
    }
);

// creates virtual reactionCount property
thoughtSchema
.virtual('reactionCount')
.get(function () {
    return this.reactions.length;
});

// initializes the model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;