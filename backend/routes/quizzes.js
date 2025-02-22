const express = require('express');
const router = express.Router();
const User = require('../models/User');


router.get('/quizzes', async (req, res) => {
  try {
   
    const users = await User.find({}, { user: 1, password: 1 }); 
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

