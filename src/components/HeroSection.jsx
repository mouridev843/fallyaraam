import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#f5f5f5] to-[#e0e0e0] text-gray-900 py-28 md:py-36 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-10 w-40 h-40 bg-[#81C784] rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-[#FFD600] rounded-full filter blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#81C784] to-[#4CAF50]">
            Impression & Personnalisation, Repographie
          </span>
          <br />
          <span className="text-gray-800">de Qualité Professionnelle</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-12 text-gray-600 max-w-3xl mx-auto"
        >
          Transformez vos idées en produits tangibles avec notre expertise en
          impression et personnalisation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="relative overflow-hidden group bg-gradient-to-r from-[#FFD600] to-[#FFAB00] text-white font-bold rounded-full py-4 px-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <span className="relative z-10">Voir nos services</span>
            <span className="absolute inset-0 bg-gradient-to-r from-[#FFAB00] to-[#FF8F00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
