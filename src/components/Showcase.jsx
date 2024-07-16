export default function Showcase() {
  return (
    <div id="Showcase">
      <span id="showcaseScrl"></span>
      <h2>Performances</h2>
      <PerformanceCard id='card1' info='&apos;Pulse of the Day&apos; - Alina Engibaryan'>
      <iframe src="https://drive.google.com/file/d/1ZQFv9LXWPrSz8aS9pIox-pUq8d2Qsv7v/preview" allow="autoplay"></iframe>
        </PerformanceCard>

      <PerformanceCard id='card2' info='&apos;Superstition&apos; - Stevie Wonder'>
      <iframe src="https://drive.google.com/file/d/1Gctqs9rCSIQ_zA8oN1UOLdjMsVKryuvr/preview" allow="autoplay"></iframe>
        </PerformanceCard>

      <PerformanceCard id='card3' info='&apos;I Go to the Rock&apos;'>
      <iframe src="https://drive.google.com/file/d/1DayrliFM6KjIk5WYvtFiIA7rZRXOtF9_/preview" allow="autoplay"></iframe>
        </PerformanceCard>

      <PerformanceCard id='card4' info='&apos;Up Above my Head&apos;'>
      <iframe src="https://drive.google.com/file/d/1NRykRq2LE2eZMJs_jsWo0VXixo9i-DpZ/preview"  allow="autoplay"></iframe>
        </PerformanceCard>

      <PerformanceCard id='card5' info='&apos;Higher&apos; (Encore)'>
      <iframe src="https://drive.google.com/file/d/1htdAaN32pBy_vKYPupYuZlzwvjI85pVC/preview" allow="autoplay"></iframe>
        </PerformanceCard>

      <PerformanceCard id='card6' info='&apos;Overjoyed&apos;'>
      <iframe src="https://drive.google.com/file/d/1tuJ0zv5EDA3jJBmKeOFyeojq_1SN1zYZ/preview"  allow="autoplay"></iframe>
        </PerformanceCard>
    </div>
  );
}

function PerformanceCard({id, children, info}) {
  return (
    <div className='Card' id={id}>
      <div className="video">{children}</div>
      <div className="info">
        <p>{info}</p>
      </div>
    </div>
  );
}
