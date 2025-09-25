
export default function AboutSection() {
  return (
    <div className="flex flex-col gap-4 sm:gap-5">
      <p className="text-sm sm:text-base leading-relaxed text-gray-700 dark:text-gray-200 transition-colors duration-300">
        👋 <span className="font-medium">Hey there!</span> I'm Cyril Kamgais, a 
        <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-semibold px-2 py-1 mx-2 text-xs sm:text-sm rounded-md shadow-sm">
          Full-Stack Developer
        </span> 
        who transforms ideas into digital reality ✨
      </p>
      
      <p className="text-sm sm:text-base leading-relaxed">
        I craft seamless experiences across the entire stack — from pixel-perfect 
        <span className="bg-blue-100 text-blue-700 font-medium px-2 py-0.5 mx-1 text-xs sm:text-sm rounded-full">
          frontend
        </span> 
        interfaces to robust 
        <span className="bg-green-100 text-green-700 font-medium px-2 py-0.5 mx-1 text-xs sm:text-sm rounded-full">
          backend
        </span> 
        architectures. Every line of code is written with purpose 🎯
      </p>

      <p className="text-sm sm:text-base leading-relaxed">
        My toolkit includes 
        <span className="bg-gradient-to-r from-gray-800 to-gray-600 text-white font-medium px-2 py-0.5 mx-1 text-xs sm:text-sm rounded-md">
          React • Next.js • Node.js • MongoDB
        </span>
        — but I'm always evolving, always learning �. I believe in building not just applications, but digital experiences that matter.
      </p>

      <p className="text-sm sm:text-base leading-relaxed text-gray-600">
        When I'm not in the zone coding 🚀, you'll find me exploring cutting-edge tech, contributing to open-source communities �, or diving deep into the latest development trends.
      </p>

      <div className="mt-2 p-4 bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-400 rounded-r-lg">
        <p className="text-sm sm:text-base font-medium text-gray-800">
          Ready to build something extraordinary together? Let's make it happen! 
          <span className="inline-block ml-1 animate-bounce">🚀</span>
        </p>
      </div>
    </div>
  )
}
