import Hero from "./components/hero";
import About from "./components/about";
import Services from "./components/services";
import Experience from "./components/experience";
import Credentials from "./components/credentials";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function App() {
  return (
    <main className="bg-navy">
      <Hero />
      <About />
      <Services />
      <Experience />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  );
}