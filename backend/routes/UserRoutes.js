const express = require('express')
const {UserRegistration , listAllUsers , updateUsers ,deleteUser, getUser } = require('../controller/UserController');
const router = express.Router();

router.route('/register').post(UserRegistration);
router.route('/users').get(listAllUsers);
router.route('/updateUser/:name').put(updateUsers);
router.route('/deleteUser/:name').delete(deleteUser);
router.route('/getuser/:name').get(getUser)
module.exports = router;

