import React from "react";
import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import "./Header.css";

const Header = () => {
  return (
    <>
      <header>
        <nav className={`nav page-padding`}>
          <div className="nav-links-container">
            <ul className="nav-links-list">
              <li className="nav-link-items">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? `link activeLink` : `link`
                  }
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-link-items">
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    isActive ? `link activeLink` : `link`
                  }
                >
                  Dashboard
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="nav-button">
            <LoginButton />
          </div>
        </nav>
      </header>
      <header className={`header main-layout section-padding`}>
        <h1 className="title">Cat Couture</h1>
      </header>
    </>
  );
};

export default Header;
