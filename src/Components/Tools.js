import React from "react";
import Heading from "./Heading";
import html from "../Assets/images/html-5.svg";
import css from "../Assets/images/css3.svg";
import bootstrap from "../Assets/images/bootstrap.png";
import js from "../Assets/images/javascript.svg";
import react from "../Assets/images/reactjs.svg";
import redux from "../Assets/images/redux.svg";
import node from "../Assets/images/nodejs.svg";
import mongo from "../Assets/images/mongodb.svg";
import git from "../Assets/images/git.svg";
import chakra from "../Assets/images/54212428.png";

const Tools = () => {
  let data = [
    { src: html, title: "HTML5" },
    { src: css, title: "CSS3" },
    { src: bootstrap, title: "BOOTSTRAP" },
    { src: js, title: "JAVASCRIPT" },
    { src: react, title: "REACT" },
    { src: redux, title: "REDUX" },
    { src: node, title: "NODE JS" },
    { src: mongo, title: "MONGODB" },
    { src: git, title: "GIT" },
    { src: chakra, title: "CHAKRA UI" },
  ];

  return (
    // <div id="tool">
    //   <div style={{width:"100%"}}>
    //     <Heading heading="Tools I Use" text="what i use" color="white" />
    //     <div className="tool_container">
    //       {data?.map(({ src, title }) => {
    //         return (
    //           <div className="tool">
    //             <div className="cardImg">
    //               <img src={src} alt="" width="100%" height="100%" />
    //             </div>
    //             <p>{title}</p>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
    <div id="tool">
      <div style={{ width: "100%" }} >
        <Heading heading="Tools I Use" text="what i use" color="white" />
        <div className="tool_container">
          {data?.map(({ src, title }) => {
            return (
              <div className="tool">
                <div className="cardImg">
                  <img src={src} alt="" width="100%" height="100%" />
                </div>
                <p>{title}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default Tools;
