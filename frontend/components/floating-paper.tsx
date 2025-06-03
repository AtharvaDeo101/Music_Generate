"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FileText } from "lucide-react"

export function FloatingPaper({ count = 5 }) {
    const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

    useEffect(() => {
        // Update dimensions only on client side
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
        })

        const handleResize = () => {
            setDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (
        <div className="floating-paper-wrapper">
            {Array.from({ length: count }).map((_, i) => (
                <motion.div
                    key={i}
                    className="floating-paper-item"
                    initial={{
                        x: Math.random() * dimensions.width,
                        y: Math.random() * dimensions.height,
                    }}
                    animate={{
                        x: [Math.random() * dimensions.width, Math.random() * dimensions.width, Math.random() * dimensions.width],
                        y: [
                            Math.random() * dimensions.height,
                            Math.random() * dimensions.height,
                            Math.random() * dimensions.height,
                        ],
                        rotate: [0, 180, 360],
                    }}
                    transition={{
                        duration: 20 + Math.random() * 10,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "linear",
                    }}
                >
                    <div className="paper-card">
                        <FileText className="paper-icon" />
                    </div>
                </motion.div>
            ))}
        </div>
    )
}
