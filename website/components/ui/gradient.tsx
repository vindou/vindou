"use client"
import React from "react"

const FancyGradientBackground = () => {
  return (
    <>
      {/* The animated gradient layer */}
      <div className="fancy-gradient-background"></div>

      <style jsx>{`
        .fancy-gradient-background {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: -2;
          background: radial-gradient(
            circle at 0% 0%,
            oklch(54.87% 0.222 260.33),
            oklch(51.15% 0.204 260.17),
            oklch(47.36% 0.185 259.89),
            oklch(43.48% 0.17 260.2),
            oklch(39.53% 0.15 259.87)
          );
          background-size: 200% 200%;

          /* Animation to shift the gradient around */
          animation: swirl 5s ease-in-out infinite;
        }

        @keyframes swirl {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
      `}</style>
    </>
  )
}

export default FancyGradientBackground
