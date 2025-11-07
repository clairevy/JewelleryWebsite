import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/Cartier_logo.svg.png';

const Header = () => {
  return (
    <div id="header_section">
      <div id="header">
        <div className="top-header">
          <div className="row">
            <div className="col-3">
              <div className="row">
                <div className="col-auto">
                  <div className="dropdown">
                    <a className="btn dropdown-toggle" href="#"> Me </a>
                  </div>
                </div>
                <div className="col-auto">
                  <div className="dropdown">
                    <a className="btn dropdown-toggle" href="#"> Language </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6">
              <ul className="top-menu">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/delivery">Delivery</Link></li>
                <li><Link to="/payment">Payment</Link></li>
                <li><Link to="/store">Store</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="col-3">
              <ul>
                <li><i className="bi bi-eye"></i></li>
                <li><i className="bi bi-heart"></i></li>
                <li><i className="bi bi-person">My account</i></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-header">
          <div className="row">
            <div className="col-3">
              <img src={logo} alt="Logo" />
            </div>
            <div className="col-4">nnn</div>
            <div className="col-3">nnn</div>
            <div className="col-2">nnn</div>
          </div>
        </div>
        <div className="cate-bar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/support">Support</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;