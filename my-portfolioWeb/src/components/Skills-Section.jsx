import React from "react";


const Skills = ({ skillData }) => {
  return (

    <div className="container" style={{ marginLeft: 45}}>
      <div className=" card-skill">
        <h3>Skills</h3>
        <div style={{display: "flex" }} className="skill-container">
        {skillData.map((item) => (
          <>
            <img
              src={`images/${item}.png`}
              className="card-image "
              style={{margin: '30px 5px 0 10px'}}
              alt="..."
            />
         
            {/* <h5 style={{ color: "white", marginTop: 20 }}>{item}</h5> */}
            {/* <div className="card-body"> */}
              
            {/* </div> */}
          </>
        ))}
      </div>
    </div>
    </div>
   

  );
};

export default Skills;
