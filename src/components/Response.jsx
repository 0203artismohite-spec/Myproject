import { useState } from 'react';
import { motion } from 'framer-motion';

const Response = ({ insight }) => {
  const [userRating, setUserRating] = useState(0);
  const [hasRated, setHasRated] = useState(false);

  const handleRating = (rating) => {
    setUserRating(rating);
    setHasRated(true);
    // Here you could send the rating to the backend if needed
    console.log('User rated the response:', rating);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, type: 'spring' }}
      className="py-16 px-4"
    >
      <div className="max-w-3xl mx-auto bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl p-10 text-center border border-gray-200">
        <motion.h2
          initial={{ scale: 0.8, rotate: -5 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.3, duration: 0.6, type: 'spring' }}
          className="text-4xl font-bold mb-8 text-gray-800 font-poppins"
        >
          Your Personalized Insight ✨
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-xl text-gray-800 font-inter leading-relaxed mb-8"
        >
          {insight}
        </motion.p>

        {/* Ratings Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mb-6"
        >
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            How helpful was this insight?
          </h3>
          <div className="flex justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <motion.button
                key={star}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`text-3xl transition-all duration-200 ${
                  userRating >= star ? 'text-yellow-400 scale-110' : 'text-gray-300 hover:text-yellow-300'
                }`}
                onClick={() => handleRating(star)}
                disabled={hasRated}
              >
                {userRating >= star ? '⭐' : '☆'}
              </motion.button>
            ))}
          </div>
          {hasRated && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-gray-600 mt-2"
            >
              Thanks for your feedback! ⭐
            </motion.p>
          )}
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, duration: 0.4, type: 'spring' }}
          className="text-4xl"
        >
          🌟
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Response;
