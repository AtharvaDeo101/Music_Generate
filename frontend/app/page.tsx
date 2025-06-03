import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import { SparklesCore } from "@/components/sparkles"
import Features from "@/components/features"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
    return (
        <main className="main-container">
            {/* Ambient background with moving particles */}
            <div className="sparkles-background">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="sparkles-canvas"
                    particleColor="#FFFFFF"
                />
            </div>

            <div className="content-wrapper">
                <Navbar />
                <Hero />
                <Features />
                <ContactSection />
                <Footer />
            </div>
        </main>
    )
}
