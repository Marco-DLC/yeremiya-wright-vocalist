export default function Resumes() {
  return (
    <div id="Resumes">
      <span id="resumeScrl"></span>
      <h2>Resumes</h2>
      <Resume resType={"Performance"} />
      <Resume resType={"Corporate"} />
      <Resume resType={"Teaching"} />
    </div>
  );
}

function Resume({ resType }) {
  return <button className="resume">{resType} Resume</button>;
}
