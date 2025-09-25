import { BriefcaseBusiness, Globe, Mail, MapPin, Smartphone, Download, Send } from "lucide-react"
import { Button } from "../ui/button"
import Image from "next/image"

export default function ProfileSidebar() {
  return (
    <div className="space-y-4 lg:space-y-6">
      {/* Profile Card */}
      <div className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border border-white/20 dark:border-gray-700/20 shadow-xl rounded-2xl p-4 sm:p-6 transition-colors duration-300">
        <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
              <Image 
                src="/profile-pic.png" 
                alt="Cyril Kamgais" 
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 sm:border-4 border-white dark:border-gray-700 flex items-center justify-center">
              <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Name & Title */}
          <div className="space-y-2">
            <h1 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white leading-tight transition-colors duration-300">
              Hello I&apos;m <span className="text-blue-600 dark:text-blue-400">Cyril Kamgais</span> 👋
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
              Software Developer, Aspiring DevOps Engineer & Content Creator
            </p>
          </div>
          
          {/* Status & Location */}
          <div className="space-y-2 sm:space-y-3 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full transition-colors duration-300">
              <BriefcaseBusiness size={14} className="text-green-600 dark:text-green-400 animate-pulse sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium text-green-700 dark:text-green-400">Available for work</span>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-slate-600 dark:text-gray-300 transition-colors duration-300">
              <MapPin size={14} className="text-blue-500 dark:text-blue-400 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">Berlin, Germany</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Card */}
      <div className="backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 border border-white/20 dark:border-gray-700/20 shadow-xl rounded-2xl p-4 sm:p-6 transition-colors duration-300">
        <div className="space-y-3 sm:space-y-4">
          <h3 className="font-semibold text-slate-900 dark:text-white text-center text-sm sm:text-base mb-3 sm:mb-4 transition-colors duration-300">Let&apos;s Connect</h3>
          
          {/* Contact Info */}
          <div className="space-y-2 sm:space-y-3">
            <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-slate-50 dark:bg-gray-700/50 hover:bg-slate-100 dark:hover:bg-gray-700 transition-colors duration-300">
              <Globe size={16} className="text-blue-500 sm:w-[18px] sm:h-[18px] flex-shrink-0" />
              <span className="text-xs sm:text-sm text-slate-700 font-medium truncate">cyrilkamgais.com</span>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <Smartphone size={16} className="text-green-500 sm:w-[18px] sm:h-[18px] flex-shrink-0" />
              <span className="text-xs sm:text-sm text-slate-700 font-medium">+49 17668484380</span>
            </div>
            
            <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <Mail size={16} className="text-red-500 sm:w-[18px] sm:h-[18px] flex-shrink-0" />
              <span className="text-xs sm:text-sm text-slate-700 font-medium truncate">cyrilkamgais1203@gmail.com</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:space-y-3 gap-2 sm:gap-0 pt-3 sm:pt-4 border-t border-slate-200">
            <Button 
              variant="outline" 
              size="sm"
              className="w-full font-semibold bg-white/80 hover:bg-white border-slate-200 text-slate-700 text-xs sm:text-sm py-2 sm:py-3"
            >
              <Download className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Download CV
            </Button>
            
            <Button 
              size="sm" 
              className="w-full font-semibold bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm py-2 sm:py-3"
            >
              <Send className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
