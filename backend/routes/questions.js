const express = require('express');
const { generateQuestions } = require('../controllers/aiController');
const router = express.Router();

// GET /api/questions/:category
router.get('/:category', async (req, res) => {
  try {
    const { category } = req.params;
    const questions = await generateQuestions(category);
    res.json({ questions });
  } catch (error) {
    console.error('Error fetching questions:', error);
    res.status(500).json({ error: 'Failed to generate questions' });
  }
});

module.exports = router;
