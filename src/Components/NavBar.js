import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="three">
        <Link className="link" to="/dashbord"> Accueil          
        </Link>
        <Link className="link" to="/movieList">Nos films
          
        </Link>
        <Link className="link" to="/addMovie">Propositions
         
        </Link>
        <Link className="link" to="/search"><span>Recherche</span>
          
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
