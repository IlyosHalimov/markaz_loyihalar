function Courses() {
  const qiymat = [
    {
      id:1,
      title:<h2>Courses</h2>,
      title2:<p>Popular Courses</p>
    },
    {
      id:2,
      nomi:<h4>Web Development</h4>,
      price:<p className="price">$169</p>,
      img: "assets/img/course-1.jpg",
      title: <h3><a href="/course-details.html">Website Design</a></h3>,
      izoh: <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>,
      img2:"assets/img/trainers/trainer-1.jpg",
      name:<span>Antonio</span>,
      like: "2",
      person: "3"
    },
    {
      id:2,
      nomi:<h4>Marketing</h4>,
      price:<p className="price">$250</p>,
      img: "assets/img/course-2.jpg",
      title: <h3><a href="/course-details.html">Search Engine Optimization</a></h3>,
      izoh: <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>,
      img2:"assets/img/trainers/trainer-2.jpg",
      name:<span>Lana</span>,
      like: "2",
      person: "3"
    },
    {
      id:3,
      nomi:<h4>Content</h4>,
      price:<p className="price">$180</p>,
      img: "assets/img/course-3.jpg",
      title: <h3><a href="/course-details.html">Copywriting</a></h3>,
      izoh: <p>Et architecto provident deleniti facere repellat nobis iste. Id facere quia quae dolores dolorem tempore.</p>,
      img2:"assets/img/trainers/trainer-3.jpg",
      name:<span>Brandon</span>,
      like: "2",
      person: "3"
    }
  ]
    return ( 
      <>
      <div className="breadcrumbs" data-aos="fade-in">
      <div className="container">
        <h2>Courses</h2>
        <p>Est dolorum ut non facere possimus quibusdam eligendi voluptatem. Quia id aut similique quia voluptas sit quaerat debitis. Rerum omnis ipsam aperiam consequatur laboriosam nemo harum praesentium. </p>
      </div>
    </div>
        <section id="popular-courses" className="courses">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          {qiymat[0].title}
          {qiymat[0].title2}
        </div>

        <div className="row" data-aos="zoom-in" data-aos-delay="100">

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div className="course-item">
              <img src={qiymat[1].img} className="img-fluid" alt="..." />
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  {qiymat[1].nomi}
                  {qiymat[1].price}
                </div>
                {qiymat[1].title}
                {qiymat[1].izoh}
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={qiymat[1].img2} className="img-fluid" alt="" />
                    {qiymat[1].name}
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;{qiymat[1].person}
                    &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;{qiymat[1].like}
                  </div>
                </div>
              </div>
            </div>
          </div> 

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div className="course-item">
              <img src="assets/img/course-2.jpg" className="img-fluid" alt="..." />
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                 {qiymat[2].nomi}
                 {qiymat[2].price}
                </div>

                {qiymat[2].title}
                {qiymat[2].izoh}
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={qiymat[2].img2} className="img-fluid" alt="" />
                    {qiymat[2].name}
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;{qiymat[2].person}
                    &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;{qiymat[2].like}
                  </div>
                </div>
              </div>
            </div>
          </div> 

          <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div className="course-item">
              <img src={qiymat[3].img} className="img-fluid" alt="..." />
              <div className="course-content">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  {qiymat[3].nomi}
                  {qiymat[3].price}
                </div>

                {qiymat[3].title}
                {qiymat[3].izoh}
                <div className="trainer d-flex justify-content-between align-items-center">
                  <div className="trainer-profile d-flex align-items-center">
                    <img src={qiymat[3].img2} className="img-fluid" alt="" />
                    {qiymat[3].name}
                  </div>
                  <div className="trainer-rank d-flex align-items-center">
                    <i className="bx bx-user"></i>&nbsp;{qiymat[3].person}
                    &nbsp;&nbsp;
                    <i className="bx bx-heart"></i>&nbsp;{qiymat[3].like}
                  </div>
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

export default Courses;