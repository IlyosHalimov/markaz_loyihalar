function Counts() {
  const qiymat = [
    {
      id:"1",
      text: "Students",
      text: "Courses",
      text: "Events",
      text: "Trainers"
    }
  ]
    return ( 
        <section id="counts" className="counts section-bg">
      <div className="container">

        <div className="row counters">

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="1232" data-purecounter-duration="1" className="purecounter">1232</span>
            <p>Students</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="64" data-purecounter-duration="1" className="purecounter">64</span>
            <p>Courses</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" className="purecounter">42</span>
            <p>Events</p>
          </div>

          <div className="col-lg-3 col-6 text-center">
            <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter">15</span>
            <p>Trainers</p>
          </div>

        </div>

      </div>
    </section>
     );
}

export default Counts;