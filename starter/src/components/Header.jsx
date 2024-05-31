import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h2>Devmountain Eatery</h2>
      <nav>
        <Link to="" className="nav-btn">
          <button>Home</button>
        </Link>
        <Link to="/newRecipe" className="nav-btn">
          <button>Add Recipe</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
