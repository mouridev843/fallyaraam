import { motion } from "framer-motion"; // For motion animations
import { Link } from "react-router-dom"; // For navigation links
import Fall from "/src/assets/images/Fall.JPG"; // Importing the image

export default function AboutPreview() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Photo placeholder with animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-2/5 h-110 lg:h-auto bg-gradient-to-br from-[#81C784] to-[#4CAF50] relative overflow-hidden"
          >
            <img
              src={Fall}
              alt="Fall"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-5xl"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-3/5 p-8 lg:p-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Notre <span className="text-[#4CAF50]">Fondateur</span>
            </h2>

            <div className="space-y-4 text-gray-600 mb-8">
              <p>
                <span className="font-semibold text-[#4CAF50]">
                  Alioune FALL
                </span>{" "}
                est un passionné d'impression et de personnalisation avec plus
                de 10 années d'expérience dans le domaine.
              </p>
              <p>
                Diplômé en design graphique, il a fondé Fall Yaram Business avec
                la vision de fournir des produits d'impression de haute qualité
                combinés à un service client exceptionnel.
              </p>
              <p>
                Son expertise couvre tous les aspects de l'impression offset et
                numérique, ainsi que les techniques avancées de personnalisation
                de produits.
              </p>
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="inline-block bg-gradient-to-r from-[#FFD600] to-[#FFAB00] text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-all duration-300"
              >
                Nous contacter
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
