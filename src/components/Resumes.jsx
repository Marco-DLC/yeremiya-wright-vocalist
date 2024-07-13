export default function Resumes() {
  return (
    <div className="Resumes">
      <h3>Resumes</h3>
      <Resume resType={"Performance"} />
      <Resume resType={"Corporate"} />
      <Resume resType={"Teaching"} />
    </div>
  );
}

function Resume({ resType }) {
  return <button className="resume">{resType} Resume</button>;
}
