// import AboutItem from "./AboutItem";
// function About() {
//   const qiymat = [
//     {
//       id: "1",
//       h3: "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda."
//     },
//     {
//       id: "2",
//       p: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
//     },
//     {
//       id: "3",
//       li: "Ullamco laboris nisi ut aliquip ex ea commodo consequat."
//     },
//     {
//       id: "4",
//       p: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate"
//     }

//   ]
//     return (
//         <section id="about" className="about">
//       <div className="container" data-aos="fade-up">

//         <div className="row">
//           <div className="col-lg-6 order-1 order-lg-2" data-aos="fade-left" data-aos-delay="100">
//             <img src="assets/img/about.jpg" className="img-fluid" alt="" />
//           </div>
//           <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
//             <h3><AboutItem item1={qiymat.map(e => e.h3)} /></h3>
//             <p className="fst-italic">
//             <AboutItem item2={qiymat.map(e => e.p)} />
//             </p>
//             <ul>
//               <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
//               <li><i className="bi bi-check-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
//               <li><i className="bi bi-check-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
//             </ul>
//             <p>
//             </p>

//           </div>
//         </div>

//       </div>
//     </section>
//      );
// }

// export default About;
// AboutItem.js

// About.js
import React from "react";

function About() {
    const qiymat = [
        {
            id: "5",
            img: "assets/img/about.jpg",
            text:"Voluptatem dignissimos provident quasi corporis voluptates sit assumendas.",
            izoh:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            li1:"Ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
    ];

    return (
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="row">
                    {qiymat.map((e) => {
                        return (
                          <>
                            <div
                                className="col-lg-6 order-1 order-lg-2"
                                data-aos="fade-left"
                                data-aos-delay="100"
                            >
                                <img src={e.img} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                         <h3>{e.text}</h3>
                        <p className="fst-italic">{e.izoh}</p>
                        <ul>
                            <li>
                                <i className="bi bi-check-circle"></i>{" "}
                                {e.li1}
                            </li>
                            <li>
                                <i className="bi bi-check-circle"></i> Duis aute
                                irure dolor in reprehenderit in voluptate velit.
                            </li>
                            <li>
                                <i className="bi bi-check-circle"></i>{" "}
                                {e.izoh}
                            </li>
                        </ul>
                        <p>{e.izoh}</p>
                    </div>
                            </>
                        );
                    })}
                    {/* <div
                        className="col-lg-6 order-1 order-lg-2"
                        data-aos="fade-left"
                        data-aos-delay="100"
                    >
                        <img src={qiymat[4].img} className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        {qiymat[0].h3}
                        <p className="fst-italic">{qiymat[1].p}</p>
                        <ul>
                            <li>
                                <i className="bi bi-check-circle"></i>{" "}
                                {qiymat[2].li}
                            </li>
                            <li>
                                <i className="bi bi-check-circle"></i> Duis aute
                                irure dolor in reprehenderit in voluptate velit.
                            </li>
                            <li>
                                <i className="bi bi-check-circle"></i>{" "}
                                {qiymat[3].p}
                            </li>
                        </ul>
                        <p>{qiymat[3].p}</p>
                    </div> */}
                </div>
            </div>
        </section>
    );
}

export default About;
