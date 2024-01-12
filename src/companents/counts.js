
function Counts() {
  const qiymat = [
    {
      id:"1",
      text1: "Students",
      text2: "Coursesfgdgfd",
      text3: "Events",
      text4: "Trainers"
    }
  ]
    return ( 
        <section id="counts" className="counts section-bg">
      <div className="container">

        <div className="row counters">

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="1232" data-purecounter-duration="1" className="purecounter">1232</span>
            <p>{qiymat[0].text1}</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="64" data-purecounter-duration="1" className="purecounter">64</span>
            <p>{qiymat[0].text2}</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" className="purecounter">42</span>
            <p>{qiymat[0].text3}</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter">15</span>
            <p>{qiymat[0].text4}</p>
          </div>

        </div>

      </div>
    </section>
     );
}

export default Counts;