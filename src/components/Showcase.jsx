export default function Showcase() {
  return (
    <div className="Showcase">
      <h2>Performances</h2>
      <PerformanceCard id='card1' />
      <PerformanceCard id='card2' />
      <PerformanceCard id='card3' />
      <PerformanceCard id='card4' />
      <PerformanceCard id='card5' />
      <PerformanceCard id='card6' />
    </div>
  );
}

function PerformanceCard({id}) {
  return (
    <div className='Card' id={id}>
      <div className="video">Performance video Here</div>
      <div className="info">
        <p>Information on the performance here</p>
      </div>
    </div>
  );
}
