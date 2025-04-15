import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowUpRight, Github, Globe, Linkedin, Mail, MessageCircleMore, Youtube } from "lucide-react"
import { cn } from "@/lib/utils";


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
    <div className="flex gap-4 flex-wrap ">
      {
        links.map((link,index) => (
           <div key={index} 
           className={` w-[200px] border bg-white shadow-2xs p-3 flex justify-between items-center rounded-md cursor-pointer`}>
            <p className="text-[17px] flex gap-2 items-center text-black">
                {link.icon}
                {link.label}
                </p>
            <ArrowUpRight  color="black"/>
           </div>
        ))
      }
    </div>
  )
}
