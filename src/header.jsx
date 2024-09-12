import React from "react";
import Logo from "./logo";
import Language from "./language";
import Signup from "./signup";
import Login from "./login";
import Cart from "./cart";
const Header = () => {
  return (
    <nav className="navbar">
      <div className="firstnav">
        <Logo></Logo>
        <h1>for locatio</h1>
        <form className="searchtype" role="search">
          <input
            className="forsearch"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <Language></Language>
        <Signup></Signup>&& <Login></Login>
        <Cart></Cart>
      </div>
    </nav>
  );
};
export default Header;
