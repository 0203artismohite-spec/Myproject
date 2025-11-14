import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const QuestionnaireModal = ({ category, questions, onSubmit, onClose }) => {
  const [ratings, setRatings] = useState(Array(questions.length).fill(0));
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    setRatings(Array(questions.length).fill(0));
    setCurrentQuestion(0);
  }, [category, questions.length]);

  const handleRatingChange = (rating) => {
    const newRatings = [...ratings];
    newRatings[currentQuestion] = rating;
    setRatings(newRatings);

    if (currentQuestion < questions.length - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 500);
    }
  };

  const handleSubmit = () => {
    if (ratings.includes(0)) {
      alert('Please rate all questions.');
      return;
    }
    onSubmit(ratings);
  };

  const trendyQuestions = {
    spiritual: [
      "Yo, how zen is your aura today? 🌟",
      "Rate your inner peace vibes on a scale of 1-5! 🧘‍♀️",
      "How often do you slay that meditation game? ✨"
    ],
    motivational: [
      "How fired up are you to crush your goals today? 🚀",
      "Rate your boss-level motivation right now! 💪",
      "How confident are you in your glow-up journey? 🌟"
    ],
    trendy: [
      "How lit is your energy today? 🔥",
      "Rate your trendsetter status! 👑",
      "How up-to-date are you with the latest vibes? 🌊"
    ],
    emotional: [
      "How stable are your feels today? 💖",
      "Rate your emotional glow-up! ✨",
      "How well do you handle that drama? 🌈"
    ],
    relationship: [
      "How connected are you to your squad? 🤝",
      "Rate your empathy game! ❤️",
      "How satisfied are you with your social life? 🌟"
    ],
    career: [
      "How focused are you on your career glow-up? 💼",
      "Rate your stress-busting skills! 🛡️",
      "How balanced is your work-life vibe? ⚖️"
    ]
  };

  const displayQuestions = trendyQuestions[category] || questions;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 50 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.8, opacity: 0, y: 50 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 max-w-lg w-full mx-4 shadow-2xl border border-gray-200"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent font-poppins"
          >
            Let's Get Real! 💫
          </motion.h2>

          <div className="mb-6">
            <div className="flex justify-center mb-4">
              {displayQuestions.map((_, index) => (
                <motion.div
                  key={index}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    index <= currentQuestion ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gray-300'
                  }`}
                  animate={index === currentQuestion ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 0.5, repeat: index === currentQuestion ? Infinity : 0 }}
                />
              ))}
            </div>
            <motion.p
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="text-lg text-gray-700 mb-6 text-center font-medium"
            >
              {displayQuestions[currentQuestion]}
            </motion.p>
          </div>

          <div className="flex justify-center space-x-2 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`text-4xl transition-all duration-200 ${
                  ratings[currentQuestion] >= star ? 'text-yellow-400 scale-110' : 'text-gray-300 hover:text-yellow-300'
                }`}
                onClick={() => handleRatingChange(star)}
              >
                {ratings[currentQuestion] >= star ? '⭐' : '☆'}
              </motion.button>
            ))}
          </div>

          {currentQuestion === displayQuestions.length - 1 && !ratings.includes(0) && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Reveal My Insight ✨
            </motion.button>
          )}

          <div className="text-center mt-4 text-sm text-gray-500">
            Question {currentQuestion + 1} of {displayQuestions.length}
          </div>

        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default QuestionnaireModal;
