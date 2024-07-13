export default function Showcase() {
  return (
    <div className="Showcase">
      <h2>Performances</h2>
      <PerformanceCard />
      <PerformanceCard />
      <PerformanceCard />
      <PerformanceCard />
      <PerformanceCard />
      <PerformanceCard />
    </div>
  );
}

function PerformanceCard() {
  return (
    <div className="Card">
      <div className="video">Performance video Here</div>
      <div className="info">
        <p>Information on the performance here</p>
      </div>
    </div>
  );
}
