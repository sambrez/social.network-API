const router = require('express').Router();

const {} = require('../../controllers/userController');

// GET all users
router.route('/').get();

// GET a single user by its _id and populated thought and friend data
router.route('/:userId').get();

// POST a new user:
router.route('/').get().post();

// PUT to update a user by its _id
router.route('/:userId').get().put();

// DELETE to remove user by its _id
router.route('/:userId').delete();

// POST to add a new friend to a user's friend list
router.route('/:userId/friends/:friendId').get().post();

// DELETE to remove a friend from a user's friend list
router.route('/:userId/friends/:friendId').delete();

module.exports = router;