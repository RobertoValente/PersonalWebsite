"use client"

import type React from "react"
import Link from "next/link"
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { LinkIcon, Github, Code } from "lucide-react"

interface ProjectCardProps {
    title: string
    description: string
    url: string
    githubUrl: string
    logo: React.ReactNode
    status: boolean
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function ProjectCard({ title, description, url, githubUrl, logo, status }: ProjectCardProps) {
    return (
        <div className="group relative bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-4 transition-all duration-300 hover:border-white/20">
            <div
                className={`status-indicator absolute right-5 -top-5 ${status ? "before:bg-green-500 after:bg-green-500" : "before:bg-red-500 after:bg-red-500"}`}
            />
            <div className="flex items-center gap-4 -mt-2">
                {/*<div className="text-white/80 group-hover:text-white transition-colors"> <Code className="w-5 h-5" /> </div>*/}
                <div className="flex-grow text-left">
                    <h3 className="font-medium text-white/90 group-hover:text-white text-base">{title}</h3>
                    <p className="text-xs text-white/60 group-hover:text-white/80 mt-1">{description}</p>
                    <div className="flex items-center gap-3 mt-3">
                        {url && (
                                <Link
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-white/60 hover:text-white flex items-center gap-1 transition-colors"
                                >
                                    <LinkIcon className="w-3 h-3" />
                                    View Project
                                </Link>
                            )}
                            {githubUrl && (
                                <Link
                                    href={githubUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-white/60 hover:text-white flex items-center gap-1 transition-colors"
                                >
                                    <Github className="w-3 h-3" /> GitHub
                                </Link>
                            )}
                    </div>
                </div>
            </div>
        </div>
    )
}
