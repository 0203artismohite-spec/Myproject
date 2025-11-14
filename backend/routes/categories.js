const express = require('express');
const router = express.Router();

// Static categories data
const categories = [
  {
    key: 'spiritual',
    title: '🌿 Spiritual',
    description: 'Focuses on inner peace & mindfulness',
    color: 'from-emerald-300 to-cyan-400'
  },
  {
    key: 'motivational',
    title: '💪 Motivational',
    description: 'For ambition, self-growth, and courage',
    color: 'from-orange-300 to-red-400'
  },
  {
    key: 'trendy',
    title: '💫 Trendy / Picky',
    description: 'For youth pop-culture & fun tones',
    color: 'from-pink-300 to-purple-400'
  },
  {
    key: 'emotional',
    title: '💖 Emotional Awareness',
    description: 'For emotional stability & resilience',
    color: 'from-purple-300 to-rose-400'
  },
  {
    key: 'relationship',
    title: '🤝 Relationship / Social',
    description: 'For bonding, empathy, and communication',
    color: 'from-blue-300 to-indigo-400'
  },
  {
    key: 'career',
    title: '💼 Career / Stress Management',
    description: 'For goal focus & work-life balance',
    color: 'from-teal-300 to-cyan-400'
  }
];

// GET /api/categories
router.get('/', (req, res) => {
  res.json(categories);
});

module.exports = router;
