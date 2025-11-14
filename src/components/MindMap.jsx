import { motion } from 'framer-motion';

const MindMap = () => {
  const centralNode = { x: 400, y: 200, text: 'Human Centric AI' };
  const categoryNodes = [
    { x: 150, y: 100, text: '🌿 Spiritual', color: '#10B981' },
    { x: 650, y: 100, text: '💪 Motivational', color: '#F97316' },
    { x: 150, y: 300, text: '💫 Trendy', color: '#EC4899' },
    { x: 650, y: 300, text: '💖 Emotional', color: '#A855F7' },
    { x: 250, y: 50, text: '🤝 Relationship', color: '#3B82F6' },
    { x: 550, y: 50, text: '💼 Career', color: '#14B8A6' }
  ];

  const flowNodes = [
    { x: 400, y: 400, text: 'Select Category' },
    { x: 400, y: 500, text: 'Answer Questions' },
    { x: 400, y: 600, text: 'Rate & Submit' },
    { x: 400, y: 700, text: 'Get Insight' }
  ];

  return (
    <section className="py-16 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center mb-12 text-white font-poppins"
      >
        Thought Process Flowchart
      </motion.h2>
      <div className="flex justify-center">
        <motion.svg
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          width="800"
          height="800"
          className="bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-2xl border border-white border-opacity-20"
        >
          <defs>
            <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
              <polygon points="0 0, 10 3.5, 0 7" fill="#FFF" />
            </marker>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
            <radialGradient id="centralGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#3B82F6" />
            </radialGradient>
          </defs>

          {/* Central Node */}
          <motion.circle
            cx={centralNode.x}
            cy={centralNode.y}
            r="60"
            fill="url(#centralGradient)"
            filter="url(#glow)"
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            animate={{
              scale: [1, 1.1, 1],
              transition: { repeat: Infinity, duration: 3, repeatType: 'loop', delay: 1.5 }
            }}
          />
          <motion.text
            x={centralNode.x}
            y={centralNode.y + 5}
            textAnchor="middle"
            fill="white"
            fontSize="16"
            fontWeight="bold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            {centralNode.text.split(' ').map((word, i) => (
              <tspan key={i} x={centralNode.x} dy={i === 0 ? 0 : 20}>{word}</tspan>
            ))}
          </motion.text>

          {/* Category Nodes */}
          {categoryNodes.map((node, index) => (
            <motion.g key={index}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="45"
                fill={node.color}
                filter="url(#glow)"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.2 + 1.5, duration: 0.6 }}
                animate={{
                  scale: [1, 1.05, 1],
                  transition: { repeat: Infinity, duration: 2 + index * 0.5, repeatType: 'loop', delay: index * 0.2 + 2.1 }
                }}
              />
              <motion.text
                x={node.x}
                y={node.y + 5}
                textAnchor="middle"
                fill="white"
                fontSize="12"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 2, duration: 0.5 }}
              >
                {node.text}
              </motion.text>
            </motion.g>
          ))}

          {/* Connecting Lines to Categories */}
          {categoryNodes.map((node, index) => (
            <motion.line
              key={`line-${index}`}
              x1={centralNode.x}
              y1={centralNode.y}
              x2={node.x}
              y2={node.y}
              stroke="#FFF"
              strokeWidth="3"
              opacity="0.7"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ delay: index * 0.2 + 2.5, duration: 1 }}
            />
          ))}

          {/* Flow Nodes */}
          {flowNodes.map((node, index) => (
            <motion.g key={`flow-${index}`}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="40"
                fill="#4F46E5"
                filter="url(#glow)"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.3 + 4, duration: 0.5 }}
                animate={{
                  scale: [1, 1.05, 1],
                  transition: { repeat: Infinity, duration: 3, repeatType: 'loop', delay: index * 0.3 + 4.5 }
                }}
              />
              <motion.text
                x={node.x}
                y={node.y + 5}
                textAnchor="middle"
                fill="white"
                fontSize="11"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.3 + 4.5, duration: 0.5 }}
              >
                {node.text}
              </motion.text>
            </motion.g>
          ))}

          {/* Flow Arrows */}
          {flowNodes.slice(0, -1).map((node, index) => (
            <motion.line
              key={`arrow-${index}`}
              x1={node.x}
              y1={node.y + 40}
              x2={flowNodes[index + 1].x}
              y2={flowNodes[index + 1].y - 40}
              stroke="#FFF"
              strokeWidth="3"
              markerEnd="url(#arrowhead)"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ delay: index * 0.3 + 5, duration: 0.8 }}
            />
          ))}


        </motion.svg>
      </div>
    </section>
  );
};

export default MindMap;
