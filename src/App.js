import Header from "./pages/Header";
import "./assets/styles/main.scss";
import Faculties from "./pages/Faculties";
import About from "./pages/About";
import News from "./pages/News/News";
import Partner from "./pages/Partner";
import Team from "./pages/Team";
import Footer from "./pages/Footer";
import Slider from "./pages/Faculties/Slider";
function App() {
  return (
    <div>
      <Header />
      <Faculties />
      <Slider />
      <About />
      <News />
      <Partner />
      <Team />
      <Footer />
    </div>
  );
}

export default App;
