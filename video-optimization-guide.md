# Video-Optimierung für Web

## Komprimierung mit FFmpeg
```bash
# Video auf web-optimierte Größe komprimieren
ffmpeg -i input.mp4 -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 128k output.mp4

# Für noch kleinere Dateien
ffmpeg -i input.mp4 -c:v libx264 -crf 32 -preset slow -vf scale=1280:720 -c:a aac -b:a 96k output.mp4
```

## Implementierung in Next.js

### Option 1: YouTube Embed
```jsx
const VideoPlayer = ({ videoId, title }) => (
  <div className="relative aspect-video">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title={title}
      className="w-full h-full"
      allowFullScreen
    />
  </div>
)
```

### Option 2: HTML5 Video mit mehreren Formaten
```jsx
const VideoPlayer = ({ sources, poster }) => (
  <video 
    controls 
    poster={poster}
    className="w-full h-auto"
    preload="metadata"
  >
    <source src={sources.mp4} type="video/mp4" />
    <source src={sources.webm} type="video/webm" />
    Ihr Browser unterstützt das Video-Tag nicht.
  </video>
)
```

### Option 3: Lazy Loading Video
```jsx
const LazyVideo = ({ src, poster }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  
  return (
    <div className="relative">
      {!isLoaded && (
        <div 
          className="cursor-pointer relative"
          onClick={() => setIsLoaded(true)}
        >
          <img src={poster} alt="Video Thumbnail" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 rounded-full p-4">
              <PlayIcon className="w-12 h-12 text-white" />
            </div>
          </div>
        </div>
      )}
      {isLoaded && (
        <video controls autoPlay className="w-full">
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  )
}
```

## Empfohlene Dateiformate
- **MP4 (H.264)**: Beste Kompatibilität
- **WebM**: Kleinere Dateien, moderne Browser
- **Thumbnails**: JPEG/WebP für Vorschaubilder

## Optimale Einstellungen
- **Auflösung**: 1280x720 oder 1920x1080
- **Bitrate**: 2-5 Mbps für 1080p
- **Framerate**: 30fps (außer bei speziellen Anforderungen)
