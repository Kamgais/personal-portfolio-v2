import { ArrowUpRight, Github, Globe, Linkedin, Mail, MessageCircleMore, Youtube } from "lucide-react"


const links = [
    {
        label: 'GitHub',
        href: 'https://github.com/yourprofile',
        icon: <Github size={20}/>,
        backgroundColor: 'bg-gray-500'
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/yourprofile',
        icon: <Linkedin size={20}/>,
        backgroundColor: 'bg-blue-500' 
    },
    {
        label: 'YouTube',
        href: 'https://youtube.com/c/yourchannel',
        icon: <Youtube size={20} />,
        backgroundColor: 'bg-red-500'
    },
    {
        label: 'WhatsApp',
        href: 'https://wa.me/yourphonenumber',
        icon: <MessageCircleMore size={20}/>,
        backgroundColor: 'bg-green-500'
    },
    {
        label: 'Blog',
        href: 'https://yourblog.com',
        icon: <Globe size={20}/>,
        backgroundColor: 'bg-orange-500'
    },
    {
        label: 'Gmail',
        href: 'https://yourblog.com',
        icon: <Mail size={20}/>,
        backgroundColor: 'bg-orange-500'
    }
];

export default function LinksSection() {
  return (
    <div className="flex gap-2 sm:gap-3 md:gap-4 flex-wrap">
      {
        links.map((link,index) => (
           <div key={index} 
           className={`w-full sm:w-[180px] md:w-[200px] border bg-white shadow-2xs p-2 sm:p-3 flex justify-between items-center rounded-md cursor-pointer hover:shadow-md transition-all duration-300 hover:scale-105`}>
            <p className="text-sm sm:text-base md:text-[17px] flex gap-1 sm:gap-2 items-center text-black">
                <span className="flex-shrink-0">{link.icon}</span>
                <span className="truncate">{link.label}</span>
                </p>
            <ArrowUpRight color="black" size={16} className="sm:w-5 sm:h-5 flex-shrink-0"/>
           </div>
        ))
      }
    </div>
  )
}
