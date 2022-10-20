const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  addReaction,
  removeReaction,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
router.route('/:userId').get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/reactions
router.route('/:userId/friends').post(addFriend);

// /api/users/:userId/reactions/:reactionId
router.route('/:userId/friends/:friendsId').delete(removeFriend);

module.exports = router;
