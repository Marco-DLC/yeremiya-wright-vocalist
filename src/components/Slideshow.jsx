export default function Slideshow() {
  return (
    <div id="Slideshow">
      <div className="slides-container">
        <Slide src='../public/Spring-Sing.webp' />
        <Slide src='../public/Yerry-Wright.webp' />
        <Slide src='../public/Vocal-Jazz-Ensemble.webp' />
      </div>
    </div>
  );
}

function Slide({src}){

  const handleContextMenu = (e) => {
    e.preventDefault();
  }
    return (
    <div className="slide">
        <img src={src} draggable='false' onContextMenu={handleContextMenu} />
    </div>
    )
}
