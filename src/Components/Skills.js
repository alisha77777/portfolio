import React from "react";
import Heading from "./Heading";

const Skills = () => {
  let skill = [
    "Energy and commitment to understand the needs and aspirations to achieve the goals.",
    "Ability to convey and implement thoughts, ideas and information in a transparent and meaningful manner.",
    "Ability to work under pressure and within timelines.",
    "Effective communication skills with good listening capability",
    "Problem Solver",
  ];

  let tech = [
    { title: "HTML", percent: "90%", style: {width : '90%' , minHeight : '5px'}},
    { title: "CSS", percent: "80%", style: {width : '80%' , minHeight : '5px'}},
    { title: "JAVASCRIPT", percent: "90%", style: {width : '90%' , minHeight : '5px'}},
    { title: "REACT", percent: "80%", style: {width : '80%' , minHeight : '5px'}},
    { title: "REDUX", percent: "70%", style: {width : '70%' , minHeight : '5px'}},
  ];

  return (
    <div id="skills">
      <div>
        <Heading heading={"My skills"} text={"what i have"} />
        <div className="skill_container">
          <div className="skill_left">
            <h3>Soft and Creative Skills</h3>
            <ul>
              {skill.map((skill, index) => {
                return <li key={index}>{skill}</li>;
              })}
            </ul>
          </div>
          <div className="skill_right">
            <h3>Coding Skills</h3>
            <div className="skill_col">
              {tech.map(({ title, percent, style }) => {
                return (
                  <div className="skill_card">
                    <div className="skill_head"><span>{title}</span><span>{percent}</span></div>
                    <div className="skill_line">
                      <div style={{width : style.width , minHeight : style.minHeight}} className="brand-b"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
//      
  );
};

export default Skills;
