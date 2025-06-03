"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    })

    const [formStatus, setFormStatus] = useState<null | "success" | "error">(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Simulate form submission
        setTimeout(() => {
            setFormStatus("success")
            setFormData({ name: "", email: "", message: "" })

            // Reset status after 3 seconds
            setTimeout(() => setFormStatus(null), 3000)
        }, 1000)
    }

    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Get In Touch
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="section-description"
                >
                    Have questions or feedback? We'd love to hear from you.
                </motion.p>

                <div className="contact-content">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="contact-info"
                    >
                        <div className="info-item">
                            <h3>Email</h3>
                            <p>support@melodiai.com</p>
                        </div>
                        <div className="info-item">
                            <h3>Phone</h3>
                            <p>+1 (555) 123-4567</p>
                        </div>
                        <div className="info-item">
                            <h3>Address</h3>
                            <p>
                                123 Music Avenue
                                <br />
                                San Francisco, CA 94107
                            </p>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="contact-form"
                        onSubmit={handleSubmit}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <Button type="submit" className="submit-button">
                            Send Message
                        </Button>

                        {formStatus === "success" && <p className="form-success">Message sent successfully!</p>}

                        {formStatus === "error" && <p className="form-error">Something went wrong. Please try again.</p>}
                    </motion.form>
                </div>
            </div>
        </section>
    )
}
