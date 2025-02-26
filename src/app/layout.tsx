import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Roberto Valente - Dev",
    description: "🚀 Dreaming higher than the sky! But also building things.",
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.className} text-white antialiased min-h-screen`}>
                <div className="night-sky">
                    {[...Array(100)].map((_, i) => (
                        <div
                            key={i}
                            className="star"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${20 + Math.random() * 20}s`,
                                animation: `twinkle 5s infinite ease-in-out, move ${20 + Math.random() * 20}s linear infinite`,
                            }}
                        />
                    ))}
                </div>
                <main className="container mx-auto px-4 py-16 max-w-2xl relative z-10">{children}</main>
            </body>
        </html>
    )
}
