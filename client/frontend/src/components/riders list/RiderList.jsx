import React from "react";
//styles
import "./RiderList.css";
import Ridera from "../../images/ridera.png";

const RiderList = () => {
  return (
    <div className="cont">
      <span>Riders Available</span>
      <div className="rider_list">
        <div className="rider_list_img">
          <img src={Ridera} alt="first logo" />
          <div className="name">
            <h4>
              Jerry Bale <span className="n_rides">439 rides</span>
            </h4>
            <p>
              <span className="bike">Bike</span> <b>KSF221TY</b>
            </p>
          </div>
        </div>
        {/* <div className="rider_list_info"></div> */}
        <div className="rider_list_art">
          <div className="rider_list_art_cont">
            <span className="minutes">2 mins away</span>
            <button className="btn_art">Accept</button>
          </div>
          <div>
            <span className="ratings">4.4 (250)</span>
            <button className="btn_view">View Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderList;
