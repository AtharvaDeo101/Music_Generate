"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MusicPlayerProps {
    title: string
    audioUrl?: string
}

export default function MusicPlayer({ title, audioUrl = "/demo-music.mp3" }: MusicPlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [duration, setDuration] = useState(0)
    const [currentTime, setCurrentTime] = useState(0)
    const [volume, setVolume] = useState(0.7)
    const [isMuted, setIsMuted] = useState(false)

    const audioRef = useRef<HTMLAudioElement | null>(null)
    const progressBarRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        const audio = new Audio(audioUrl)
        audioRef.current = audio

        audio.addEventListener("loadedmetadata", () => {
            setDuration(audio.duration)
        })

        audio.addEventListener("timeupdate", () => {
            setCurrentTime(audio.currentTime)
        })

        audio.addEventListener("ended", () => {
            setIsPlaying(false)
            setCurrentTime(0)
        })

        return () => {
            audio.pause()
            audio.src = ""
            audio.removeEventListener("loadedmetadata", () => { })
            audio.removeEventListener("timeupdate", () => { })
            audio.removeEventListener("ended", () => { })
        }
    }, [audioUrl])

    const togglePlay = () => {
        if (!audioRef.current) return

        if (isPlaying) {
            audioRef.current.pause()
        } else {
            audioRef.current.play()
        }

        setIsPlaying(!isPlaying)
    }

    const toggleMute = () => {
        if (!audioRef.current) return

        audioRef.current.muted = !isMuted
        setIsMuted(!isMuted)
    }

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number.parseFloat(e.target.value)
        setVolume(newVolume)

        if (audioRef.current) {
            audioRef.current.volume = newVolume
        }

        if (newVolume === 0) {
            setIsMuted(true)
        } else if (isMuted) {
            setIsMuted(false)
        }
    }

    const handleProgressChange = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!progressBarRef.current || !audioRef.current) return

        const progressBar = progressBarRef.current
        const rect = progressBar.getBoundingClientRect()
        const percent = (e.clientX - rect.left) / rect.width
        const newTime = percent * duration

        setCurrentTime(newTime)
        audioRef.current.currentTime = newTime
    }

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
    }

    return (
        <div className="music-player">
            <div className="player-visualization">
                {/* Audio visualization bars */}
                <div className="visualization-bars">
                    {Array.from({ length: 40 }).map((_, i) => (
                        <div
                            key={i}
                            className="visualization-bar"
                            style={{
                                height: `${Math.random() * 70 + 30}%`,
                                opacity: isPlaying ? 1 : 0.5,
                                animation: isPlaying ? `barAnimation ${Math.random() * 0.5 + 0.5}s ease infinite alternate` : "none",
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="player-info">
                <h3 className="music-title">{title}</h3>

                <div className="player-controls">
                    <Button variant="ghost" size="icon" className="control-button">
                        <SkipBack className="control-icon" />
                    </Button>

                    <Button variant="ghost" size="icon" className="play-pause-button" onClick={togglePlay}>
                        {isPlaying ? <Pause className="play-pause-icon" /> : <Play className="play-pause-icon" />}
                    </Button>

                    <Button variant="ghost" size="icon" className="control-button">
                        <SkipForward className="control-icon" />
                    </Button>
                </div>

                <div className="player-progress">
                    <span className="time-display">{formatTime(currentTime)}</span>

                    <div className="progress-bar" ref={progressBarRef} onClick={handleProgressChange}>
                        <div className="progress-fill" style={{ width: `${(currentTime / duration) * 100}%` }}></div>
                    </div>

                    <span className="time-display">{formatTime(duration)}</span>
                </div>

                <div className="volume-control">
                    <Button variant="ghost" size="icon" className="volume-button" onClick={toggleMute}>
                        {isMuted ? <VolumeX className="volume-icon" /> : <Volume2 className="volume-icon" />}
                    </Button>

                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.01"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="volume-slider"
                    />
                </div>
            </div>
        </div>
    )
}
