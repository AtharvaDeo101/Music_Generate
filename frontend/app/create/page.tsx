"use client"

import { useState } from "react"
import DashboardLayout from "@/components/dashboard-layout"
import { Button } from "@/components/ui/button"
import { Wand2, Download, Share2, Heart, Loader2 } from "lucide-react"
import MusicPlayer from "@/components/music-player"

export default function CreateMusic() {
    const [prompt, setPrompt] = useState("")
    const [isGenerating, setIsGenerating] = useState(false)
    const [generatedMusic, setGeneratedMusic] = useState<null | { url: string; title: string }>(null)
    const [isFavorite, setIsFavorite] = useState(false)

    const handleGenerate = () => {
        if (!prompt.trim()) return

        setIsGenerating(true)

        // Simulate AI generation
        setTimeout(() => {
            setGeneratedMusic({
                url: "/demo-music.mp3", // This would be a real URL in production
                title: prompt,
            })
            setIsGenerating(false)
        }, 3000)
    }

    const toggleFavorite = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <DashboardLayout>
            <div className="create-music-container">
                <h1 className="page-title">Create Music</h1>

                <div className="prompt-section">
                    <h2>Describe Your Music</h2>
                    <p className="prompt-description">
                        Describe the music you want to create. Be specific about mood, instruments, tempo, and style.
                    </p>

                    <div className="prompt-examples">
                        <h3>Examples:</h3>
                        <div className="example-chips">
                            <button
                                className="example-chip"
                                onClick={() =>
                                    setPrompt("A peaceful piano melody with soft strings and gentle rainfall in the background")
                                }
                            >
                                Peaceful piano with rainfall
                            </button>
                            <button
                                className="example-chip"
                                onClick={() => setPrompt("Upbeat electronic dance music with synth leads and a strong bass line")}
                            >
                                Upbeat electronic dance
                            </button>
                            <button
                                className="example-chip"
                                onClick={() => setPrompt("Epic orchestral theme with dramatic percussion and brass fanfare")}
                            >
                                Epic orchestral theme
                            </button>
                        </div>
                    </div>

                    <textarea
                        className="prompt-input"
                        placeholder="E.g., A relaxing jazz piece with piano, soft drums, and saxophone, perfect for a rainy evening..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        rows={5}
                    ></textarea>

                    <Button className="generate-button" onClick={handleGenerate} disabled={isGenerating || !prompt.trim()}>
                        {isGenerating ? (
                            <>
                                <Loader2 className="animate-spin mr-2" />
                                Generating...
                            </>
                        ) : (
                            <>
                                <Wand2 className="mr-2" />
                                Generate Music
                            </>
                        )}
                    </Button>
                </div>

                {isGenerating && (
                    <div className="generating-indicator">
                        <div className="generating-animation">
                            <div className="bar bar1"></div>
                            <div className="bar bar2"></div>
                            <div className="bar bar3"></div>
                            <div className="bar bar4"></div>
                            <div className="bar bar5"></div>
                        </div>
                        <p>Creating your masterpiece...</p>
                    </div>
                )}

                {generatedMusic && !isGenerating && (
                    <div className="result-section">
                        <h2>Your Generated Music</h2>

                        <div className="music-player-container">
                            <MusicPlayer title={generatedMusic.title} />
                        </div>

                        <div className="music-actions">
                            <Button
                                variant="outline"
                                className={`favorite-button ${isFavorite ? "is-favorite" : ""}`}
                                onClick={toggleFavorite}
                            >
                                <Heart className="mr-2" />
                                {isFavorite ? "Saved to Favorites" : "Save to Favorites"}
                            </Button>

                            <Button variant="outline" className="download-button">
                                <Download className="mr-2" />
                                Download
                            </Button>

                            <Button variant="outline" className="share-button">
                                <Share2 className="mr-2" />
                                Share
                            </Button>
                        </div>

                        <div className="regenerate-section">
                            <p>Not quite what you wanted?</p>
                            <Button variant="outline" className="regenerate-button" onClick={handleGenerate}>
                                <Wand2 className="mr-2" />
                                Regenerate
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </DashboardLayout>
    )
}
