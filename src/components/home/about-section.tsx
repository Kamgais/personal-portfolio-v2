export default function AboutSection() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="space-y-4">
        {/* Introduction */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
            👋 Hey there! I am Cyril Kamgais
          </h3>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            A passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Full-Stack Developer</span> with a knack for building scalable and user-friendly web applications. With a strong foundation in both <span className="font-semibold text-blue-600 dark:text-blue-400">frontend</span> and <span className="font-semibold text-green-600 dark:text-green-400">backend</span> technologies, I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </div>

        {/* What I Do */}
        <div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
            I specialize in <span className="font-semibold text-blue-600 dark:text-blue-400">React, Next.js, Node.js, and MongoDB</span> but I am always exploring new technologies to stay ahead of the curve. Whether it is creating dynamic user interfaces or designing robust APIs, I thrive on crafting seamless digital experiences.
          </p>
        </div>

        {/* Personal Touch */}
        <div className="pt-2 border-t border-gray-200 dark:border-gray-600">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            When I am not coding, you will find me experimenting with new tech, contributing to open-source projects, or binge-watching tech tutorials on YouTube.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center pt-2">
          <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
            Let&apos;s build something amazing together! 🚀
          </p>
        </div>
      </div>
    </div>
  )
}
