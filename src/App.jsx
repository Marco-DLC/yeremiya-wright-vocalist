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
    <div className="App">
      <Header />
      <Slideshow />
      <Biography />
      <Showcase />
      <div className="resumes-contact-section">
        <Resumes />
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
