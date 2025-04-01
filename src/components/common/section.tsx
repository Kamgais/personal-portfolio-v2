
import { MoveRight } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

interface SectionProps {
    title: string;
    children: React.ReactNode
}

export default function Section({title,children}: SectionProps) {
  return (
    <div className="flex flex-col gap-5 items-start">
        <div className="flex justify-between w-full items-center">
   
        <h4 className="uppercase border border-gray-300 p-1 text-sm rounded-lg font-bold px-4">{title}</h4>

    <Tooltip>
        <TooltipTrigger asChild>
            <Link href={''}>
                <MoveRight size={15}/>
            </Link>
        </TooltipTrigger>
        <TooltipContent>
        <p>More</p>
        </TooltipContent>
    </Tooltip>

        </div>
      
      <div className="text-sm w-full overflow-hidden">
        {children}
      </div>
    </div>
  )
}
