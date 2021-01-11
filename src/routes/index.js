const express = require('express');
const router = express.Router();

const route = router.get('/', (req, res, next) => {
    res.status(200).send({
        title: 'API Rest - CRUD',
        version: "1.1.1"
    });
});

module.exports = router;