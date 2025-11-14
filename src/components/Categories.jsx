import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Categories = ({ onCategorySelect }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/categories');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching categories:', err);
        // Fallback to static categories if backend is not available
        setCategories([
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
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);
  if (loading) {
    return (
      <section className="py-16 px-4">
        <div className="text-center text-white">
          <p>Loading categories...</p>
        </div>
      </section>
    );
  }

  if (error) {
    console.warn('Using fallback categories due to error:', error);
  }

  return (
    <section className="py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12 text-white font-poppins"
      >
        Choose Your Path
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto justify-items-center">
        {categories.map((category, index) => (
          <motion.div
            key={category.key}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.6, type: 'spring' }}
            animate={{
              y: [0, -15, 0],
              transition: { repeat: Infinity, duration: 2.5, delay: index * 0.3, ease: 'easeInOut' }
            }}
            whileHover={{ scale: 1.15, y: -25 }}
            whileTap={{ scale: 0.9 }}
            className={`w-64 h-64 bg-gradient-to-br ${category.color} p-6 rounded-xl shadow-xl cursor-pointer border-2 border-white border-opacity-20 flex flex-col items-center justify-center`}
            onClick={() => onCategorySelect(category.key)}
          >
            <motion.h3
              className="text-xl font-bold mb-2 text-white font-inter text-center"
              whileHover={{ scale: 1.05 }}
            >
              {category.title}
            </motion.h3>
            <p className="text-white text-opacity-90 text-center text-sm">{category.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Categories;
