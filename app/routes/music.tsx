export default function Music() {
  return (
    <div className="music-container">
      <h1>DJ Sets</h1>
      <div className="audio-player">
        <audio controls src="/music/TDAudio.0.mp3" />
      </div>
    </div>
  );
}
