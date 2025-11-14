import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="py-12 px-4 text-center text-white bg-gradient-to-r from-gray-800 to-black"
    >
      <div className="max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg font-inter mb-4"
        >
          &copy; 2024 Human Centric AI. All rights reserved.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-sm text-gray-300 font-inter"
        >
          Empowering youth through AI-driven emotional awareness and personal growth.
        </motion.p>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4, type: 'spring' }}
          className="mt-6 flex justify-center space-x-4"
        >
          <span className="text-2xl">🧠</span>
          <span className="text-2xl">💡</span>
          <span className="text-2xl">🌱</span>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
