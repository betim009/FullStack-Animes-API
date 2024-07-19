const jwt = require('jsonwebtoken');
const connection = require("../db/connection");

const secretKey = '123';

async function selectUser(user) {
    const { email, password } = user;
    try {
        const [[result]] = await connection.execute(
            'SELECT * FROM users WHERE email = ? AND password = ?', [email, password]
        );

        if (!result) {
            return false;
        }

        const userId = result.id
        // Cria um token JWT
        const token = jwt.sign({ userId }, secretKey, { expiresIn: '1h' });

        console.log('token', token)

        return result
    } catch (error) {
        console.error(error);
        return error
    }
};

module.exports = {
    selectUser
};