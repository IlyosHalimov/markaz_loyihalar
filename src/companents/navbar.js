import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import NavbarItem from './NavbarItem';
function Navbar() {
  const qiymat  = [
    {
      id:"1",
      manzil:"/",
      nomi:"Home"
    },
    {
      id:"2",
      manzil: "/about",
      nomi: "About"
    },
    {
      id:"3",
      manzil: "/courses",
      nomi: "Courses"
    },
    {
      id:"4",
      manzil: "/frontend/src/companents/trainers",
      nomi: "Trainers"
    },
    {
      id:"5",
      manzil: "e/vents",
      nomi: "Events"
    },
    {
      id: "6",
      manzil: "/pricing",
      nomi: "Pricing",
    },
    {
      id:"7",
      manzil:"#",
      nomi:"Dropdown",
      submenu:[
        {
          manzil:"/react",
          nomi:"React developer"
        },
        {
          manzil:"/nodejs",
          nomi:"Nodejs developer"
        },
        {
          manzil:"/vue",
          nomi:"Vuejs developer"
        },
        {
          manzil:"/fullstack",
          nomi:"FullStack developer"
        }
      ]
    },
    {
      id:"8",
      manzil: "/contact",
      nomi: "Contact"
    },
    {
      id:"9",
      text:"Getaga kirish"
    }
];
  return ( 
    <Router>
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center">
        <h1 className="logo me-auto"><Link to="/">Mentor</Link></h1>

        <nav id="navbar" className="navbar order-last order-lg-0">
          <ul>
          {console.log(qiymat)}
          {
          qiymat.map(
            (e)=>(<NavbarItem key={e.id} items={e} />)
            )
            }
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>

        <Link to="/courses" className="get-started-btn">{qiymat[8].text}</Link>
      </div>
    </header>
     </Router>
  );
}

export default Navbar;
