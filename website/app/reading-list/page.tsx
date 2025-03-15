// app/reading_list.tsx
import React from "react"
import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import NoiseBackground from "@/components/ui/noise_component"

export default function ReadingListPage() {
  return (
    <>
      <div className="min-h-screen flex flex-col px-8 py-16 relative">
        {/* Main content centered vertically */}
        <div className="flex-grow flex items-center justify-center relative z-10">
          <div className="flex flex-col md:flex-row items-start mx-auto max-w-5xl space-y-8 md:space-y-0 md:space-x-8">
            {/* Sidebar navigation */}
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

            {/* Reading list card */}
            <Card className="w-full max-w-2xl border-2 border-black bg-white shadow-none p-6">
              <CardHeader className="p-0">
                <CardTitle className="text-3xl font-extrabold border-b-2 border-black pb-2">
                  Reading List
                </CardTitle>
              </CardHeader>
              <CardContent className="mt-4 space-y-6">
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <a
                      href="https://graphics.cs.wisc.edu/Papers/2019/RMG19/19_ICRA_Stampede.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Stampede Paper
                    </a>
                  </li>
                  <li>
                    "A hierarchical gray-box dynamic modeling methodology for direct-expansion cooling systems to support control stability analysis."
                  </li>
                  <li>
                    <a
                      href="https://youtu.be/bCz4OMemCcA?si=wcV3pgMpeH1WOVM5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Attention is All You Need (Video)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://arxiv.org/pdf/1706.03762"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Attention is All You Need (Paper)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://arxiv.org/pdf/2501.09747"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      FAST: Efficient Action Tokenization for Vision-Language-Action Models
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pi.website/download/pi0.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      π0: A Vision-Language-Action Flow Model for General Robot Control
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://d2l.ai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Dive into Deep Learning
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://homes.cs.washington.edu/~pedrod/papers/cacm12.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      A Few Useful Things to Know About Machine Learning
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dl.acm.org/doi/pdf/10.1145/3065386"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      AlexNet
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://spinningup.openai.com/en/latest/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      SpinningUp
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://stable-baselines3.readthedocs.io/en/master/index.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      StableBaselines3
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://arxiv.org/pdf/1707.06347"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      PPOs
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://arxiv.org/pdf/1602.01783"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      A2C
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://caseyhandmer.wordpress.com/2025/02/04/stuff-you-should-have-been-taught-in-college-but-werent/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Stuff You Should Have Been Taught in College (But Weren't)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://arxiv.org/pdf/2407.08222"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Arxiv Paper (2407.08222)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.liebertpub.com/doi/10.1089/soro.2023.0134"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Soro 2023 Paper
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.frontiersin.org/journals/robotics-and-ai/articles/10.3389/frobt.2020.590076/full"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Frontiers in Robotics and AI Article
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/sofa-framework/sofa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      SOFA Framework (GitHub)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://project.inria.fr/softrobot/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      SoftRobot Project (INRIA)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://discovery.ucl.ac.uk/id/eprint/10164313/1/ieee_ei_enabled_gripper_review_amended.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      IEEE EI Enabled Gripper Review
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://dl.acm.org/doi/10.1145/1957656.1957674"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      ACM Gripper Review
                    </a>
                  </li>
                  {/* Additional Links */}
                  <li>
                    <a
                      href="https://ieeexplore.ieee.org/document/6483603"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      IEEE Explore Document 6483603
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://openreview.net/pdf?id=Ffn8Z4Q-zU"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      OpenReview Paper
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://openvla.github.io/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      OpenVLA
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://en.wikipedia.org/wiki/Theory_of_mind"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Theory of Mind (Wikipedia)
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://news.mit.edu/2025/robotic-helper-mistakes-nudging-in-right-direction-0307"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      MIT News: Robotic Helper Mistakes Nudging in Right Direction
                    </a>
                  </li>
                </ul>
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
