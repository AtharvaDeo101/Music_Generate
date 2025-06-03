"use client"

import { motion } from "framer-motion"

export default function Testimonials() {
    const testimonials = [
        {
            quote:
                "MelodiAI has completely transformed how I create background music for my YouTube videos. What used to take days now takes minutes!",
            author: "Sarah Johnson",
            role: "Content Creator",
        },
        {
            quote:
                "As a game developer, I need unique soundtracks quickly. This tool has become essential for my creative process.",
            author: "Michael Chen",
            role: "Indie Game Developer",
        },
        {
            quote:
                "The quality of music this AI produces is incredible. My podcast listeners always ask about my new intro music!",
            author: "Alex Rodriguez",
            role: "Podcast Host",
        },
    ]

    return (
        <section id="testimonials" className="testimonials-section">
            <div className="testimonials-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    What Our Users Say
                </motion.h2>

                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            className="testimonial-card"
                        >
                            <div className="quote-mark">"</div>
                            <p className="testimonial-quote">{testimonial.quote}</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.author.charAt(0)}</div>
                                <div className="author-info">
                                    <h4 className="author-name">{testimonial.author}</h4>
                                    <p className="author-role">{testimonial.role}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
