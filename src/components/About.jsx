import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 dark:text-white mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          About Me
        </motion.h2>

        {/* About Content Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          {/* Profile Image Section */}
          <motion.div
            className="flex justify-center w-full md:w-1/3"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <img
              src="https://via.placeholder.com/250" // Replace with your image
              alt="Randhir Profile"
              className="rounded-full shadow-lg border-4 border-gray-500"
            />
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            className="text-left md:w-2/3"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              Hello! I’m Randhir, a passionate <strong>Software Engineer</strong> and <strong>Data Enthusiast</strong>. 
              I specialize in creating innovative solutions with cutting-edge technologies and data-driven insights.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
              From developing full-stack web applications to diving deep into data analysis and machine learning, 
              I’m always exploring new challenges and solving problems that impact real-world applications.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              I have a strong foundation in both backend and frontend technologies, and I’m always learning new tools and techniques.
            </p>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-200">
            <span className="bg-blue-600 text-white py-2 px-6 rounded-full">React</span>
            <span className="bg-green-600 text-white py-2 px-6 rounded-full">Node.js</span>
            <span className="bg-yellow-600 text-white py-2 px-6 rounded-full">Python</span>
            <span className="bg-gray-600 text-white py-2 px-6 rounded-full">Docker</span>
            <span className="bg-purple-600 text-white py-2 px-6 rounded-full">SQL</span>
            <span className="bg-red-600 text-white py-2 px-6 rounded-full">Machine Learning</span>
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Experience</h3>
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-24 h-24 bg-gray-300 rounded-full text-center flex items-center justify-center">
                <span className="text-white text-xl">💻</span>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Software Engineer</h4>
                <p className="text-lg text-gray-700 dark:text-gray-300">XYZ Corp | 2022 - Present</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Developed and maintained web applications with React and Node.js. Implemented microservices architecture 
                  and integrated with cloud services.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-24 h-24 bg-gray-300 rounded-full text-center flex items-center justify-center">
                <span className="text-white text-xl">🖥️</span>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Backend Developer</h4>
                <p className="text-lg text-gray-700 dark:text-gray-300">ABC Tech | 2020 - 2022</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Worked on building scalable backend systems using Go and PostgreSQL. Implemented OAuth2 authentication and 
                  API integrations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.3 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Education</h3>
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-24 h-24 bg-gray-300 rounded-full text-center flex items-center justify-center">
                <span className="text-white text-xl">🎓</span>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Bachelor's in Computer Science</h4>
                <p className="text-lg text-gray-700 dark:text-gray-300">University of Springfield | 2016 - 2020</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Focused on software engineering, algorithms, and data structures. Completed projects in web development and machine learning.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="w-24 h-24 bg-gray-300 rounded-full text-center flex items-center justify-center">
                <span className="text-white text-xl">📚</span>
              </div>
              <div className="text-left">
                <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Master's in Data Science</h4>
                <p className="text-lg text-gray-700 dark:text-gray-300">XYZ University | 2020 - 2022</p>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  Specialized in machine learning, data analysis, and big data technologies.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

