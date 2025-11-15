const OpenAI = require('openai');

let openai = null;
if (process.env.OPENAI_API_KEY && process.env.OPENAI_API_KEY !== 'your_openai_api_key_here') {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

// Generate trend-based questions for a category
async function generateQuestions(category) {
  if (!openai) {
    // Fallback questions when OpenAI is not configured
    return [
      `How ${category} are you feeling today?`,
      `Rate your ${category} vibes on a scale of 1-5!`,
      `How often do you slay the ${category} game?`
    ];
  }

  try {
    const prompt = `Generate 3 trendy, fun, and engaging questions for the "${category}" category in a human-centric AI app. The questions should be modern, relatable, and use current slang or trendy language. Make them suitable for a 1-5 star rating system. Return only the 3 questions as a JSON array of strings.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 200,
      temperature: 0.7,
    });

    const questionsText = response.choices[0].message.content.trim();
    // Try to parse as JSON, fallback to splitting by newlines
    try {
      return JSON.parse(questionsText);
    } catch {
      return questionsText.split('\n').filter(q => q.trim()).slice(0, 3);
    }
  } catch (error) {
    console.error('Error generating questions:', error);
    // Fallback questions
    return [
      `How ${category} are you feeling today?`,
      `Rate your ${category} vibes on a scale of 1-5!`,
      `How often do you slay the ${category} game?`
    ];
  }
}

// Generate positive pick-up line answer based on ratings
async function generateAnswer(category, averageRating) {
  if (!openai) {
    // Fallback responses when OpenAI is not configured
    const fallbacks = {
      spiritual: {
        low: "Your inner light is just getting started. Keep nurturing that beautiful soul! 🌟",
        medium: "You're on a wonderful spiritual journey. Your peace is inspiring! 🧘‍♀️",
        high: "Your spiritual glow is absolutely radiant! You light up the world! ✨"
      },
      motivational: {
        low: "Every champion starts somewhere. Your fire is igniting! 🚀",
        medium: "Your drive is building momentum. You're unstoppable! 💪",
        high: "You're a walking inspiration! Keep conquering those dreams! 🌟"
      },
      trendy: {
        low: "Your unique vibe is just waiting to shine. Stay authentic! 🔥",
        medium: "You're catching those good waves. Keep riding! 🌊",
        high: "You're the ultimate trendsetter! Your energy is contagious! 👑"
      },
      emotional: {
        low: "Your heart is strong and resilient. Keep feeling deeply! 💖",
        medium: "Your emotional intelligence is growing beautifully! 🌈",
        high: "You're a beacon of emotional strength! So inspiring! ✨"
      },
      relationship: {
        low: "Your warmth draws people in. Keep connecting! 🤝",
        medium: "Your empathy creates beautiful bonds! ❤️",
        high: "You're a relationship master! Spread that love! 🌟"
      },
      career: {
        low: "Your potential is limitless. Keep climbing! 🛤️",
        medium: "Your dedication is paying off. Stay focused! 📈",
        high: "You're crushing it professionally! Such an inspiration! 🏆"
      }
    };

    const categoryFallbacks = fallbacks[category] || fallbacks.motivational;
    const rating = averageRating <= 2 ? 'low' : averageRating <= 4 ? 'medium' : 'high';
    return categoryFallbacks[rating];
  }

  try {
    let level;
    if (averageRating <= 2) level = 'low';
    else if (averageRating <= 4) level = 'medium';
    else level = 'high';

    const prompt = `Generate a positive, uplifting, and fun pick-up line or compliment for someone in the "${category}" category with a ${level} rating. Make it modern, trendy, and encouraging. Keep it appropriate and positive. Return only the response text.`;

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 100,
      temperature: 0.8,
    });

    return response.choices[0].message.content.trim();
  } catch (error) {
    console.error('Error generating answer:', error);
    // Fallback responses
    const fallbacks = {
      spiritual: {
        low: "Your inner light is just getting started. Keep nurturing that beautiful soul! 🌟",
        medium: "You're on a wonderful spiritual journey. Your peace is inspiring! 🧘‍♀️",
        high: "Your spiritual glow is absolutely radiant! You light up the world! ✨"
      },
      motivational: {
        low: "Every champion starts somewhere. Your fire is igniting! 🚀",
        medium: "Your drive is building momentum. You're unstoppable! 💪",
        high: "You're a walking inspiration! Keep conquering those dreams! 🌟"
      },
      trendy: {
        low: "Your unique vibe is just waiting to shine. Stay authentic! 🔥",
        medium: "You're catching those good waves. Keep riding! 🌊",
        high: "You're the ultimate trendsetter! Your energy is contagious! 👑"
      },
      emotional: {
        low: "Your heart is strong and resilient. Keep feeling deeply! 💖",
        medium: "Your emotional intelligence is growing beautifully! 🌈",
        high: "You're a beacon of emotional strength! So inspiring! ✨"
      },
      relationship: {
        low: "Your warmth draws people in. Keep connecting! 🤝",
        medium: "Your empathy creates beautiful bonds! ❤️",
        high: "You're a relationship master! Spread that love! 🌟"
      },
      career: {
        low: "Your potential is limitless. Keep climbing! 🛤️",
        medium: "Your dedication is paying off. Stay focused! 📈",
        high: "You're crushing it professionally! Such an inspiration! 🏆"
      }
    };

    const categoryFallbacks = fallbacks[category] || fallbacks.motivational;
    const rating = averageRating <= 2 ? 'low' : averageRating <= 4 ? 'medium' : 'high';
    return categoryFallbacks[rating];
  }
}

module.exports = {
  generateQuestions,
  generateAnswer,
};
