import React  from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'


export default function Navbar(props) {
  
   
  return (
    <nav className={`navbar container navbar-expand-lg navbar-${props.mode === 'light' ? "dark" : 'light'} bg-${props.mode === 'light' ? "dark" : 'light'}`}>
    
   
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" onClick={props.btnclick} data-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button>
      <div  className={`collapse navbar-collapse  ${props.btn=== true?'show ':''}`} id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link " aria-current="page" href="/">Home</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="about">{props.about}</Link>
          </li> */}
        </ul>
        <div className={` mx-1 form-check form-switch text-${props.mode === 'light' ? "light" : 'dark'}`} >
          <input className="form-check-input" type="checkbox" onClick={props.toggle} role="switch" id="flexSwitchCheckDefault" style={{cursor:"pointer"}}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{cursor:"pointer"}}>Enable Dark mode</label>
        </div>
      </div>
     
  </nav>
  )
}
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string
}
Navbar.defaultProps ={title:"Title here"}

