import React from 'react';
import logo from '../logo.png';

//Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
	return(
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
		  <div className="container">
		    <a className="navbar-brand" href="#"><img src={logo} alt='logo' className='logo'/></a>
		    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		      <FontAwesomeIcon icon={faBars} style={{color: '#FFFFFF'}} />
		    </button>
		    <div className="collapse navbar-collapse" id="navbarSupportedContent">
		      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
		        <li className="nav-item">
		          <a className="nav-link" href="#">Home</a>
		        </li>
		        <li className="nav-item">
		          <a className="nav-link" href="#">About</a>
		        </li>
		       <li className="nav-item">
		          <a className="nav-link" href="#">Services</a>
		        </li>
		        <li className="nav-item">
		          <a className="nav-link" href="#">Work</a>
		        </li>
		        <li className="nav-item">
		          <a className="nav-link" href="#">Portfolio</a>
		        </li>
		        <li className="nav-item">
		          <a className="nav-link" href="#">Contact</a>
		        </li>
		      </ul>
		    </div>
		  </div>
		</nav>
	)
}

export default Navbar;