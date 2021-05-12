import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import AboutMe from './Components/Home/AboutMe/AboutMe';
import Projects from './Components/Home/Projects/Projects/Projects';
import Contact from './Components/Home/Contact/Contact';
import Navbar from './Components/Home/Navbar/Navbar';

function App() {
  return (

    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/about-me">
          <AboutMe></AboutMe>
        </Route>
        <Route path="/projects">
          <Projects></Projects>
        </Route>
        <Route path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
