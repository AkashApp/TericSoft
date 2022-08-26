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
        <h5 className="Sport">Featured</h5>
      </div>
      <div className="NavIcons">
        <FontAwesomeIcon icon={faChildRifle} className="Icons" />
        <h5 className="Sport">Armoury</h5>
      </div>
      <div className="NavIcons">
        <FontAwesomeIcon icon={faPersonSwimming} className="Icons" />
        <h5 className="Sport">Aquatics</h5>
      </div>
      <div className="NavIcons">
        <FontAwesomeIcon icon={faPersonBiking} className="Icons" />
        <h5 className="Sport">Cycling</h5>
      </div>
      <div className="NavIcons">
        <FontAwesomeIcon icon={faHorse} className="Icons" />
        <h5 className="Sport">Equestrain</h5>
      </div>
      <div className="NavIcons">
        <FontAwesomeIcon icon={faPersonSkating} className="Icons" />
        <h5 className="Sport">Extreme</h5>
      </div>
      <div className="NavIcons">
        <FontAwesomeIcon icon={faGolfBallTee} className="Icons" />
        <h5 className="Sport">Golf</h5>
      </div>
      <div className="NavIcons">
        <FontAwesomeIcon icon={faChildReaching} className="Icons" />
        <h5 className="Sport">Gymnastics</h5>
      </div>
      <div className="NavIcons">
        <FontAwesomeIcon icon={faWater} className="Icons" />
        <h5 className="Sport">Lake & Sea</h5>
      </div>
    </div>
  );
};

export default Navbar;
