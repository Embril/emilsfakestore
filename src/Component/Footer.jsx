import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer-left col-md-4 col-sm-6">
        <p class="about">
          <span> About the company</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
            explicabo, omnis error exercitationem architecto enim. Eligendi
            corporis impedit dolor voluptates ab temporibus, dolorum quas totam
            quia, unde aliquam ipsum corrupti.
          </p>
        </p>
      </div>
      <div class="footer-center col-md-4 col-sm-6">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <span> Adress 99</span> Place, Place
          </p>
        </div>
        <div>
          <i class="fa fa-phone"></i>
          <p> (+47) 999 99 999</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p>
            <a href="#"> post@fakestore.no</a>
          </p>
        </div>
      </div>
      <div class="footer-right col-md-4 col-sm-6">
        <h2 style={{ marginLeft: '15%' }}>
          <img
            src="https://fakestoreapi.com/icons/logo.png"
            alt="Logo"
            style={{ width: '15%' }}
          />
        </h2>
        <p class="menu">
          <NavLink className="nav-link px-1" to="/" exact>
            Home |
          </NavLink>

          <NavLink className="nav-link px-1" to="/products" exact>
            Pruducts |
          </NavLink>

          <NavLink className="nav-link px-1" to="/about" exact>
            About |
          </NavLink>

          <NavLink className="nav-link px-1" to="/Cart" exact>
            Cart |
          </NavLink>

          <a className="nav-link" onClick={() => window.scrollTo(0, 0)}>
            Back to top
          </a>
        </p>
      </div>
    </footer>
  )
}
export default Footer
