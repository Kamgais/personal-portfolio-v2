

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
    <div className="flex flex-col gap-4 ">
     {
        certifications.map((certification, index) => (
            <div key={index} className="flex flex-col justify-between h-[50px] border-l-3 border-l-green-500 px-2">
               <div className="flex justify-between items-center">
                <h3
                className="font-bold"
                >{certification.title}</h3>
                <p
                className="text-gray-500 text-sm"
                >{certification.yearOf}</p>
               </div>
               <div>
                <p
                className="text-gray-500"
                >{certification.institute}</p>
               </div>

            </div>
        ))
     }
    </div>
  )
}
