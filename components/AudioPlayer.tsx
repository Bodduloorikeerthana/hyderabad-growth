"use client";

import React, { useState, useRef, useEffect } from 'react';

interface AudioPlayerProps {
    youtubeId: string;
    title?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ youtubeId, title }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(100);
    const [showVolumeSlider, setShowVolumeSlider] = useState(false);
    const iframeRef = useRef<HTMLIFrameElement>(null);
    const playerRef = useRef<any>(null);
    const progressRef = useRef<HTMLDivElement>(null);

    // Function to extract YouTube ID from various YouTube URL formats
    const getYouTubeId = (url: string): string => {
        if (!url.includes('/') && !url.includes('youtube.com')) {
            return url;
        }

        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11) ? match[2] : url;
    };

    const videoId = getYouTubeId(youtubeId);

    // Format time (seconds) to MM:SS
    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    // Handle progress bar click
    const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!progressRef.current) return;

        const rect = progressRef.current.getBoundingClientRect();
        const clickPosition = (e.clientX - rect.left) / rect.width;
        const newTime = clickPosition * duration;

        if (playerRef.current) {
            playerRef.current.seekTo(newTime);
        }
    };

    // Toggle play/pause
    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };

    // Forward 10 seconds
    const handleForward = () => {
        if (playerRef.current) {
            const newTime = Math.min(currentTime + 10, duration);
            playerRef.current.seekTo(newTime);
        }
    };

    // Rewind 10 seconds
    const handleRewind = () => {
        if (playerRef.current) {
            const newTime = Math.max(currentTime - 10, 0);
            playerRef.current.seekTo(newTime);
        }
    };

    // Handle volume change
    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseInt(e.target.value);
        setVolume(newVolume);
        if (playerRef.current) {
            playerRef.current.setVolume(newVolume);
        }
    };

    // When YouTube iframe API is ready
    useEffect(() => {
        // Load YouTube iframe API
        const tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        const firstScriptTag = document.getElementsByTagName('script')[0];
        if (firstScriptTag.parentNode) {
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
        }

        // Create YouTube player when API is ready
        window.onYouTubeIframeAPIReady = () => {
            playerRef.current = new window.YT.Player(`youtube-player-${videoId}`, {
                height: '0',
                width: '0',
                videoId: videoId,
                playerVars: {
                    autoplay: 0,
                    controls: 0,
                    disablekb: 1,
                    fs: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                    rel: 0
                },
                events: {
                    onReady: (event: any) => {
                        setDuration(event.target.getDuration());
                    },
                    onStateChange: (event: any) => {
                        if (event.data === window.YT.PlayerState.PLAYING) {
                            setIsPlaying(true);
                        } else if (event.data === window.YT.PlayerState.PAUSED) {
                            setIsPlaying(false);
                        } else if (event.data === window.YT.PlayerState.ENDED) {
                            setIsPlaying(false);
                            setCurrentTime(0);
                        }
                    }
                }
            });
        };

        // Cleanup
        return () => {
            if (playerRef.current) {
                playerRef.current.destroy();
            }
            window.onYouTubeIframeAPIReady = undefined;
        };
    }, [videoId]);

    // Update current time
    useEffect(() => {
        let intervalId: NodeJS.Timeout;

        if (isPlaying && playerRef.current) {
            intervalId = setInterval(() => {
                const time = playerRef.current.getCurrentTime();
                setCurrentTime(time);
            }, 1000);

            // Start playing
            playerRef.current.playVideo();
        } else if (playerRef.current) {
            playerRef.current.pauseVideo();
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isPlaying]);

    // Update volume when player is ready
    useEffect(() => {
        if (playerRef.current) {
            playerRef.current.setVolume(volume);
        }
    }, [volume, playerRef.current]);

    return (
        <div className="my-6 rounded-lg overflow-hidden bg-gray-100 shadow-md">
            <div className="p-4">
                <h3 className="font-bold brand-color mb-4">Listen to this</h3>

                {/* Player controls */}
                <div className="flex flex-col gap-2">
                    {/* Progress bar */}
                    <div
                        ref={progressRef}
                        className="w-full h-2 bg-gray-300 rounded-full cursor-pointer relative"
                        onClick={handleProgressClick}
                    >
                        <div
                            className="absolute h-full bg-[#29356B] rounded-full"
                            style={{ width: `${(currentTime / duration) * 100}%` }}
                        ></div>
                    </div>

                    {/* Time display and controls */}
                    <div className="flex items-center justify-between">
                        <div className="text-xs text-gray-600">
                            {formatTime(currentTime)} / {formatTime(duration)}
                        </div>

                        <div className="flex items-center gap-4">
                            {/* Rewind button */}
                            <button
                                onClick={handleRewind}
                                className="text-gray-700 hover:text-[#29356B]"
                                aria-label="Rewind 10 seconds"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M11 17l-5-5 5-5M18 17l-5-5 5-5" />
                                </svg>
                            </button>

                            {/* Play/Pause button */}
                            <button
                                onClick={togglePlayPause}
                                className="bg-[#29356B] text-white w-10 h-10 flex items-center justify-center rounded-full shadow-md hover:bg-[#3a4787] transition-colors"
                                aria-label={isPlaying ? "Pause" : "Play"}
                            >
                                {isPlaying ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="6" y="4" width="4" height="16"></rect>
                                        <rect x="14" y="4" width="4" height="16"></rect>
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                    </svg>
                                )}
                            </button>

                            {/* Forward button */}
                            <button
                                onClick={handleForward}
                                className="text-gray-700 hover:text-[#29356B]"
                                aria-label="Forward 10 seconds"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M6 17l5-5-5-5M13 17l5-5-5-5" />
                                </svg>
                            </button>

                            {/* Volume control */}
                            <div className="relative">
                                <button
                                    onClick={() => setShowVolumeSlider(!showVolumeSlider)}
                                    className="text-gray-700 hover:text-[#29356B]"
                                    aria-label="Volume"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                                        {volume > 0 && (
                                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                                        )}
                                        {volume > 50 && (
                                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                                        )}
                                    </svg>
                                </button>
                                {showVolumeSlider && (
                                    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 h-32 bg-white p-2 rounded-md shadow-lg flex items-center justify-center">
                                        <input
                                            type="range"
                                            min="0"
                                            max="100"
                                            value={volume}
                                            onChange={handleVolumeChange}
                                            className="h-full"
                                            style={{
                                                writingMode: 'bt-lr',
                                                WebkitAppearance: 'slider-vertical',
                                                appearance: 'slider-vertical',
                                                width: '8px',
                                                height: '100px'
                                            }}
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Hidden YouTube player */}
            <div style={{ height: 0, width: 0, overflow: 'hidden' }}>
                <div id={`youtube-player-${videoId}`}></div>
            </div>
        </div>
    );
};

export default AudioPlayer;