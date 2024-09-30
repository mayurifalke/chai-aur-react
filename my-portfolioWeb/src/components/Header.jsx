import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub, FaInstagram } from "react-icons/fa6";

const Header = () => {
  return (
    <header>
        <div className="px-3 py-2 text-bg-dark border-bottom">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/"
                className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-white text-decoration-none"
              >
              </a>
              <ul className="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
                <li>
                  <a href="https://www.linkedin.com/in/mayuri-falke-7890a1291/" className="nav-link text-white">
                    <IoLogoLinkedin className="logo"/>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                  <FaGithub className="logo"/>
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link text-white">
                    <FaInstagram className="logo"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

   
  );
};

export default Header;
