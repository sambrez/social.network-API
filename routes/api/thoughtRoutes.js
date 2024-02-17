const router = require('express').Router();

const {
    getThoughts,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thoughtController');

// GET all thoughts
router.route('/').get(getThoughts);

// GET a single thought by its _id 
router.route('/:thoughtId').get(getSingleThought);

// POST a new thought
router.route('/').get(getThoughts).post(createThought);

// PUT to update a thought by its _id
router.route('/:thoughtId').get(getSingleThought).put(updateThought);

// DELETE to remove a thought by its _id
router.route('/:thoughtId').get(getSingleThought).delete(deleteThought);

// POST to create a reaction stored in a single thought's reactions array field
router.route('/:thoughtId/reactions').get(getSingleThought).post(createReaction);

// DELETE to pull and remove a reaction by the reaction's reactionId value
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;