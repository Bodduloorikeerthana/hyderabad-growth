// Declaration file for YouTube IFrame Player API
// This ensures TypeScript recognizes the global YouTube API

interface YT {
    Player: new (
      elementId: string,
      options: {
        height?: string | number;
        width?: string | number;
        videoId?: string;
        playerVars?: {
          autoplay?: number;
          cc_load_policy?: number;
          color?: string;
          controls?: number;
          disablekb?: number;
          enablejsapi?: number;
          end?: number;
          fs?: number;
          iv_load_policy?: number;
          list?: string;
          listType?: string;
          loop?: number;
          modestbranding?: number;
          origin?: string;
          playlist?: string;
          playsinline?: number;
          rel?: number;
          start?: number;
          mute?: number;
        };
        events?: {
          onReady?: (event: { target: YT.Player }) => void;
          onStateChange?: (event: { data: number }) => void;
          onPlaybackQualityChange?: (event: { data: string }) => void;
          onPlaybackRateChange?: (event: { data: number }) => void;
          onError?: (event: { data: number }) => void;
          onApiChange?: (event: any) => void;
        };
      }
    ) => {
      playVideo: () => void;
      pauseVideo: () => void;
      stopVideo: () => void;
      seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
      clearVideo: () => void;
      nextVideo: () => void;
      previousVideo: () => void;
      playVideoAt: (index: number) => void;
      mute: () => void;
      unMute: () => void;
      isMuted: () => boolean;
      setVolume: (volume: number) => void;
      getVolume: () => number;
      setSize: (width: number, height: number) => void;
      getPlayerState: () => number;
      getCurrentTime: () => number;
      getDuration: () => number;
      destroy: () => void;
    };
    PlayerState: {
      UNSTARTED: number;
      ENDED: number;
      PLAYING: number;
      PAUSED: number;
      BUFFERING: number;
      CUED: number;
    };
  }
  
  interface Window {
    YT: YT;
    onYouTubeIframeAPIReady: () => void;
  }