const express = require('express');
const { postLogin, getAllUsers } = require('../controllers/users');
const authenticateJWT = require('../middlewares/usersAuth');

const router = express.Router();

router.get('/', authenticateJWT, getAllUsers);
router.post('/login', postLogin);

module.exports = router;