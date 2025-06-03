import { Music2 } from "lucide-react"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <Link href="/" className="footer-logo">
                            <Music2 className="footer-logo-icon" />
                            <span>MelodiAI</span>
                        </Link>
                        <p className="footer-tagline">Transforming words into beautiful music with AI</p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-links-column">
                            <h3>Product</h3>
                            <ul>
                                <li>
                                    <Link href="/features">Features</Link>
                                </li>
                                <li>
                                    <Link href="/pricing">Pricing</Link>
                                </li>
                                <li>
                                    <Link href="/examples">Examples</Link>
                                </li>
                                <li>
                                    <Link href="/updates">Updates</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-links-column">
                            <h3>Resources</h3>
                            <ul>
                                <li>
                                    <Link href="/blog">Blog</Link>
                                </li>
                                <li>
                                    <Link href="/tutorials">Tutorials</Link>
                                </li>
                                <li>
                                    <Link href="/support">Support</Link>
                                </li>
                                <li>
                                    <Link href="/api">API</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-links-column">
                            <h3>Company</h3>
                            <ul>
                                <li>
                                    <Link href="/about">About</Link>
                                </li>
                                <li>
                                    <Link href="/careers">Careers</Link>
                                </li>
                                <li>
                                    <Link href="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link href="/press">Press</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-links-column">
                            <h3>Legal</h3>
                            <ul>
                                <li>
                                    <Link href="/terms">Terms</Link>
                                </li>
                                <li>
                                    <Link href="/privacy">Privacy</Link>
                                </li>
                                <li>
                                    <Link href="/cookies">Cookies</Link>
                                </li>
                                <li>
                                    <Link href="/licenses">Licenses</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="copyright">&copy; {new Date().getFullYear()} MelodiAI. All rights reserved.</p>
                    <div className="social-links">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            Twitter
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            Facebook
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            Instagram
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link">
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
