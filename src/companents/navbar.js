import { BrowserRouter as Link} from 'react-router-dom';
import NavbarItem from './NavbarItem';

function Navbar() {
  const qiymat  = [
    {
      id:"1",
      manzil:"/",
      nomi:"Bosh sahifa"
    },
    {
      id:"2",
      manzil: "/about",
      nomi: "Haqida"
    },
    {
      id:"3",
      manzil: "/courses",
      nomi: "Kurslar"
    },
    {
      id:"4",
      manzil: "/trainers",
      nomi: "Trenerlar"
    },
    {
      id:"5",
      manzil: "/events",
      nomi: "O'zgarishlar"
    },
    {
      id: "6",
      manzil: "/pricing",
      nomi: "Narxlash",
    },
    {
      id:"7",
      manzil:"#",
      nomi:"Ro'yxat",
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
      id: "7",
      manzil: "/contact",
      nomi: "Aloqa"
    },
    {
      id:"8",
      manzil: "/menu",
      nomi: "Signin",
    },
];
  return ( 

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

        {/* <Link to="/menu" className="get-started-btn">{qiymat[8].text}</Link> */}
      </div>
    </header>
    
  );
}

export default Navbar;
