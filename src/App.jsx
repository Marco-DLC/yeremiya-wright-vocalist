import "./App.css";
import Header from "./components/Header.jsx";
import Slideshow from "./components/Slideshow.jsx";
import Biography from "./components/Biography.jsx";
import Showcase from "./components/Showcase.jsx";
import Resumes from "./components/Resumes.jsx";
import ContactForm from "./components/ContactForm.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div id="App">
      <Header />
      <Slideshow />
      <Biography />
      <Showcase />
      <div id="resumesContactSection">
        <Resumes />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
