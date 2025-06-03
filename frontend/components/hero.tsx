"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Music, Sparkles } from "lucide-react"
import { WaveAnimation } from "@/components/wave-animation"
import Link from "next/link"

export default function Hero() {
    return (
        <div className="hero-container">
            {/* Sound wave animation background */}
            <div className="wave-animation-container">
                <WaveAnimation />
            </div>

            <div className="hero-content">
                <div className="hero-text-container">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        <h1 className="hero-title">
                            Transform Your Words Into
                            <span className="hero-title-gradient"> Beautiful Music</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="hero-description"
                    >
                        Describe the music you imagine, and our AI will compose it for you. From ambient melodies to energetic
                        beats, create unique soundtracks in seconds.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="hero-buttons"
                    >
                        <Link href="/create">
                            <Button size="lg" className="create-music-btn">
                                <Music className="btn-icon" />
                                Create Music
                            </Button>
                        </Link>
                        <Link href="/dashboard">
                            <Button size="lg" variant="outline" className="examples-btn">
                                <Sparkles className="btn-icon" />
                                See Examples
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Animated music notes */}
            <div className="music-notes-container">
                <div className="music-note note-1">♪</div>
                <div className="music-note note-2">♫</div>
                <div className="music-note note-3">♩</div>
                <div className="music-note note-4">♬</div>
            </div>
        </div>
    )
}
