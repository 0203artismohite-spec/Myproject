import { motion } from 'framer-motion';

const Response = ({ insight }) => {
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
          className="text-xl text-gray-800 font-inter leading-relaxed"
        >
          {insight}
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.9, duration: 0.4, type: 'spring' }}
          className="mt-6 text-4xl"
        >
          🌟
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Response;
