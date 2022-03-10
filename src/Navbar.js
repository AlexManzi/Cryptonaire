import React from 'react';
import { NavLink } from "react-router-dom"



function Navbar({data}) {
  
 
  return (
    <div>      
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark" id="TopBar">
    <div className="container-fluid">
      <NavLink className="navbar-brand" to="/"id="brandName">CRYPTONAIRE</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/actualWallet">Actual Wallet</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dreamWallet">Dream Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="about">About Us</NavLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Dropdown link
            </a>
            <ul id="dropDown"className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li><a className="dropdown-item" href="#">Actual Wallet</a></li>
              <li><a className="dropdown-item" href="#">Dream Portfolio</a></li>
              <li><a className="dropdown-item" href="#">About Us</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div id="priceBar">
      <h4> 1 BTC = ${data.bitcoin.usd}</h4>
      <h4 id="EthPrice"> 1 ETH = ${data.ethereum.usd}</h4>
  </div>
</div>

  )
}

export default Navbar