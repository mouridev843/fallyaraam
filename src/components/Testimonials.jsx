import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed D.",
      role: "Responsable Marketing",
      company: "Entreprise Makaanbi",
      content:
        "Le travail de qualité et le professionnalisme de cette équipe ont dépassé nos attentes. Nos flyers ont eu un impact immédiat sur notre campagne.",
      rating: 5,
    },
    {
      id: 2,
      name: "Aliou Fall.",
      role: "Organisateur d'événements",
      company: "Événements & Co",
      content:
        "Les sacs personnalisés et les bâches pour notre mariage étaient magnifiques. Livraison rapide et service impeccable.",
      rating: 4,
    },
    {
      id: 3,
      name: "Lamine T.",
      role: "Directrice Artistique",
      company: "Agence Creativ",
      content:
        "Nous collaborons régulièrement pour nos impressions professionnelles. Toujours à l'écoute et force de proposition.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f5f5f5] to-[#e0e0e0]">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 text-gray-800"
        >
          Ils nous <span className="text-[#4CAF50]">font confiance</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-yellow-400"
                        : "text-gray-200"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-600 mb-6 italic relative  before:text-4xl before:text-gray-200 before:absolute before:-top-2 before:-left-2 before:font-serif  after:text-4xl after:text-gray-200 after:absolute after:-bottom-4 after:-right-2 after:font-serif">
                {testimonial.content}
              </p>

              <div className="flex items-center">
                <div className="bg-[#4CAF50] bg-opacity-10 text-[#4CAF50] w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
