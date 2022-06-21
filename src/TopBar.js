import React from "react";
import "./styles/navbar.css";

function TopBar() {
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Netflix
      </a>
      <button className="hamburger">
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div className="navigation-menu">
        <ul>
          {/* <li>
            <input type="text" placeholder="Search.."></input>
          </li> */}
          <li>
            <a href="/home">UNLIMITED TV SHOWS AND MOVIES</a>
          </li>
          <li>
            <button className="join">JOIN NOW</button>
          </li>
          <li>
            <button className="signin">Sign In</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { TopBar };
