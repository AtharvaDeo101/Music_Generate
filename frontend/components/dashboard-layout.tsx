"use client"

import type React from "react"

import { useState } from "react"
import { Music2, Home, Music, Settings, LogOut, User, Headphones, BarChart3, Menu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(true)
    const pathname = usePathname()

    const isActive = (path: string) => {
        return pathname === path
    }

    return (
        <div className="dashboard-layout">
            <aside className={`dashboard-sidebar ${sidebarOpen ? "open" : "closed"}`}>
                <div className="sidebar-header">
                    <Link href="/" className="sidebar-logo">
                        <Music2 className="logo-icon" />
                        <span className="logo-text">MelodiAI</span>
                    </Link>
                    <Button variant="ghost" size="icon" className="sidebar-toggle" onClick={() => setSidebarOpen(!sidebarOpen)}>
                        <Menu className="toggle-icon" />
                    </Button>
                </div>

                <nav className="sidebar-nav">
                    <Link href="/dashboard" className={`nav-item ${isActive("/dashboard") ? "active" : ""}`}>
                        <Home className="nav-icon" />
                        <span className="nav-text">Dashboard</span>
                    </Link>

                    <Link href="/create" className={`nav-item ${isActive("/create") ? "active" : ""}`}>
                        <Music className="nav-icon" />
                        <span className="nav-text">Create Music</span>
                    </Link>

                    <Link href="/spotify" className={`nav-item ${isActive("/spotify") ? "active" : ""}`}>
                        <Headphones className="nav-icon" />
                        <span className="nav-text">Spotify</span>
                    </Link>

                    <Link href="/analytics" className={`nav-item ${isActive("/analytics") ? "active" : ""}`}>
                        <BarChart3 className="nav-icon" />
                        <span className="nav-text">Analytics</span>
                    </Link>

                    <Link href="/profile" className={`nav-item ${isActive("/profile") ? "active" : ""}`}>
                        <User className="nav-icon" />
                        <span className="nav-text">Profile</span>
                    </Link>

                    <Link href="/settings" className={`nav-item ${isActive("/settings") ? "active" : ""}`}>
                        <Settings className="nav-icon" />
                        <span className="nav-text">Settings</span>
                    </Link>
                </nav>

                <div className="sidebar-footer">
                    <Button variant="ghost" className="logout-button">
                        <LogOut className="logout-icon" />
                        <span>Log Out</span>
                    </Button>
                </div>
            </aside>

            <main className="dashboard-main">
                <div className="dashboard-content">{children}</div>
            </main>
        </div>
    )
}
