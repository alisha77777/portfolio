import React, { useEffect } from "react";
import Card from "./Card";
import Heading from "./Heading";
import traffic from "../Assets/images/traffic.png"
import story from "../Assets/images/story.png"
import netflix from "../Assets/images/Netflix_project.png"
import lumen from "../Assets/images/lumen-1.png"
import firebase from "../Assets/images/firebase.png"
import html from "../Assets/images/html-5.svg";
import css from "../Assets/images/css3.svg";
import js from "../Assets/images/javascript.svg";
import react from "../Assets/images/reactjs.svg";
import redux from "../Assets/images/redux.svg";
import node from "../Assets/images/nodejs.svg";
import mongo from "../Assets/images/mongodb.svg";
import chakra from "../Assets/images/54212428.png";

const Projects = () => {
  let arr = [
    {
      index: 0,
      href: "https://storycore.netlify.app/",
      git : "https://github.com/Harshitpahuja20/Novels_app.git",
      src : story,
      name : "StoryCore",
      desc : "A vibrant storytelling platform where readers delve into captivating narratives.",
      images : [
        {src : react},
        {src : node},
        {src : mongo},
      ]
    },
    {
      index: 1,
      href: "https://whimsical-entremet-277164.netlify.app/",
      git : "https://github.com/Harshitpahuja20/Netflix_clone.git",
      src : netflix,
      name : "Netflix Clone",
      desc : "A fully responsive netflix clone with React and @Reduxjs/toolkit .",
      images : [
        {src : react},
        {src : firebase},
        {src : redux},
      ]
    },
    {
      index: 2,
      href: "https://lumen-5clone.netlify.app/",
      git : "https://github.com/Harshitpahuja20/Lumen5-clone.git",
      src : lumen,
      name : "Lumen5 Clone",
      desc : "A clone of famouse video editing Website - Lumen5.",
      images : [
        {src : react},
        {src : chakra},
        {src : js},
      ]
    },
    {
      index: 3,
      href: "https://storycore.netlify.app/static/media/carousel2.b110e24ff3f3c61e596e.webp",
      git : "https://github.com/Harshitpahuja20/traffic-light.git",
      src : traffic,
      name : "Traffic Light",
      desc : "Traffic light design and functionality with HTML , CSS and Javascript.",
      images : [
        {src : html},
        {src : css},
        {src : js},
      ]
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <div id="projects">
      <div className="project_content">
        <Heading
          heading={"My Projects"}
          text={"what i have built"}
          color="white"
        />
        <div className="card_container">
          {arr.map((data) => {
            return (
              <div className="tool">
                <Card data={data}/>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
