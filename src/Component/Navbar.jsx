import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux/es/hooks/useSelector'
import { useState } from 'react'
import Cart from './Cart'

const Navbar = () => {
  const state = useSelector((state) => state.handleActions)

  //bg-light for darker navbar
  return (
    <div>
      {state.loginSuccess && state.userDisplayName && (
        <span style={{ color: 'green' }}>Hi, {state.userDisplayName}</span>
      )}
      <nav className="navbar navbar-expand-lg display bg-light py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            <img
              src="https://fakestoreapi.com/icons/logo.png"
              alt="Fakestore"
              height={'50px'}
            />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-5 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link" to="/contact">
                  Contact
                </a>
              </li>
            </ul>

            {state.loginSuccess && state.userDisplayName && (
              <span style={{ color: 'green' }}>
                Hi, {state.userDisplayName}
              </span>
            )}
            <div className="buttons">
              <NavLink to="/login" className="btn btn-outline-dark">
                <i className="fa fa-sign-in me-1 "></i> Login
              </NavLink>
              <NavLink to="/register" className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i> Register
              </NavLink>
              <NavLink to="/cart" className="btn btn-outline-dark ms-2">
                <i className="fa fa-shopping-cart me-1"></i> Cart (
                {state.length})
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar
