import "./App.css";
import Header from "./components/Header/Header";
import SectionOne from "./components/SectionOne/SectionOne";
import SectionTwo from "./components/SectionTwo/SectionTwo";
import SectionThree from "./components/SectionThree/SectionThree";
import Footer from "./components/Footer/Footer";
function App() {
  return (
    <main className="main">
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </main>
  );
}

export default App;
