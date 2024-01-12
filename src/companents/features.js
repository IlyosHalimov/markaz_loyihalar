function Features() {
  const qiymat = [
    {
      id:"1",
      nomi:<h3><a href="">Lorem Ipsumgdgf</a></h3>
    },
    {
      id:"2",
      nomi:<h3><a href="">Dolor Sitema</a></h3>
    },
    {
      id:"3",
      nomi:<h3><a href="">Sed perspiciatis</a></h3>
    },
    {
      id:"4",
      nomi:<h3><a href="">Magni Dolores</a></h3>
    },
    {
      id:"5",
      nomi:<h3><a href="">Nemo Enim</a></h3>
    },
    {
      id:"6",
      nomi:<h3><a href="">Eiusmod Tempor</a></h3>
    },
    {
      id:"7",
      nomi:<h3><a href="">Midela Teren</a></h3>
    },
    {
      id:"8",
      nomi:<h3><a href="">Pira Neve</a></h3>
    },
    {
      id:"9",
      nomi:<h3><a href="">Dirada Pack</a></h3>
    },
    {
      id:"10",
      nomi:<h3><a href="">Moton Ideal</a></h3>
    },
    {
      id:"11",
      nomi:<h3><a href="">Verdo Park</a></h3>
    },
    {
      id:"12",
      nomi:<h3><a href="">Flavor Nivelanda</a></h3>
    }
  ]
    return ( 
        <section id="features" className="features">
      <div className="container" data-aos="fade-up">

        <div className="row" data-aos="zoom-in" data-aos-delay="100">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box">
              <i className="ri-store-line"></i>
              {/* style="color: #ffbb2c" */}
              {qiymat[0].nomi}
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-bar-chart-box-line"></i>
              {/* style="color: #5578ff;" */}
              {qiymat[1].nomi}
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box">
              <i className="ri-calendar-todo-line"></i>
              {/* style="{{color: #e80368;}}" */}
              {qiymat[2].nomi}
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box">
              <i className="ri-paint-brush-line" ></i>
              {/* style="{{color: #e361ff;}}" */}
              {qiymat[3].nomi}
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-database-2-line" ></i>
              {/* style="{{color: #47aeff;}}" */}
              {qiymat[4].nomi}
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-gradienter-line" ></i>
              {/* style="{{color: #ffa76e;}}" */}
              {qiymat[5].nomi}
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-file-list-3-line" ></i>
              {/* style="{{color: #11dbcf;}}" */}
              {qiymat[6].nomi}
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-price-tag-2-line" ></i>
              {/* style="{{color: #4233ff;}}" */}
              {qiymat[7].nomi}
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-anchor-line" ></i>
              {/* style="{{color: #b2904f;}}" */}
              {qiymat[8].nomi}
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-disc-line" ></i>
              {/* style="{{color: #b20969;}}" */}
              {qiymat[9].nomi}
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-base-station-line" ></i>
              {/* style="{{color: #ff5828;}}" */}
              {qiymat[10].nomi}
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4">
            <div className="icon-box">
              <i className="ri-fingerprint-line" ></i>
              {/* style="{{color: #29cc61;}}" */}
              {qiymat[11].nomi}
            </div>
          </div>
        </div>

      </div>
    </section>
     );
}

export default Features;