import { motion } from "framer-motion";
import {
  FaClock,
  FaEnvelope,
  FaHeadset,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 pt-8 pb-20">
      {/* Hero Section */}
      <motion.div
        className="bg-gradient-to-r from-green-600 to-yellow-500 text-white py-16 mb-16 shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Besoin d'aide ? <span className="text-white">Contactez-nous</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl max-w-3xl mx-auto text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Notre équipe est disponible pour répondre à toutes vos questions
            concernant nos services d'impression et personnalisation.
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-6">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Formulaire de contact - Gauche */}
          <motion.div variants={itemVariants}>
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="bg-gradient-to-r from-green-500 to-yellow-400 text-white p-3 rounded-full mr-4 shadow-md">
                  <FaHeadset size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Envoyez-nous un message
                </h2>
              </div>
              <ContactForm />
            </div>
          </motion.div>

          {/* Informations de contact - Droite */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Carte de contact */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
              <h2 className="text-2xl font-bold text-gray-800 mb-8 flex items-center">
                <span className="bg-gradient-to-r from-green-500 to-yellow-400 text-white p-2 rounded-full mr-3 shadow-md">
                  <FaMapMarkerAlt />
                </span>
                Nos coordonnées
              </h2>

              <div className="space-y-6">
                {/* Bloc Adresse */}
                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-green-100 text-green-600 p-3 rounded-lg mr-4 group-hover:bg-green-600 group-hover:text-white transition-all">
                    <FaMapMarkerAlt size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Adresse</h3>
                    <p className="text-gray-600">
                      504 HLM Grand Yoff
                      <br />
                      Dakar, Sénégal
                    </p>
                  </div>
                </motion.div>

                {/* Bloc Téléphone */}
                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <FaPhone size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Téléphone</h3>
                    <p className="text-gray-600">+221 77 755 35 50</p>
                    <p className="text-gray-600">+221 77 183 61 96 (Mobile)</p>
                  </div>
                </motion.div>

                {/* Bloc Email */}
                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-yellow-100 text-yellow-600 p-3 rounded-lg mr-4 group-hover:bg-yellow-600 group-hover:text-white transition-all">
                    <FaEnvelope size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Email</h3>
                    <p className="text-gray-600">alioufall@gmail.com</p>
                    <p className="text-gray-600">support@fallbusiness.com</p>
                  </div>
                </motion.div>

                {/* Bloc Horaires */}
                <motion.div
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className="bg-purple-100 text-purple-600 p-3 rounded-lg mr-4 group-hover:bg-purple-600 group-hover:text-white transition-all">
                    <FaClock size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-700">Horaires</h3>
                    <p className="text-gray-600">
                      Lundi - Vendredi: 8h00 - 18h00
                    </p>
                    <p className="text-gray-600">Samedi: 9h00 - 13h00</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Carte Google Maps */}
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-gray-200"
              whileHover={{ y: -5 }}
            >
              <iframe
                title="Localisation"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3859.227980291469!2d-17.45583792468738!3d14.71767748574915!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec1729e8c0c3f6b%3A0x4a5f5a5b5b5b5b5b!2sHLM%20Grand%20Yoff%2C%20Dakar!5e0!3m2!1sfr!2ssn!4v1620000000000!5m2!1sfr!2ssn"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <p className="text-sm text-gray-600 flex items-center">
                  <FaMapMarkerAlt className="text-green-500 mr-2" />
                  Retrouvez-nous facilement à notre adresse à Dakar
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Section équipe */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Notre équipe à votre service
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-8">
            Que vous ayez besoin d'un devis personnalisé, de conseils techniques
            ou simplement d'informations sur nos services, notre équipe
            expérimentée est là pour vous accompagner.
          </p>
          <motion.div
            className="bg-gradient-to-r from-green-100 to-yellow-100 text-gray-800 inline-block px-6 py-3 rounded-full font-medium shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaHeadset className="inline mr-2 text-yellow-600" />
            Service client disponible du lundi au samedi
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
