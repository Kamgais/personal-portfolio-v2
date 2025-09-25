import { BriefcaseBusiness, Globe, Mail, MapPin, Smartphone, Download, Send } from "lucide-react"
import { Button } from "../ui/button"
import Image from "next/image"

export default function ProfileSidebar() {
  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <div className="backdrop-blur-sm bg-white/80 border border-white/20 shadow-xl rounded-2xl p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Profile Image */}
          <div className="relative">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image 
                src="/profile-pic.png" 
                alt="Cyril Kamgais" 
                width={128}
                height={128}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
              <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Name & Title */}
          <div className="space-y-2">
            <h1 className="text-2xl font-bold text-slate-900">
              Hello I&apos;m <span className="text-blue-600">Cyril Kamgais</span> 👋
            </h1>
            <p className="text-slate-600 leading-relaxed">
              Software Developer, Aspiring DevOps Engineer & Content Creator
            </p>
          </div>
          
          {/* Status & Location */}
          <div className="space-y-3 w-full">
            <div className="inline-flex items-center gap-2 px-3 py-2 bg-green-50 border border-green-200 rounded-full">
              <BriefcaseBusiness size={16} className="text-green-600 animate-pulse" />
              <span className="text-sm font-medium text-green-700">Available for work</span>
            </div>
            
            <div className="flex items-center justify-center gap-2 text-slate-600">
              <MapPin size={16} className="text-blue-500" />
              <span className="text-sm font-medium">Berlin, Germany</span>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Card */}
      <div className="backdrop-blur-sm bg-white/80 border border-white/20 shadow-xl rounded-2xl p-6">
        <div className="space-y-4">
          <h3 className="font-semibold text-slate-900 text-center mb-4">Let&apos;s Connect</h3>
          
          {/* Contact Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <Globe size={18} className="text-blue-500" />
              <span className="text-sm text-slate-700 font-medium">cyrilkamgais.com</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <Smartphone size={18} className="text-green-500" />
              <span className="text-sm text-slate-700 font-medium">+49 17668484380</span>
            </div>
            
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors">
              <Mail size={18} className="text-red-500" />
              <span className="text-sm text-slate-700 font-medium">cyrilkamgais1203@gmail.com</span>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-3 pt-4 border-t border-slate-200">
            <Button 
              variant="outline" 
              className="w-full font-semibold bg-white/80 hover:bg-white border-slate-200 text-slate-700"
            >
              <Download className="mr-2 h-4 w-4" />
              Download CV
            </Button>
            
            <Button className="w-full font-semibold bg-blue-600 hover:bg-blue-700 text-white">
              <Send className="mr-2 h-4 w-4" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
