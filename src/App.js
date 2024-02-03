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
import Events from './companents/events';
import Testimonials from './companents/Testimonials';
import Home from './companents/home';
import Menu from './companents/menu';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

function App() {
  return (

    <Router>
   <Navbar />
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/courses" component={Courses} />
        <Route path="/trainers" component={Trainers} />
        <Route path="/events" component={Events} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/contact" component={Contact} />
        <Route path="/menu" component={Menu} />
       </Switch>
      <Footer />
    </Router>
    
  );
}

export default App;
