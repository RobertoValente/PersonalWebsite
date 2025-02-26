import Image from "next/image"
import Link from "next/link"
import { Github } from "lucide-react"
import ProjectCard from "../components/project-card"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import projects from "@/lib/projects.json"

export default function Home() {
    return (
        <div className="flex flex-col items-center text-center">
            <div className="space-y-4 mb-6">
                <div className="relative w-24 h-24 mx-auto">
                    <Image
                        src="https://avatars.githubusercontent.com/u/73560955?s=400&u=33d543f03ece8374ded4ff93d9047e172e2d831a&v=4"
                        alt="Profile picture"
                        width={96}
                        height={96}
                        className="rounded-full object-cover border-2 border-dashed"
                    />
                </div>
                <div>
                    <h1 className="text-xl font-bold mb-1 text-white/90">Roberto Valente</h1>
                </div>
                <p className="text-sm text-white/60 max-w-sm mx-auto">
                    🚀 Dreaming higher than the sky!<br />But also building things. 
                </p>

                <Button asChild>
                    <Link href="https://github.com/RobertoValente">
                        <Github /> GitHub  
                    </Link>
                </Button>
            </div>

            <ScrollArea className="w-full max-w-xl rounded-md border-2 border-dashed h-[48vh]">
                <div className="p-4 space-y-3">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </ScrollArea>
        </div>
    )
}
