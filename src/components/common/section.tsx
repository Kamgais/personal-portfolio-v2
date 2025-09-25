
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

interface SectionProps {
    title: string;
    children: React.ReactNode;
    moreLink?: boolean;
    moreHref?: string
}

export default function Section({title, children, moreLink = true, moreHref}: SectionProps) {
  return (
    <section className="backdrop-blur-sm bg-white/70 border border-white/20 shadow-xl rounded-2xl p-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-900 capitalize">
          {title}
        </h2>
        
        {moreLink && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Link 
                href={moreHref!} 
                className="inline-flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-colors group"
              >
                <MoveRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </TooltipTrigger>
            <TooltipContent>
              <p>View all {title}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
      
      <div className="space-y-4">
        {children}
      </div>
    </section>
  )
}
