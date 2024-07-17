export default function Slideshow() {
  return (
    <div id="Slideshow">
      <div className="slides-container">
        <Slide src='/spring-sing.jpg' />
        <Slide src='/yerry-wright.jpg' />
        <Slide src='/vocal-jazz-ensemble.jpg' />
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
