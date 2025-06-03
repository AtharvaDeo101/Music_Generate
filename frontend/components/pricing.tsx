"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Pricing() {
    const plans = [
        {
            name: "Free",
            price: "$0",
            period: "forever",
            description: "Perfect for trying out the platform",
            features: [
                "5 music generations per month",
                "30-second compositions",
                "Standard quality audio",
                "Basic editing tools",
            ],
            buttonText: "Get Started",
            buttonLink: "/signup",
            highlighted: false,
        },
        {
            name: "Pro",
            price: "$12",
            period: "per month",
            description: "For creators who need more power",
            features: [
                "50 music generations per month",
                "Up to 3-minute compositions",
                "High-quality audio",
                "Advanced editing tools",
                "Spotify integration",
                "Priority support",
            ],
            buttonText: "Upgrade to Pro",
            buttonLink: "/signup?plan=pro",
            highlighted: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "pricing",
            description: "For teams and businesses",
            features: [
                "Unlimited music generations",
                "Up to 10-minute compositions",
                "Studio-quality audio",
                "Full editing suite",
                "API access",
                "Dedicated support",
                "Custom branding",
            ],
            buttonText: "Contact Sales",
            buttonLink: "/contact",
            highlighted: false,
        },
    ]

    return (
        <section id="pricing" className="pricing-section">
            <div className="pricing-container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="section-title"
                >
                    Simple, Transparent Pricing
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="section-description"
                >
                    Choose the plan that works best for your creative needs
                </motion.p>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 * index }}
                            viewport={{ once: true }}
                            className={`pricing-card ${plan.highlighted ? "pricing-card-highlighted" : ""}`}
                        >
                            <h3 className="plan-name">{plan.name}</h3>
                            <div className="plan-price">
                                <span className="price">{plan.price}</span>
                                <span className="period">{plan.period}</span>
                            </div>
                            <p className="plan-description">{plan.description}</p>

                            <ul className="plan-features">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="feature-item">
                                        <Check className="check-icon" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link href={plan.buttonLink}>
                                <Button className={`plan-button ${plan.highlighted ? "plan-button-highlighted" : ""}`}>
                                    {plan.buttonText}
                                </Button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
