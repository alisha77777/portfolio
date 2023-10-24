import React from "react";
import Heading from "./Heading";
import Typical from "react-typical";
import pdf from "../Assets/Harshit_Resume3.pdf";
import me from "../Assets/images/my_image.png"

const About = () => {
  const handlepreview = () => {
    const file = pdf;
    window.open(file, "_blank");
  };
  const handleDownload = () => {
    const downloadUrl = pdf;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Harshit_Resume.pdf";
    link.click();
  };
  return (
    <div id="about" className="flex">
      <div>
        <Heading heading={"About me"} text={"who i am"} />
        <div className="container">
          <div className="imgBox">
            <img
              src={me}
              alt=""
              width="100%"
              height="100%"
            />
          </div>
          <div className="about-intro">
            <div className="d-flex head">
              <h4>I'm Harshit and I'm a&nbsp;</h4>
              <h4 className="brand-c">
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
              </h4>
            </div>
            <div>
              Passionate Full Stack Web Developer with a specialization in MERN
              stack. Skilled, collaborative and attentive developer with a drive
              to develop the most relevant products. Always looking forward to
              learning something new to strengthen skills learned.
            </div>
            <div>
              <button
                className="btn brand-b text-white px-2 fs-5 my-3 me-3 hire-btn border-2"
                onClick={handlepreview}
              >
                Preview CV
              </button>
              <button
                className="btn brand-b text-white px-2 fs-5 my-3 me-3 hire-btn border-2"
                onClick={handleDownload}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
