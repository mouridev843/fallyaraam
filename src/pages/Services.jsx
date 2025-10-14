import { motion } from "framer-motion";
import DevisButton from "../components/DevisButton";
import ServiceCategory from "../components/ServiceCategory";

export default function Services() {
  let categories = [
    {
      title: "Impressions Professionnelles",
      isSubCategory: true,
      icon: "🖨️",
      color: "from-green-50 to-green-100",
      services: [
        {
          subtitle: "Supports promotionnels",
          items: [
            "Flyers & dépliants",
            "Affiches",
            "Cartes postales",
            "Billets d'entrée",
          ],
        },
        {
          subtitle: "Documents d'entreprise",
          items: [
            "Carnets de facture",
            "Enveloppes",
            "Bloc-notes",
            "Calendriers",
          ],
        },
        {
          subtitle: "Identité visuelle",
          items: ["Cartes de visite", "Badges", "Cartes d'invitation"],
        },
      ],
    },
    {
      title: "Produits Personnalisés",
      isSubCategory: true,
      icon: "👕",
      color: "from-yellow-50 to-yellow-100",
      services: [
        {
          subtitle: "Textile personnalisé",
          items: ["T-shirts", "Casquettes", "Body bébé"],
        },
        {
          subtitle: "Accessoires personnalisés",
          items: ["Sacs personnalisés", "Sacs pour mariages"],
        },
        {
          subtitle: "Identité & objets",
          items: ["Insignes", "Badges personnalisés"],
        },
      ],
    },
    {
      title: "Événementiel & Décoration",
      isSubCategory: true,
      icon: "🎉",
      color: "from-pink-50 to-pink-100",
      services: [
        {
          subtitle: "Baptêmes & mariages",
          items: [
            "Bâches baptême",
            "Tâches de baptême",
            "Cartes d'invitation personnalisées",
          ],
        },
        {
          subtitle: "Décoration murale",
          items: [
            "Tableaux muraux",
            "Décorations murales",
            "Posters personnalisés",
          ],
        },
      ],
    },
    {
      title: "Tampons & Cachets",
      isSubCategory: true,
      icon: "🖋️",
      color: "from-red-50 to-red-100",
      services: [
        {
          subtitle: "Cachets pro",
          items: ["Cachets d’entreprise"],
        },
        {
          subtitle: "Cachets créatifs",
          items: ["Cachets personnalisés"],
        },
      ],
    },
    {
      title: "Reprographie",
      isSubCategory: true,
      icon: "📄",
      color: "from-blue-50 to-blue-100",
      services: [
        {
          subtitle: "Traitement de documents",
          items: ["Photocopies", "Numérisation", "Impression de documents"],
        },
        {
          subtitle: "Plans & formats spéciaux",
          items: ["Impression de plans"],
        },
        {
          subtitle: "Finitions",
          items: ["Reliure", "Plastification"],
        },
      ],
    },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-6 py-16"
    >
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <motion.h1
          whileHover={{ scale: 1.02 }}
          className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-500"
        >
          Nos Services
        </motion.h1>
        <motion.p
          whileHover={{ scale: 1.01 }}
          className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Explorez nos différentes catégories de services ci-dessous et
          n'hésitez pas à nous contacter pour toute demande spécifique.
        </motion.p>
        <motion.p
          whileHover={{ scale: 1.01 }}
          className="text-lg text-gray-500 mb-12 max-w-4xl mx-auto"
        >
          Nous offrons une large gamme de services d'impression pour répondre à
          tous vos besoins. Que vous soyez une entreprise, un particulier ou un
          événement, nous avons la solution parfaite pour vous.
        </motion.p>

        <DevisButton />
      </motion.div>

      {/* Categories Header */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row justify-between items-center mb-16 bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm"
      >
        <motion.h2 variants={item} className="text-3xl font-bold text-gray-800">
          Nos <span className="text-green-600">Catégories</span>
        </motion.h2>
        <motion.p
          variants={item}
          className="text-lg text-gray-500 mt-4 md:mt-0"
        >
          Cliquez sur une catégorie pour découvrir nos services
        </motion.p>
      </motion.div>

      {/* Categories Flex */}
      <motion.div
        variants={container}
        initial="show"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8 justify-center"
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="min-w-[350px] flex-shrink-0"
          >
            <ServiceCategory
              title={category.title}
              services={category.services}
              color={category.color}
              icon={category.icon}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Floating decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-slow"></div>
        <div className="absolute top-1/2 right-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-medium"></div>
        <div className="absolute bottom-20 left-1/3 w-60 h-60 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float-fast"></div>
      </div>
    </motion.div>
  );
}
