const Expirence = () => {
  const earr1 = ["HTML", "CSS", "JS", "PHP", "MySQL"];
  return (
    <>
      <center>
        <h1 className="e-heading">Experience</h1>
      </center>

      <div className="container text-center" style={{ marginTop: 50 }}>
        <div className="row">
          <div className="col">
            <p>July 4 – August 7 | 2022</p>
          </div>
          <div className="col">
            <h4 style={{ textAlign: "left" }}>
              Software Engineering Intern - Hi-soft IT Solution Pvt. Ltd.
            </h4>
            <p style={{ textAlign: "left",marginTop:20}}>
              • Gained invaluable insights into industrial culture and Full
              Stack Web Development concepts.
              <br />
              • Actively participated in real-life projects, marking the
              beginning of my coding journey.
              <br />
              • Honed skills in HTML, CSS, JavaScript, PHP, and MySQL through
              hands-on experience.
              <br />• Collaborated with a team of professionals to deliver
              high-quality software solutions.
            </p>
            <div className="emain">
            {earr1.map((item) => (
              <div className="econtainer">
                <p className="epara">{item}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>


      {/* Again using same content */}
      <div className="container text-center" style={{ marginTop: 50 }}>
        <div className="row">
          <div className="col">
            <p>July 4 – August 7 | 2022</p>
          </div>
          <div className="col">
            <h4 style={{ textAlign: "left" }}>
              Software Engineering Intern - Hi-soft IT Solution Pvt. Ltd.
            </h4>
            <p style={{ textAlign: "left",marginTop:20}}>
              • Gained invaluable insights into industrial culture and Full
              Stack Web Development concepts.
              <br />
              • Actively participated in real-life projects, marking the
              beginning of my coding journey.
              <br />
              • Honed skills in HTML, CSS, JavaScript, PHP, and MySQL through
              hands-on experience.
              <br />• Collaborated with a team of professionals to deliver
              high-quality software solutions.
            </p>
            <div className="emain">
            {earr1.map((item) => (
              <div className="econtainer">
                <p className="epara">{item}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expirence;
