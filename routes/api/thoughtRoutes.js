const router = require('express').Router();

const {} = require('../../controllers/thoughtController');

// GET all thougths
router.route('/').get();

// GET a single thought by its _id 
router.route('/:thoughtId').get();

// POST a new thought:
router.route('/').get().post();

// PUT to update a thought by its _id
router.route('/:thoughtId').get().put();

// DELETE to remove a thought by its _id
router.route('/:thoughtId').delete();

// POST to create a reaction stored in a single thought's reactions array field
router.route('/:thoughtId/reactions').get().post();

// DELETE to pull and remove a reaction by the reaction's reactionId value
router.route('/:thoughtId/reactions/:reactionId').delete();

module.exports = router;