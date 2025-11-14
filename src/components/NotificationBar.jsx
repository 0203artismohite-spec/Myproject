import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NotificationBar = () => {
  const messages = [
    "Hey there! Ready to decode your emotions? 🌟",
    "Feeling a vibe? Let's explore your inner world! 💫",
    "Your emotional journey starts here! 🚀",
    "Unlock your mind's potential today! 🧠✨",
    "Time to level up your emotional game! 🔥"
  ];

  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMessage((prev) => (prev + 1) % messages.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentMessage}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-center font-medium"
          >
            {messages[currentMessage]}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NotificationBar;
