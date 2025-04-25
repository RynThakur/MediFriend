const express = require('express');
const router = express.Router();
const Vitals = require('../models/vitals');

router.post('/', async (req, res) => {
  try {
    const vitals = new Vitals(req.body);
    await vitals.save();
    res.status(201).json({ message: 'Vitals saved successfully.' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to save vitals.' });
  }
});

module.exports = router;
