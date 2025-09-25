

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
    <div className="flex flex-col gap-3 sm:gap-4">
     {
        certifications.map((certification, index) => (
            <div key={index} className="flex flex-col justify-between h-[45px] sm:h-[50px] border-l-3 border-l-green-500 px-2 sm:px-3 hover:bg-gray-50 transition-colors duration-300">
               <div className="flex justify-between items-center">
                <h3
                className="font-bold text-sm sm:text-base truncate pr-2"
                >{certification.title}</h3>
                <p
                className="text-gray-500 text-xs sm:text-sm flex-shrink-0"
                >{certification.yearOf}</p>
               </div>
               <div>
                <p
                className="text-gray-500 text-xs sm:text-sm truncate"
                >{certification.institute}</p>
               </div>

            </div>
        ))
     }
    </div>
  )
}
