import HeroItem from "./HeroItem";

function Hero() {
  const qiymat = [
    {
      id: "1",
      text: <h1>Learning Today,<br />Leading Tomorrow</h1>
    },
    {
      id: '2',
      text1: "We are a team of talented designers making websites with Bootstrap"
    },
    {
      id: "3",
      btn: <a href="/courses.html" className="btn-get-started">
      Get Started
    </a>
    }
  ];

  return (
    <section id="hero" className="d-flex justify-content-center align-items-center">
      <div className="container position-relative" data-aos="zoom-in" data-aos-delay="100">
        <HeroItem text={qiymat.map(e => e.text)} />
        <HeroItem text1={qiymat.map(e => e.text1)} />
        <HeroItem btn={qiymat.map(e => e.btn)} />
      </div>
    </section>
  );
}

export default Hero;
