import React from "react";
import "./PetsListNav.css";

export const PetsListNav = ({ cats, dogs }) => {
  return (
    <nav className="pets-nav">
      <ul>
        <Link to={"/pets/cats"} element="cats" >
        <li>
          <a href="/pets/cats">See All Cats ({cats.length})</a>
        </li>
        </Link>
        <Link to={"/pets/dogs"}> 
        <li>
          <a href="/pets/dogs">See All Dogs ({dogs.length})</a>
        </li>
        </Link>
      </ul>
    </nav>
  );
};

export default PetsListNav;
