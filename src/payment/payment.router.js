const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.json({ message: 'Payment endpoint' });
});

module.exports = router; 