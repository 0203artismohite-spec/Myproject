import { useState } from 'react';
import { motion } from 'framer-motion';
import NotificationBar from './components/NotificationBar';
import Hero from './components/Hero';
import MindMap from './components/MindMap';
import Categories from './components/Categories';
import QuestionnaireModal from './components/QuestionnaireModal';
import Response from './components/Response';
import Footer from './components/Footer';

const categoriesData = {
  spiritual: {
    questions: [
      "How connected do you feel to your inner self today?",
      "On a scale of 1-5, how peaceful is your mind right now?",
      "How often do you practice mindfulness or meditation?"
    ],
    responses: {
      low: "Embrace the quiet moments; your spirit is awakening. 🌟",
      medium: "You're on a beautiful journey inward. Keep nurturing that peace. 🧘‍♀️",
      high: "Your spiritual glow is shining bright! Share it with the world. ✨"
    }
  },
  motivational: {
    questions: [
      "How motivated are you to chase your dreams today?",
      "Rate your current drive to overcome challenges.",
      "How confident do you feel in achieving your goals?"
    ],
    responses: {
      low: "Every great journey starts with a single step. You've got this! 🚀",
      medium: "Your ambition is building. Keep pushing forward! 💪",
      high: "You're unstoppable! The world is yours to conquer. 🌟"
    }
  },
  trendy: {
    questions: [
      "How 'lit' is your vibe right now?",
      "Rate your current trendiness level.",
      "How up-to-date do you feel with current trends?"
    ],
    responses: {
      low: "Time to level up your energy! Fresh vibes incoming. 🔥",
      medium: "You're catching that wave. Stay trendy! 🌊",
      high: "You're the trendsetter! Keep slaying! 👑"
    }
  },
  emotional: {
    questions: [
      "How stable do you feel emotionally today?",
      "Rate your resilience in handling feelings.",
      "How well do you manage stress?"
    ],
    responses: {
      low: "Emotions are waves; ride them with grace. You're stronger than you know. 🌊",
      medium: "Your emotional balance is improving. Keep nurturing it! 💖",
      high: "You're a beacon of emotional strength! Inspire others. ✨"
    }
  },
  relationship: {
    questions: [
      "How connected do you feel to your loved ones?",
      "Rate your empathy in social interactions.",
      "How satisfied are you with your social life?"
    ],
    responses: {
      low: "Connections grow with time. Reach out; you're valued. 🤝",
      medium: "Your social bonds are strengthening. Cherish them! ❤️",
      high: "You're a master of relationships! Spread that love. 🌈"
    }
  },
  career: {
    questions: [
      "How focused are you on your career goals?",
      "Rate your ability to manage stress at work.",
      "How balanced do you feel in your work-life?"
    ],
    responses: {
      low: "Balance is key. Take a breath; your path is unfolding. 🛤️",
      medium: "Your career momentum is building. Stay focused! 📈",
      high: "You're crushing it! Your success story is inspiring. 🏆"
    }
  }
};

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [ratings, setRatings] = useState([]);
  const [response, setResponse] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setShowModal(true);
    setRatings([]);
    setResponse(null);
  };

  const handleSubmitQuestionnaire = (newRatings) => {
    setRatings(newRatings);
    const averageRating = newRatings.reduce((a, b) => a + b) / newRatings.length;
    let responseKey;
    if (averageRating <= 2) responseKey = 'low';
    else if (averageRating <= 4) responseKey = 'medium';
    else responseKey = 'high';
    setResponse(categoriesData[selectedCategory].responses[responseKey]);
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-gray-800">
      <NotificationBar />
      <div className="pt-12">
        <Hero />
        <MindMap />
        <Categories onCategorySelect={handleCategorySelect} />
        {response && <Response insight={response} />}
        <Footer />
        {showModal && (
          <QuestionnaireModal
            category={selectedCategory}
            questions={categoriesData[selectedCategory].questions}
            onSubmit={handleSubmitQuestionnaire}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
}

export default App;
