export default function Showcase() {
  return (
    <div id="Showcase">
      <span id="showcaseScrl"></span>
      <h2>Performances</h2>
      <div className="showcase-grid">
        <PerformanceCard
          id="card1"
          info="'Pulse of the Day' - Alina Engibaryan"
        >
          <iframe
            src="https://drive.google.com/file/d/1ZQFv9LXWPrSz8aS9pIox-pUq8d2Qsv7v/preview"
            allow="autoplay"
          ></iframe>
        </PerformanceCard>

        <PerformanceCard id="card2" info="'Superstition' - Stevie Wonder">
          <iframe
            src="https://drive.google.com/file/d/1Gctqs9rCSIQ_zA8oN1UOLdjMsVKryuvr/preview"
            allow="autoplay"
          ></iframe>
        </PerformanceCard>

        <PerformanceCard id="card3" info="'I Go to the Rock'">
          <iframe
            src="https://drive.google.com/file/d/1DayrliFM6KjIk5WYvtFiIA7rZRXOtF9_/preview"
            allow="autoplay"
          ></iframe>
        </PerformanceCard>

        <PerformanceCard id="card4" info="'Up Above my Head'">
          <iframe
            src="https://drive.google.com/file/d/1NRykRq2LE2eZMJs_jsWo0VXixo9i-DpZ/preview"
            allow="autoplay"
          ></iframe>
        </PerformanceCard>

        <PerformanceCard id="card5" info="'Higher' (Encore)">
          <iframe
            src="https://drive.google.com/file/d/1htdAaN32pBy_vKYPupYuZlzwvjI85pVC/preview"
            allow="autoplay"
          ></iframe>
        </PerformanceCard>

        <PerformanceCard id="card6" info="'Overjoyed'">
          <iframe
            src="https://drive.google.com/file/d/1tuJ0zv5EDA3jJBmKeOFyeojq_1SN1zYZ/preview"
            allow="autoplay"
          ></iframe>
        </PerformanceCard>
      </div>
    </div>
  );
}

function PerformanceCard({ id, children, info }) {
  return (
    <div className="Card" id={id}>
      <div className="video">{children}</div>
      <div className="info">
        <p>{info}</p>
      </div>
    </div>
  );
}
