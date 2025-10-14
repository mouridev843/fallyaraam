import { motion } from "framer-motion";
import { useState } from "react";
import AboutPreview from "../components/AboutPreview";
import HeroSection from "../components/HeroSection";
import LoginModal from "../components/modals/LoginModal";
import ServicesPreview from "../components/ServicesPreview";
import Testimonials from "../components/Testimonials";
import { useAuth } from "../context/AuthContext";

export default function Home() {
  const { isAuthenticated } = useAuth();
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <HeroSection />
      <div className="text-center py-8">
        {/*  {!isAuthenticated ? (
          <>
            <p className="text-lg">
              <span className="font-semibold">Connectez-vous</span> pour nous
              contacter ou demander un devis.
            </p>
            <button
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => setIsLoginOpen(true)}
            >
              Se connecter
            </button>
          </>
        ) : (
          <p className="text-green-600 font-semibold">
            Vous êtes connecté. Vous pouvez maintenant accéder aux formulaires.
          </p>
        )} */}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ServicesPreview />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <AboutPreview />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Testimonials />
      </motion.div>

      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  );
}
