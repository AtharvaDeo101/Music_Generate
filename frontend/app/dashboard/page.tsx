"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Music, Clock, Heart, Plus, Play, Download, Share2 } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState<"recent" | "favorites">("recent")

    // Mock data for generated music
    const recentMusic = [
        {
            id: "1",
            title: "Ambient Forest Morning",
            description: "Peaceful morning sounds with birds and gentle piano",
            date: "2 days ago",
            duration: "2:34",
            isFavorite: true,
        },
        {
            id: "2",
            title: "Upbeat Electronic Journey",
            description: "Energetic electronic beats with synth melodies",
            date: "3 days ago",
            duration: "3:12",
            isFavorite: false,
        },
        {
            id: "3",
            title: "Jazz Cafe Vibes",
            description: "Smooth jazz with saxophone and light percussion",
            date: "1 week ago",
            duration: "4:05",
            isFavorite: true,
        },
        {
            id: "4",
            title: "Epic Orchestral Theme",
            description: "Dramatic orchestral piece with strings and percussion",
            date: "2 weeks ago",
            duration: "2:58",
            isFavorite: false,
        },
    ]

    const favoriteMusic = recentMusic.filter((item) => item.isFavorite)

    const displayedMusic = activeTab === "recent" ? recentMusic : favoriteMusic

    return (
        <DashboardLayout>
            <div className="dashboard-header">
                <h1>Your Music Dashboard</h1>
                <Link href="/create">
                    <Button className="create-new-btn">
                        <Plus className="btn-icon" />
                        Create New
                    </Button>
                </Link>
            </div>

            <div className="dashboard-stats">
                <div className="stat-card">
                    <div className="stat-icon">
                        <Music />
                    </div>
                    <div className="stat-content">
                        <h3>Total Creations</h3>
                        <p className="stat-value">24</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <Heart />
                    </div>
                    <div className="stat-content">
                        <h3>Favorites</h3>
                        <p className="stat-value">8</p>
                    </div>
                </div>

                <div className="stat-card">
                    <div className="stat-icon">
                        <Clock />
                    </div>
                    <div className="stat-content">
                        <h3>Total Duration</h3>
                        <p className="stat-value">1h 24m</p>
                    </div>
                </div>
            </div>

            <div className="dashboard-tabs">
                <button
                    className={`tab-button ${activeTab === "recent" ? "active" : ""}`}
                    onClick={() => setActiveTab("recent")}
                >
                    Recent
                </button>
                <button
                    className={`tab-button ${activeTab === "favorites" ? "active" : ""}`}
                    onClick={() => setActiveTab("favorites")}
                >
                    Favorites
                </button>
            </div>

            <div className="music-list">
                {displayedMusic.map((item) => (
                    <div key={item.id} className="music-item">
                        <div className="music-waveform">
                            {/* Placeholder for waveform visualization */}
                            <div className="waveform-placeholder"></div>
                            <Button size="icon" className="play-button">
                                <Play className="play-icon" />
                            </Button>
                        </div>

                        <div className="music-info">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <div className="music-meta">
                                <span className="music-date">{item.date}</span>
                                <span className="music-duration">{item.duration}</span>
                            </div>
                        </div>

                        <div className="music-actions">
                            <Button size="icon" variant="ghost" className="action-button">
                                <Heart className={`heart-icon ${item.isFavorite ? "favorite" : ""}`} />
                            </Button>
                            <Button size="icon" variant="ghost" className="action-button">
                                <Download className="download-icon" />
                            </Button>
                            <Button size="icon" variant="ghost" className="action-button">
                                <Share2 className="share-icon" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </DashboardLayout>
    )
}
