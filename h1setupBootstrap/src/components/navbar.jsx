import React from 'react'
import PropTypes from 'prop-types'

export default function Navabar(props) {

  

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
    <div className="container-fluid">
      <a className={`navbar-brand text-${props.mode === 'light'? 'dark' : 'light'}`}  href="#">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item ">
            <a className={`nav-link active text-${props.mode === 'light'?'dark':'light'}`} aria-current="page" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className={`nav-link text-${props.mode === 'light'?'dark':'light'}`} href="#">
             {props.aboutText}
            </a>
          </li>
         
          <li className="nav-item">
            <a className={`nav-link disabled text-${props.mode === 'light'?'dark':'light'}`} aria-disabled="true">
              Disabled
            </a>
          </li>
        </ul>
        <form className="d-flex" role="search">
        <div className="form-check form-switch">
            <input className="form-check-input" onClick={props.handleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className={`form-check-label text-${props.mode === 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable Mode</label>
          </div>
          {/* <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button> */}
        </form>
      </div>
    </div>
  </nav>
  )
}

//for setting prop types for this import propTypes
Navabar.propTypes = {
    title: PropTypes.string
    // aboutText: aboutText.string
};

//default Props
Navabar.defaultProps = {
    aboutText: 'About Me'
};
