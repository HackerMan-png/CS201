const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { name } = req.body;
  if (name) {
    return res.status(201).send(`Welcome ${name}`);
  }
  res.status(400).json({ success: false, message: 'Please provide a name' });
});

module.exports = router;
