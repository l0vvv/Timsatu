import "./App.css";
import HeroSection from "./components/hero";
import Navigation from "./components/Navigation";
import ContactForm from "./Contact/ContactForm/ContactForm";
import ContactHeader from "./Contact/ContactHeader/ContactHeader";

function App() {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <main className="main_container">
        <ContactHeader />
        <ContactForm />
      </main>
    </div>
  );
};


export default App;