// import React from 'react';
// function Counts() {
//   const qiymat = [
//     {
//       id:"1",
//       text1: "Students",
//       text2: "Coursesfgdgfd",
//       text3: "Events",
//       text4: "Trainers"
//     }
//   ]
//     return ( 
//         <section id="counts" className="counts section-bg">
//       <div className="container">

//         <div className="row counters">

//           <div className="col-lg-3 col-6 text-center">
//             <span data-purecounter-start="0" data-purecounter-end="1232" data-purecounter-duration="1" className="purecounter"></span>
//             <p>{qiymat[0].text1}</p>
//           </div>

//           <div className="col-lg-3 col-6 text-center">
//             <span data-purecounter-start="0" data-purecounter-end="64" data-purecounter-duration="1" className="purecounter"></span>
//             <p>{qiymat[0].text2}</p>
//           </div>

//           <div className="col-lg-3 col-6 text-center">
//             <span data-purecounter-start="0" data-purecounter-end="42" data-purecounter-duration="1" className="purecounter"></span>
//             <p>{qiymat[0].text3}</p>
//           </div>

//           <div className="col-lg-3 col-6 text-center">
//             <span data-purecounter-start="0" data-purecounter-end="15" data-purecounter-duration="1" className="purecounter"></span>
//             <p>{qiymat[0].text4}</p>
//           </div>

//         </div>

//       </div>
//     </section>
//      );
// }

// export default Counts;
import React, { useState, useEffect } from 'react';

function Counter({ start, end, duration }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime;
    let animationFrameId;

    const startCounter = (timestamp) => {
      if (!startTime) startTime = timestamp;

      const progress = (timestamp - startTime) / duration;
      const currentCount = Math.floor(progress * (end - start) + start);

      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(startCounter);
      }
    };

    animationFrameId = requestAnimationFrame(startCounter);

    return () => cancelAnimationFrame(animationFrameId);
  }, [start, end, duration]);

  return <span>{count}</span>;
}

function Counts() {
  return (
    <section id="counts" className="counts section-bg">
      <div className="container">
        <div className="row counters">
          <div className="col-lg-3 col-6 text-center">
            <Counter start={0} end={1230} duration={1000} />
            <p>Students</p>
          </div>
          <div className="col-lg-3 col-6 text-center">
            <Counter start={0} end={64} duration={1000} />
           <p>Courses</p>         
            </div>
            <div className="col-lg-3 col-6 text-center">
            <Counter start={0} end={42} duration={1000} />
           <p>Events</p>         
            </div>
            <div className="col-lg-3 col-6 text-center">
            <Counter start={0} end={15} duration={1000} />
           <p>Trainers</p>         
            </div>
          {/* Repeat the structure for other counters */}
        </div>
      </div>
    </section>
  );
}

export default Counts;
