import React from "react";
import "./Navbar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWater,
  faStar,
  faChildRifle,
  faPersonSwimming,
  faPersonBiking,
  faHorse,
  faPersonSkating,
  faChildReaching,
  faGolfBallTee,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="NavIcons">
        <FontAwesomeIcon icon={faStar} className="Icons" />
      </div>
      <div className="NavIcons">
        <FontAwesomeIcon icon={faChildRifle} className="Icons" />
      </div>
      <div className="NavIcons">
        <FontAwesomeIcon icon={faPersonSwimming} className="Icons" />
      </div>
      <div className="NavIcons">
        <FontAwesomeIcon icon={faPersonBiking} className="Icons" />
      </div>
      <div className="NavIcons">
        <FontAwesomeIcon icon={faHorse} className="Icons" />
      </div>
      <div className="NavIcons">
        <FontAwesomeIcon icon={faPersonSkating} className="Icons" />
      </div>
      <div className="NavIcons">
        <FontAwesomeIcon icon={faGolfBallTee} className="Icons" />
      </div>
      <div className="NavIcons">
        <FontAwesomeIcon icon={faChildReaching} className="Icons" />
      </div>
      <div className="NavIcons">
        <FontAwesomeIcon icon={faWater} className="Icons" />
      </div>
    </div>
  );
};

export default Navbar;
