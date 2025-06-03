"use client"

import { Button } from "@/components/ui/button"
import { Music2, Menu } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import type React from "react"

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} className="navbar">
            <Link href="/" className="navbar-brand">
                <Music2 className="brand-icon" />
                <span className="brand-text">MelodiAI</span>
            </Link>

            <div className="navbar-links">
                <NavLink href="#features">Features</NavLink>
                <NavLink href="#testimonials">Testimonials</NavLink>
                <NavLink href="#pricing">Pricing</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </div>

            <div className="navbar-actions">
                <Link href="/login">
                    <Button variant="ghost" className="sign-in-btn">
                        Sign In
                    </Button>
                </Link>
                <Link href="/signup">
                    <Button className="get-started-btn">Get Started</Button>
                </Link>
            </div>

            <Button
                variant="ghost"
                size="icon"
                className="mobile-menu-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <Menu className="menu-icon" />
            </Button>

            {mobileMenuOpen && (
                <div className="mobile-menu">
                    <Link href="#features" onClick={() => setMobileMenuOpen(false)}>
                        Features
                    </Link>
                    <Link href="#testimonials" onClick={() => setMobileMenuOpen(false)}>
                        Testimonials
                    </Link>
                    <Link href="#pricing" onClick={() => setMobileMenuOpen(false)}>
                        Pricing
                    </Link>
                    <Link href="#contact" onClick={() => setMobileMenuOpen(false)}>
                        Contact
                    </Link>
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                        Sign In
                    </Link>
                    <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                        Get Started
                    </Link>
                </div>
            )}
        </motion.nav>
    )
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
    return (
        <Link href={href} className="nav-link">
            {children}
            <span className="nav-link-underline" />
        </Link>
    )
}
