import PageLayout from "./layout/PageLayout";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Gallery from "./components/Gallery";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <PageLayout>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Gallery />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </PageLayout>
  );
}
