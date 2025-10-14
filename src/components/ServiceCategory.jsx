import { motion } from "framer-motion";
import { useState } from "react";

export default function ServiceCategory({ title, services, color, icon }) {
  // etat pour overlay les services
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`bg-gradient-to-br ${color} rounded-2xl shadow-lg overflow-hidden border border-white/20`}
    >
      {/* Title Section */}
      <motion.button
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-8 flex justify-between items-center"
      >
        <div className="flex items-center gap-6">
          <span className="text-4xl">{icon}</span>
          <h3 className="text-2xl font-bold text-gray-800 text-left">
            {title}
          </h3>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} className="text-2xl">
          ▼
        </motion.div>
      </motion.button>

      {/* Content Section */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-8 pb-8 pt-0 space-y-8">
          {services.map((group, index) => (
            <div key={index}>
              <h4 className="text-xl font-semibold text-gray-700 mb-4">
                {group.subtitle}
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {group.items.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: isOpen ? 1 : 0,
                      x: isOpen ? 0 : -20,
                    }}
                    transition={{ delay: i * 0.03 }}
                    className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm hover:shadow-md transition-all"
                  >
                    <span className="text-green-600 mr-2">•</span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
