import React from "react";

function Header() {
  return (
    <nav className="navbar">
      <ul className="wrapper_nav">
        <li>About </li>
        <li>Infornation</li>
        <li>Location</li>
      </ul>
      <div className="inp_wrapper">
        <input placeholder="what do you want?" />
        <button>search</button>
      </div>
    </nav>
  );
}

export default Header;
