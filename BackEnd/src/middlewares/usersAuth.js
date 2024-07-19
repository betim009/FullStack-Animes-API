const jwt = require('jsonwebtoken');
const secretKey = '123'; // Defina sua chave secreta aqui

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Token not provided' });
    }

    try {
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(403).json({ message: 'Invalid token' });
    }
};

module.exports = authenticateJWT;
