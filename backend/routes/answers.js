const express = require('express');
const { generateAnswer } = require('../controllers/aiController');
const router = express.Router();

// POST /api/answers
router.post('/', async (req, res) => {
  try {
    const { category, ratings } = req.body;

    if (!category || !ratings || !Array.isArray(ratings)) {
      return res.status(400).json({ error: 'Category and ratings array required' });
    }

    const averageRating = ratings.reduce((a, b) => a + b) / ratings.length;
    const answer = await generateAnswer(category, averageRating);

    res.json({
      answer,
      averageRating,
      ratings,
      category
    });
  } catch (error) {
    console.error('Error generating answer:', error);
    res.status(500).json({ error: 'Failed to generate answer' });
  }
});

module.exports = router;
