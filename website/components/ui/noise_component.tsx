"use client"
import { useEffect, useState } from "react"

const NoiseBackground = () => {
  const [opacity, setOpacity] = useState(0)

  useEffect(() => {
    let canvas: HTMLCanvasElement | null = document.getElementById("noise") as HTMLCanvasElement
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let wWidth = window.innerWidth
    let wHeight = window.innerHeight
    let noiseData: ImageData[] = []
    let frame = 0
    let loopTimeout: number
    let resizeThrottle: number

    const createNoise = () => {
      const idata = ctx.createImageData(wWidth, wHeight)
      const buffer32 = new Uint32Array(idata.data.buffer)
      const len = buffer32.length
      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.5) {
          buffer32[i] = 0xff000000
        }
      }
      noiseData.push(idata)
    }

    const paintNoise = () => {
      frame = (frame + 1) % noiseData.length
      ctx.putImageData(noiseData[frame], 0, 0)
    }

    const loop = () => {
      paintNoise()
      loopTimeout = window.setTimeout(() => {
        window.requestAnimationFrame(loop)
      }, 1000 / 10)
    }

    const setup = () => {
      wWidth = window.innerWidth
      wHeight = window.innerHeight
      canvas.width = wWidth
      canvas.height = wHeight
      noiseData = [] // reset noise data
      for (let i = 0; i < 100; i++) {
        createNoise()
      }
      loop()
    }

    const handleResize = () => {
      clearTimeout(resizeThrottle)
      resizeThrottle = window.setTimeout(() => {
        clearTimeout(loopTimeout)
        setup()
      }, 200)
    }

    setup()
    window.addEventListener("resize", handleResize, false)

    setTimeout(() => setOpacity(0.15), 1000) // Gradually increase opacity

    return () => {
      window.removeEventListener("resize", handleResize)
      clearTimeout(loopTimeout)
    }
  }, [])

  return (
    <canvas
      id="noise"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: -1,
        opacity: opacity,
        transition: "opacity 1s ease-in-out",
      }}
    />
  )
}

export default NoiseBackground
