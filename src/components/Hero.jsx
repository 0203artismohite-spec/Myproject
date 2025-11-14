import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.header
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="text-center py-20 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white"
    >
      <motion.h1
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: 0.3, duration: 0.8, type: 'spring' }}
        className="text-6xl font-bold mb-4 font-poppins"
        style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}
      >
        Human Centric AI
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-2xl font-inter"
      >
        Decode your emotions. Redefine your mind.
      </motion.p>
    </motion.header>
  );
};

export default Hero;
