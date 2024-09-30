import style from "./Projects-Section.module.css";

const Projects = ({ projectData }) => {
  return (
    <>
      <h1 className="e-heading">Recent Projects</h1>

      <div className={` bd-example-snippet bd-code-snippet `}>
        <div className={`bd-example border-0 ${style.pcontainer} `}>
          <div className={`row row-cols-1 row-cols-md-2 g-4 `}>
            {projectData.map((item) => (
              <div className={`col ${style.procard} `}>
                <div className="card">
                  <a href={item.link} target="_blank">
                    <img
                      src={item.src}
                      alt="#"
                      className="bd-placeholder-img card-img-top"
                      width="100%"
                      height={140}
                      xmlns="http://www.w3.org/2000/svg"
                      role="img"
                      aria-label="Placeholder: Image cap"
                      preserveAspectRatio="xMidYMid slice"
                      focusable="false"
                    />
                  </a>
                  <div className="card-body">
                    <h5 className="card-title text-white">{item.title}</h5>
                    <p className="card-text">{item.Description}</p>
                    <div style={{display:"flex"}}>
                    {item.tech.map((element)=><div>
                      <div className={style.econtainer}>
                        <p className={style.epara}>{element}</p>
                      </div>
                    </div>)}
                    </div>
                    
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
