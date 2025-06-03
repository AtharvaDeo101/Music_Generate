"use client"

import { useEffect, useRef } from "react"

export function WaveAnimation() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        let animationFrameId: number
        let time = 0

        // Set canvas dimensions
        const resizeCanvas = () => {
            canvas.width = window.innerWidth
            canvas.height = 300
        }

        resizeCanvas()
        window.addEventListener("resize", resizeCanvas)

        // Draw wave animation
        const drawWave = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // First wave
            ctx.beginPath()
            ctx.moveTo(0, canvas.height / 2)

            for (let i = 0; i < canvas.width; i++) {
                const x = i
                const y = Math.sin(i * 0.01 + time) * 30 + canvas.height / 2
                ctx.lineTo(x, y)
            }

            ctx.strokeStyle = "rgba(138, 43, 226, 0.2)"
            ctx.lineWidth = 2
            ctx.stroke()

            // Second wave
            ctx.beginPath()
            ctx.moveTo(0, canvas.height / 2)

            for (let i = 0; i < canvas.width; i++) {
                const x = i
                const y = Math.sin(i * 0.02 + time * 1.5) * 20 + canvas.height / 2
                ctx.lineTo(x, y)
            }

            ctx.strokeStyle = "rgba(138, 43, 226, 0.3)"
            ctx.lineWidth = 3
            ctx.stroke()

            // Third wave
            ctx.beginPath()
            ctx.moveTo(0, canvas.height / 2)

            for (let i = 0; i < canvas.width; i++) {
                const x = i
                const y = Math.sin(i * 0.03 + time * 0.8) * 15 + canvas.height / 2
                ctx.lineTo(x, y)
            }

            ctx.strokeStyle = "rgba(138, 43, 226, 0.4)"
            ctx.lineWidth = 2
            ctx.stroke()

            time += 0.05
            animationFrameId = requestAnimationFrame(drawWave)
        }

        drawWave()

        return () => {
            window.removeEventListener("resize", resizeCanvas)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return <canvas ref={canvasRef} className="wave-canvas" />
}
