"use client"

import { motion } from "framer-motion"
import { Wand2, Music, Share2, Headphones, Sparkles, Palette } from "lucide-react"

export default function Features() {
    const features = [
        {
            icon: <Wand2 className="feature-icon" />,
            title: "AI-Powered Composition",
            description:
                "Our advanced AI understands your text descriptions and transforms them into unique musical compositions.",
        },
        {
            icon: <Music className="feature-icon" />,
            title: "Multiple Genres",
            description: "Create music across various genres - from classical and jazz to electronic and hip-hop.",
        },
        {
            icon: <Share2 className="feature-icon" />,
            title: "Easy Sharing",
            description: "Share your creations directly to social media or export them to your favorite platforms.",
        },
        {
            icon: <Headphones className="feature-icon" />,
            title: "High-Quality Audio",
            description: "All generated music is produced in studio-quality audio formats ready for any use.",
        },
        {
            icon: <Sparkles className="feature-icon" />,
            title: "Customizable Results",
            description: "Fine-tune your generated music with adjustments to tempo, instruments, and mood.",
        },
        {
            icon: <Palette className="feature-icon" />,
            title: "Inspiration Tools",
            description: "Stuck for ideas? Use our prompt suggestions to spark your musical creativity.",
        },
    ]

    return (
        <section id="features" className="features-section">
            <div className="features-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Powerful Features
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="section-description"
                >
                    Everything you need to create amazing music from simple text descriptions
                </motion.p>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            className="feature-card"
                        >
                            <div className="feature-icon-wrapper">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
