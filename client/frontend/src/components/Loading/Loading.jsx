import React from "react";
import Loading1 from "../../images/loading1.png";
import Loading2 from "../../images/loading2.png";
//styles
import "./Loading.css";

const Loading = () => {
  return (
    <section className="loader">
      <div className="loader_images">
        <img src={Loading1} alt="sucess pic" className="image_main" />
        <img src={Loading2} alt="sucess pic" className="image_main" />
      </div>
      <span>Getting rider</span>
    </section>
  );
};

export default Loading;
