const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
  res.json({ message: 'Order endpoint' });
});

module.exports = router; 