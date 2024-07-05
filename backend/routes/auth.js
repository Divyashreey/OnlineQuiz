
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');

router.get('/login', async (req, res) => {
  const { user, password } = req.body;

  try {
   
    const adminUser = await User.findOne({ user });   
    res.json({ message: 'Login successful' });

  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;






