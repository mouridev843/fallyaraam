import { motion } from "framer-motion";
export default function ServicesPreview() {
  const services = [
    {
      name: "Impressions",
      items: [
        "Flyers & dépliants",
        "Cartes de visite",
        "Affiches",
        "Cartes d'invitation",
      ],
      icon: "🖨️",
      color: "from-green-100 to-green-50",
    },
    {
      name: "Produits personnalisés",
      items: ["T-shirts", "Casquettes", "Sacs", "Badges"],
      icon: "👕",
      color: "from-yellow-100 to-yellow-50",
    },
    {
      name: "Événements",
      items: [
        "Bâches baptême",
        "Billets d'entrée",
        "Tableaux muraux",
        "Cachets",
      ],
      icon: "🎉",
      color: "from-blue-100 to-blue-50",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Nos <span className="text-[#4CAF50]">Services</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${service.color} p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-white border-opacity-30`}
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">
                {service.name}
              </h3>
              <ul className="space-y-3">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-[#4CAF50] rounded-full mr-3"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        {/*  <button className="relative overflow-hidden group bg-gradient-to-r from-[#FFD600] to-[#FFAB00] text-white font-bold rounded-full py-4 px-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ">
          <span className="relative z-10">Voir nos services</span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#FFAB00] to-[#FF8F00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button> */}
      </div>
    </section>
  );
}
