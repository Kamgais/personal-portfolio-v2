

const certifications = [
    {
        title: 'Angular Expert Developer',
        institute: 'Google',
        yearOf: 2025
    },
    {
        title: 'Angular Expert Developer',
        institute: 'Google',
        yearOf: 2025
    },
    {
        title: 'Angular Expert Developer',
        institute: 'Google',
        yearOf: 2025
    },
]

export default function CertificationsSection() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300">
      <div className="flex flex-col gap-4">
        {certifications.map((certification, index) => (
          <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700 last:border-b-0">
            <div className="flex flex-col">
              <h3 className="font-semibold text-sm sm:text-base text-gray-900 dark:text-gray-100 transition-colors duration-300">
                {certification.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm transition-colors duration-300">
                {certification.institute}
              </p>
            </div>
            <div className="flex items-center">
              <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-xs font-medium">
                {certification.yearOf}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
