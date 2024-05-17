const express = require('express');
const router = express.Router();
const Request = require('../models/request');

// Endpoint para criar uma nova solicitação
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ msg: 'Please enter all fields' });
    }

    try {
        const newRequest = await Request.create({ name, email, message });
        res.json(newRequest);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

// Endpoint para obter todas as solicitações
router.get('/', async (req, res) => {
    try {
        const requests = await Request.findAll();
        res.json(requests);
    } catch (err) {
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;
