function Trainers() {
  const qiymat =[
    {
      id:"1",
      name:<h4>Abdumo'min / عبد المؤمن</h4>,
      hobby:<span>React Student</span>,
      izoh:<p>Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut</p>,
      img: "assets/img/photo_2024-01-01_18-58-26.jpg"
    },
    {
      id:"2",
      name:<h4>Halimov Ilyos</h4>,
      hobby:<span>React Student</span>,
      izoh:<p>Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut</p>,
      img: "assets/img/Halimov Ilyos.jpg"
    },
    {
      id:"3",
      name:<h4>Shuhratjon Mamadjonov</h4>,
      hobby:<span>Fullstack developer</span>,
      izoh:<p>Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut</p>,
      img: "assets/img/domlam2 (1).jpg"
    }
  ]
    return ( <>
      <div className="breadcrumbs" data-aos="fade-in">
      <div className="container">
        <h2>Masters</h2>
        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
      </div>
    </div>
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
                  <a href="https://web.telegram.org/k/#@Abdumumin_007"><i className="bi bi-telegram"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href="https://www.instagram.com/abdumumin_blog/"><i className="bi bi-instagram"></i></a>
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
                  <a href="https://web.telegram.org/k/"><i className="bi bi-telegram"></i></a>
                  <a href=""><i className="bi bi-facebook"></i></a>
                  <a href="https://www.instagram.com/halimovilyosyoungfullstack.dev/"><i className="bi bi-instagram"></i></a>
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
                  <a href="https://web.telegram.org/k/#@shMamadjanov"><i className="bi bi-telegram"></i></a>
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
    </>
     );
}

export default Trainers;