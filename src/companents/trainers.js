function Trainers() {
  const qiymat =[
    {
      id:"1",
      name:<h4>Walter White</h4>,
      hobby:<span>Web Development</span>,
      izoh:<p>Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut</p>,
      img: "assets/img/trainers/trainer-1.jpg"
    },
    {
      id:"2",
      name:<h4>Sarah Jhinson</h4>,
      hobby:<span>Marketing</span>,
      izoh:<p>Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut</p>,
      img: "assets/img/trainers/trainer-2.jpg"
    },
    {
      id:"3",
      name:<h4>Walter White</h4>,
      hobby:<span>Web Development</span>,
      izoh:<p>Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut</p>,
      img: "assets/img/trainers/trainer-3.jpg"
    }
  ]
    return ( 
        <section id="trainers" className="trainers">
      <div className="container" data-aos="fade-up">

        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src={qiymat[0].img} className="img-fluid" alt="" />
              <div className="member-content">
                {qiymat[0].name}
                {qiymat[0].hobby}
                {qiymat[0].izoh}
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src={qiymat[1].img} className="img-fluid" alt="" />
              <div className="member-content">
              {qiymat[1].name}
                {qiymat[1].hobby}
                {qiymat[1].izoh}
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="member">
              <img src={qiymat[2].img} className="img-fluid" alt="" />
              <div className="member-content">
              {qiymat[2].name}
                {qiymat[2].hobby}
                {qiymat[2].izoh}
                <div className="social">
                  <a href=""><i className="bi bi-twitter"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href=""><i className="bi bi-instagram"></i></a>
                  <a href=""><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
     );
}

export default Trainers;