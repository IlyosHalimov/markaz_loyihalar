import './App.css';
import './index.css';
import About from './companents/about';
import Contact from './companents/contact';
import Counts from './companents/counts';
import Courses from './companents/courses';
import Features from './companents/features';
import Footer from './companents/footer';
import Hero from './companents/hero';
import Navbar from './companents/navbar';
import Trainers from './companents/trainers';
import Whyus from './companents/whyus';
import Pricing from "./companents/pricing";
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
   <Navbar />
    <Hero />
    <About />
    <Counts />
    <Whyus />
    <Features />
    <Courses />
    <Trainers />
    <Footer />
    <Switch>
        <Route path="/" exact component={Navbar} />
        <Route path="/about.js" component={Hero} />
        <Route path="/courses" component={About} />
        {/* Define other routes here */}
      </Switch>
    </Router>
    {/* <Pricing />
    <Contact /> */}
    {/* <Hero />
    <About />
    <Counts />
    <Whyus />
    <Features />
    <Courses />
    <Trainers />
    <Footer /> */}
    </>
  );
}

export default App;
