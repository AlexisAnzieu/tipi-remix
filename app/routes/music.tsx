export default function Music() {
  const audioUrl =
    "https://mega.nz/embed/oZ1HgBxI#JOP58mG6WGuIV92UoREtaySENNqBDmuRBRq3pWXiOI8!1v";

  return (
    <div className="music-container">
      <h1>DJ Sets</h1>
      <div className="mega-embed">
        <iframe
          src={audioUrl}
          frameBorder="0"
          width="711"
          height="144"
          allowFullScreen
        />
      </div>
    </div>
  );
}
