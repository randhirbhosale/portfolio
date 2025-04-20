import { motion } from "framer-motion";

export default function Hero() {
  const cardStyle =
    "flex-1 relative overflow-hidden group cursor-pointer transition-all duration-300";

  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      {/* Full Stack Dev */}
      <motion.div
        className={`${cardStyle} bg-gray-900`}
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <img
          src="/fullstack.jpg"
          alt="Full Stack"
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="relative z-10 flex flex-col justify-center items-center h-full p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-3 group-hover:text-blue-400 transition">
            Full Stack Developer
          </h2>
          <p className="max-w-xs group-hover:scale-105 transition-transform">
            Go, React, Docker, and scalable systems — building robust backends & sleek UIs.
          </p>
        </div>
      </motion.div>

      {/* Data & ML */}
      <motion.div
        className={`${cardStyle} bg-gray-800`}
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        <img
          src="/data.jpg"
          alt="Data Work"
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
        />
        <div className="relative z-10 flex flex-col justify-center items-center h-full p-10 text-white text-center">
          <h2 className="text-3xl font-bold mb-3 group-hover:text-green-300 transition">
            Data & ML Projects
          </h2>
          <p className="max-w-xs group-hover:scale-105 transition-transform">
            ML models, NLP, TensorFlow — building smart insights from real-world data.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

