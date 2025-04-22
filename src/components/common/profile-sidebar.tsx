import { BriefcaseBusiness, Globe, Mail, MapPin, Smartphone } from "lucide-react"
import { Button } from "../ui/button"


export default function ProfileSidebar() {
  return (
   <div className="flex flex-col gap-4  max-w-full xl:h-[90vh]">
    <div className="bg-white rounded-2xl shadow-xl px-4 py-4 flex xl:flex-col  flex-wrap xl:flex-nowrap items-center gap-3">
        <div className="xl:w-[150px] xl:h-[150px] w-[100px]">
            <img src="/profile-pic.png" alt=""  className=""/>
        </div>
        <p className="w-full font-extrabold text-2xl">
            Hello I&apos;m <span className="text-gray-600">
            Cyril Kamgais👋
            </span>
        </p>
        <p className="w-full">
            Software Developer, (Aspiring Devops Engineer), Content Creator & Writer
        </p>
        <div className="self-start flex gap-2 items-center border border-gray-400 p-1 rounded-sm justify-center">
            <BriefcaseBusiness  size={15} color="green" className="animate-pulse"/>
            <p className="text-sm">Available for work</p>
        </div>
        <div className="flex items-center self-start gap-2">
            <MapPin size={15}/>
            <p className="text-sm">Berlin, Germany</p>
        </div>
    </div>
    <div className="bg-white rounded-2xl shadow-xl px-4 py-4 flex flex-col items-center gap-3">
        <div className="flex items-center self-start gap-2">
            <Globe size={15}/>
            <p className="text-sm">cyrilkamgais.com</p>
        </div>
        <div className="flex items-center self-start gap-2">
            <Smartphone size={15}/>
            <p className="text-sm">+49 17668484380</p>
        </div>
        <div className="flex items-center self-start gap-2">
            <Mail size={15}/>
            <p className="text-xs">cyrilkamgais1203@gmail.com</p>
        </div>
        <div className="w-full flex flex-col gap-2">
            <Button className="w-full font-bold" variant='outline'>
                Download CV
            </Button>
            <Button className="w-full font-bold">
                Contact me
            </Button>
        </div>
    </div>
   </div>
  )
}
