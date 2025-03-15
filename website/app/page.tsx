// app/page.tsx
import React from "react"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import NoiseBackground from "@/components/ui/noise_component"
import FancyGradientBackground from "@/components/ui/gradient"

export default function HomePage() {
  return (
    <>
      <NoiseBackground/>
      <FancyGradientBackground/>
      <div className="min-h-screen flex flex-col px-8 py-16 relative">
        {/* Main content centered vertically */}
        <div className="flex-grow flex items-center justify-center relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start mx-auto max-w-5xl space-y-8 md:space-y-0 md:space-x-8">
            {/* Left vertical section */}
            <div className="flex flex-col items-center justify-start border-r-4 border-black pr-8">
              <div className="flex flex-col space-y-4">
                <Button variant="neutral" asChild className="w-28 border-2">
                  <Link href="/">Home</Link>
                </Button>
                <Button variant="neutral" asChild className="w-28 border-2">
                  <Link href="https://gilcha.com/portfolio">Portfolio</Link>
                </Button>
                <Button variant="neutral" asChild className="w-28 border-2">
                  <Link href="/reading-list">Reading List</Link>
                </Button>
                <Button variant="neutral" asChild className="w-28 border-2">
                  <Link href="/resume.pdf">Resume</Link>
                </Button>
              </div>
            </div>

            {/* Main content card */}
            <Card className="w-full max-w-2xl border-2 border-black bg-white shadow-none p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-3xl font-extrabold border-b-2 border-black pb-2">
                  Gilbert Chang
                </CardTitle>
                <p className="mt-2 text-sm">chang940「at」purdue「dot」edu</p>
              </CardHeader>
              <CardContent className="mt-4 space-y-6">
                <p>
                  I'm a sophomore at Purdue University studying mechanical engineering, computer science, and
                  mathematics, with a minor in ECE. I'll be joining <a className="underline" href="https://personainc.ai/">Persona AI</a> this summer as a mechanical engineering intern, focusing on advanced end effector design for humanoid robots, developed to be used in extreme
                  environments.
                </p>
                <div>
                  <h2 className="text-lg font-semibold underline decoration-2 underline-offset-4">
                    Research
                  </h2>
                  <p>
                  My research focuses primarily on innovative applications of tactile sensing within soft robotic end-effectors under the mentorship of Dr. Kingston at the
                    <a className="underline" href="https://commalab.org/"> Computational
                    Motion, Manipulation, and Autonomy Lab.</a> Additionally, I'm actively involved in psychrometric chamber modeling
                    research under Dr. Cai at <a className="underline" href="https://engineering.purdue.edu/Herrick">Herrick Laboratories</a>,
                    where we explore cutting-edge techniques in heat pump control and analysis.
                  </p>
                  <br/>
                  <p>
                  My broader interests lie at the intersection of electromechanical systems, classical control theory, soft robotics, and human-robot interaction, aiming to contribute towards advancements in robotics that enhance the human experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <footer className="relative z-10 text-center text-xs font-bold mt-8">
          © {new Date().getFullYear()} Gilbert Chang.
        </footer>
      </div>
    </>
  )
}
