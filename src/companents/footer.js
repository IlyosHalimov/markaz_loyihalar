function Footer() {
  const qiymat =[
    {
      id:0,
      name: <h1>Mentor</h1>,
      location:<p>
      A108 Adam Street <br />
      New York, NY 535022<br />
      United States <br /><br />
      <strong>Phone:</strong> +1 5589 55488 55<br />
      <strong>Email:</strong> info@example.com<br />
    </p>
    },
    {
      id:1,
      title:<h4>Useful Links</h4>,
      li:
      <>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Home</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">About us</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Services</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Terms of service</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Privacy policy</a></li>
      </>

    },
    {
      id:2,
      title:<h4>Our Services</h4>,
      li:
      <>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Web Design</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Web Development</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Product Management</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Marketing</a></li>
              <li><i className="bx bx-chevron-right"></i> <a href="/">Graphic Design</a></li>
      </>
    },
    {
      id:3,
      title:<h4>Join Our Newsletter</h4>,
      izoh: <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>,
      news:<><input type="email" name="email" /><input type="submit" value="Subscribe" /></>,
      name: "",
    }

  ]
    return ( 
  <footer id="footer">

    <div className="footer-top">
      <div className="container">
        <div className="row">

          <div className="col-lg-3 col-md-6 footer-contact">
            {qiymat[0].name}
            {qiymat[0].location}
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            {qiymat[1].title}
            <ul>
              {qiymat[1].li}
            </ul>
          </div>

          <div className="col-lg-3 col-md-6 footer-links">
          {qiymat[2].title}
            <ul>
              {qiymat[2].li}
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-newsletter">
          {qiymat[3].title}
           {qiymat[3].izoh}
            <form action="" method="post">
              {qiymat[3].news}
            </form>
          </div>

        </div>
      </div>
    </div>

    <div className="container d-md-flex py-4">

      <div className="me-md-auto text-center text-md-start">
        <div className="copyright">
          &copy; Copyright <strong><span>{qiymat[3].name}</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="/" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="/" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="/" className="instagram"><i className="bx bxl-instagram"></i></a>
        <a href="/" className="google-plus"><i className="bx bxl-skype"></i></a>
        <a href="/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      </div>
    </div>
  </footer>
     );
}

export default Footer;