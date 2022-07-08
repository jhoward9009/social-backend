const { Schema, model, Types } = require('mongoose');
const date = require('../utils/date');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {

        createdAt:{
            type: Date,
            default: Date.now,
            get: createdAtVal => date (createdAtVal)
        },
        thoughtText: {

                type: String,
                required: true,
                trim: true,
                minlength: 1,
                maxlength: 280
            },
        
        reactions: [reactionSchema],
    },
    {
        toJSON:{
            getters:true,
            virtuals: true
        }
    }
);
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;