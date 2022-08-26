import React from "react";
import "./Body.scss";

const Body = () => {
  return (
    <div className="Main_Body">
      <div className="Body_Nav">
        <h4>BMX</h4>
        <h4>Mountain</h4>
        <h4>Road</h4>
        <h4>Track</h4>
      </div>
      <div className="blank"></div>
      <h2 className="Highlights">Highlights</h2>
      <div className="Sport_Pics">
        <div className="Pics">
          <img
            className="Images"
            src="https://images.unsplash.com/photo-1554201267-8eb0907c5d9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Ym14fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="Pics">
          <img
            className="Images"
            src="https://images.unsplash.com/photo-1542715339-83599a9f0432?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Ym14fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="Pics">
          <img
            className="Images"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1UvOYQK8PZUvPOHYCp_j3MRl7SYlAAdcBROyNqQjSU96Zo8IghisEtYxHAhYdynTmdmo&usqp=CAU"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
