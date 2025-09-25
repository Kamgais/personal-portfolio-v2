import { ArrowUpRight, Github, Globe, Linkedin, Mail, MessageCircleMore, Youtube } from "lucide-react"

const links = [
    {
        label: 'GitHub',
        href: 'https://github.com/yourprofile',
        icon: <Github size={18}/>,
        gradient: 'from-gray-600 to-gray-800',
        description: 'Code & Projects',
        bgColor: 'bg-gray-50 dark:bg-gray-800',
        hoverColor: 'hover:bg-gray-100 dark:hover:bg-gray-700'
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/yourprofile',
        icon: <Linkedin size={18}/>,
        gradient: 'from-blue-600 to-blue-800',
        description: 'Professional Network',
        bgColor: 'bg-blue-50 dark:bg-blue-900/20',
        hoverColor: 'hover:bg-blue-100 dark:hover:bg-blue-900/30'
    },
    {
        label: 'YouTube',
        href: 'https://youtube.com/c/yourchannel',
        icon: <Youtube size={18} />,
        gradient: 'from-red-600 to-red-800',
        description: 'Tech Content',
        bgColor: 'bg-red-50 dark:bg-red-900/20',
        hoverColor: 'hover:bg-red-100 dark:hover:bg-red-900/30'
    },
    {
        label: 'WhatsApp',
        href: 'https://wa.me/yourphonenumber',
        icon: <MessageCircleMore size={18}/>,
        gradient: 'from-green-600 to-green-800',
        description: 'Quick Chat',
        bgColor: 'bg-green-50 dark:bg-green-900/20',
        hoverColor: 'hover:bg-green-100 dark:hover:bg-green-900/30'
    },
    {
        label: 'Blog',
        href: 'https://yourblog.com',
        icon: <Globe size={18}/>,
        gradient: 'from-purple-600 to-purple-800',
        description: 'Latest Thoughts',
        bgColor: 'bg-purple-50 dark:bg-purple-900/20',
        hoverColor: 'hover:bg-purple-100 dark:hover:bg-purple-900/30'
    },
    {
        label: 'Email',
        href: 'mailto:your.email@example.com',
        icon: <Mail size={18}/>,
        gradient: 'from-orange-600 to-orange-800',
        description: 'Direct Contact',
        bgColor: 'bg-orange-50 dark:bg-orange-900/20',
        hoverColor: 'hover:bg-orange-100 dark:hover:bg-orange-900/30'
    }
];

export default function LinksSection() {
  return (
    <div className="space-y-4 sm:space-y-5">
      {/* Header */}
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2 transition-colors duration-300">
          Let's Connect! <span className="animate-pulse">✨</span>
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">
          Choose your preferred way to reach out
        </p>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {
          links.map((link, index) => (
            <a key={index} 
               href={link.href}
               target="_blank"
               rel="noopener noreferrer"
               className={`${link.bgColor} ${link.hoverColor} group border-2 border-gray-200/50 dark:border-gray-700/50 p-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer`}>
              
              <div className="flex items-start justify-between mb-2">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${link.gradient} flex items-center justify-center text-white shadow-md group-hover:rotate-12 transition-transform duration-300`}>
                  {link.icon}
                </div>
                <ArrowUpRight 
                  size={16} 
                  className="text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                />
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 text-sm mb-1 transition-colors duration-300">
                  {link.label}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 transition-colors duration-300">
                  {link.description}
                </p>
              </div>
            </a>
          ))
        }
      </div>

      {/* Call to Action */}
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-2 border-dashed border-blue-200 dark:border-blue-800 rounded-xl text-center transition-all duration-300">
        <p className="text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors duration-300">
          <span className="inline-block mr-1 animate-bounce">🚀</span>
          Ready to collaborate? I'm just one click away!
          <span className="inline-block ml-1 animate-bounce delay-100">✨</span>
        </p>
      </div>
    </div>
  )
}
