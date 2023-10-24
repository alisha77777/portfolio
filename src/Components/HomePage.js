import React from "react";
import Typical from "react-typical";

const HomePage = () => {
  return (
    <div className="home" id="home">
      <div className="intro">
        <div>Hello, my name is</div>
        <div className="name">{`<ALISHA/>`}</div>
        <div className="typical-text">
          <span> And I'm a </span>
          <span className="brand-c text-decoration-underline">
            <Typical
              steps={[
                "Web Developer",
                1000,
                "Freelancer",
                500,
                "Designer",
                1000,
              ]}
              loop={Infinity}
              wrapper="span"
            />
          </span>
        </div>
        <div>
          <a href="contact">
            <button className="btn brand-b text-white px-4 fs-3 my-3 hire-btn border-2">
              Hire me
            </button>
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default HomePage;
