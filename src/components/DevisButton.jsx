import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DevisModal from "./DevisModal";

export default function DevisButton() {
  const [showModal, setShowModal] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const services = [
    "Flyers & dépliants",
    "Cartes de visite",
    "Affiches",
    "Sacs personnalisés",
    "T-shirts",
    "Bâches publicitaires",
    "Cartes d'invitation",
    "Badges",
    "Casquettes",
    "Bâches baptême",
    "Tableaux muraux",
    "Cachets",
  ];

  const handleOpenModal = (service = "") => {
    setSelectedService(service);
    setShowModal(true);
  };

  // Animation variants
  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
    },
    tap: {
      scale: 0.98,
      boxShadow: "0 5px 15px -5px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <>
      <motion.button
        onClick={() => handleOpenModal()}
        className="relative overflow-hidden group"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        transition={{ type: "spring", stiffness: 400, damping: 15 }}
      >
        <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></span>
        <span className="relative z-10 flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
          Demander un devis
        </span>
      </motion.button>

      <AnimatePresence>
        {showModal && (
          <DevisModal
            selectedService={selectedService}
            services={services}
            onClose={() => setShowModal(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
