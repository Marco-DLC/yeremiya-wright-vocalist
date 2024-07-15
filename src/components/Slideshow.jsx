export default function Slideshow() {
  return (
    <div className="Slideshow">
      <div className="slides-container">
        <Slide src='../public/Spring-Sing.webp' />
        <Slide src='../public/Yerry-Wright.webp' />
        <Slide src='../public/Vocal-Jazz-Ensemble.webp' />
      </div>
    </div>
  );
}

function Slide({src}){
    return (
    <div className="slide">
        <img src={src} />
    </div>
    )
}
