import "./assets/styles/main.scss";
import Faculties from "./pages/Faculties";
import About from "./pages/About";
import News from "./pages/News/News";
import Partner from "./pages/Partner";
import Team from "./pages/Team";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/faculties" exact>
            <Faculties />
          </Route>

          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/news" exact>
            <News />
          </Route>
          <Route path="/partner" exact>
            <Partner />
          </Route>
          <Route path="/team" exact>
            <Team />
          </Route>
          <Route path="/contact" exact>
            <Contact />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
