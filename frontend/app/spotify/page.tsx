"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Music, Plus, RefreshCw, ExternalLink } from "lucide-react"

export default function SpotifyIntegration() {
  const [isConnected, setIsConnected] = useState(false)

  // Mock Spotify playlists
  const playlists = [
    {
      id: "1",
      name: "Chill Vibes",
      tracks: 24,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "2",
      name: "Workout Mix",
      tracks: 18,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "3",
      name: "Focus Flow",
      tracks: 32,
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  // Mock generated music that can be exported
  const generatedMusic = [
    {
      id: "1",
      title: "Ambient Forest Morning",
      duration: "2:34",
    },
    {
      id: "2",
      title: "Upbeat Electronic Journey",
      duration: "3:12",
    },
    {
      id: "3",
      title: "Jazz Cafe Vibes",
      duration: "4:05",
    },
  ]

  const connectSpotify = () => {
    // In a real app, this would redirect to Spotify OAuth
    setTimeout(() => {
      setIsConnected(true)
    }, 1000)
  }

  const disconnectSpotify = () => {
    setIsConnected(false)
  }

  return (
    <DashboardLayout>
      <div className="spotify-container">
        <div className="spotify-header">
          <h1>Spotify Integration</h1>

          {isConnected ? (
            <Button variant="outline" className="disconnect-button" onClick={disconnectSpotify}>
              Disconnect Spotify
            </Button>
          ) : (
            <Button className="connect-button" onClick={connectSpotify}>
              Connect Spotify
            </Button>
          )}
        </div>

        {!isConnected ? (
          <div className="spotify-connect-prompt">
            <div className="spotify-logo">
              <Music className="spotify-icon" />
            </div>
            <h2>Connect Your Spotify Account</h2>
            <p>
              Link your Spotify account to export your generated music directly to your playlists or import inspiration
              from your favorite tracks.
            </p>
            <Button className="connect-button-large" onClick={connectSpotify}>
              Connect with Spotify
            </Button>
          </div>
        ) : (
          <div className="spotify-connected">
            <div className="spotify-sections">
              <div className="spotify-section">
                <div className="section-header">
                  <h2>Your Spotify Playlists</h2>
                  <Button variant="outline" size="sm" className="refresh-button">
                    <RefreshCw className="refresh-icon" />
                    Refresh
                  </Button>
                </div>

                <div className="playlists-grid">
                  {playlists.map((playlist) => (
                    <div key={playlist.id} className="playlist-card">
                      <img src={playlist.image || "/placeholder.svg"} alt={playlist.name} className="playlist-image" />
                      <div className="playlist-info">
                        <h3>{playlist.name}</h3>
                        <p>{playlist.tracks} tracks</p>
                      </div>
                      <div className="playlist-actions">
                        <Button variant="ghost" size="sm" className="playlist-action-button">
                          <ExternalLink className="action-icon" />
                        </Button>
                      </div>
                    </div>
                  ))}

                  <div className="playlist-card new-playlist">
                    <div className="new-playlist-icon">
                      <Plus className="plus-icon" />
                    </div>
                    <p>Create New Playlist</p>
                  </div>
                </div>
              </div>

              <div className="spotify-section">
                <div className="section-header">
                  <h2>Export Your Music to Spotify</h2>
                </div>

                <div className="export-list">
                  {generatedMusic.map((music) => (
                    <div key={music.id} className="export-item">
                      <div className="music-waveform small">
                        {/* Placeholder for waveform visualization */}
                        <div className="waveform-placeholder small"></div>
                      </div>

                      <div className="export-info">
                        <h3>{music.title}</h3>
                        <p>{music.duration}</p>
                      </div>

                      <div className="export-actions">
                        <Button variant="outline" size="sm" className="export-action-button">
                          <Plus className="action-icon" />
                          Add to Playlist
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="spotify-tips">
              <h3>Tips for Spotify Integration</h3>
              <ul className="tips-list">
                <li>Export your generated music directly to any Spotify playlist</li>
                <li>Use your Spotify playlists as inspiration for new music generation</li>
                <li>Share your MelodiAI creations with friends via Spotify</li>
                <li>Create themed playlists combining your generated music with existing tracks</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}
