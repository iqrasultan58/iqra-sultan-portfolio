import React from "react";
import html from "../Skills/html.png";
import css from "../Skills/css.png";
import JavaScript from "../Skills/javascript.png";
import react from "../Skills/react.png";
import bootstrap from "../Skills/bootstrap.png";
import redux from "../Skills/redux.png";
import tailwind from "../Skills/tailwind.png";
import npm from "../Skills/NPM.png";
import canva from "../Skills/Canva.svg";
import gitlab from "../Skills/GitLab.png";
import node from "../Skills/Node.js.png";
import jira from "../Skills/Jira.png";
import mongodb from "../Skills/MongoDB.png";
import git from "../Skills/Git.png";


import MUI from "../Skills/material.png";
import { IconCloud } from "./IconCloud";
import SkillList from "./SkillList";
import { RiNextjsFill } from "react-icons/ri";

const Skills = () => {
  return (
    <div>
      <div className=" bg_dark_blue">
        <div className="pt-24">
          <div className="heading">
            <h4 className="main_heading">SKILLS</h4>
            <h2 className="sub_heading hidden sm:block">SKILLS</h2>
          </div>
        </div>

        <div className="px-4  md:px-8 lg:px-16 xl:!px-0 xl:w-[1220px] xl:mx-auto pt-10 pb-24 skills justify-around">
          <div className="box html" data-aos="zoom-in">
            <div className=" pb-2 w-fit m-auto">
              <img src={html} alt="" />
            </div>

            <div className="pb-2">
              <b>Html</b>
            </div>
          </div>

          <div className="box css " data-aos="zoom-in">
            <div className=" pb-2 w-fit m-auto">
              <img src={css} alt="" />
            </div>

            <div className="pb-2">
              <b>Css</b>
            </div>
          </div>

          <div className="box javascript" data-aos="zoom-in">
            <div className=" pb-2 w-fit m-auto">
              <img src={JavaScript} alt="" />
            </div>

            <div className="pb-2">
              <b>JavaScript</b>
            </div>

          </div>

          <div className="box react" data-aos="zoom-in">
            <div className=" pb-2 w-fit m-auto">
              <img src={react} alt="" />
            </div>

            <div className="pb-2">
              <b>React</b>
            </div>

          </div>

          <div className="box redux" data-aos="zoom-in">
            <div className=" pb-2 w-fit m-auto">
              <img src={redux} alt="" />
            </div>

            <div className="pb-2">
              <b>Redux Toolkit</b>
            </div>

          </div>

          <div className="box bootstrap" data-aos="zoom-in">
            <div className=" pb-2 w-fit m-auto">
              <img src={bootstrap} alt="" />
            </div>

            <div className="pb-2">
              <b>Bootstarp</b>
            </div>

          </div>

          <div className="box tailwind" data-aos="zoom-in">
            <div className=" pb-2 w-fit m-auto">
              <img src={tailwind} alt="" />
            </div>

            <div className="pb-2">
              <b>Tailwind</b>
            </div>

          </div>

          <div className="box mui mui_color" data-aos="zoom-in">
            <div className=" pb-2 w-fit m-auto">
              <img src={MUI} alt="" className="w-[48px] h-[48px]" />
            </div>

            <div className="pb-2">
              <b>Material UI</b>
            </div>

          </div>

          <div className="box mui" data-aos="zoom-in" style={{borderColor:"white"}}>
            <div className=" pb-2 w-fit m-auto">
              <RiNextjsFill fontSize={52}/>
            </div>

            <div className="pb-2">
              <b>Material UI</b>
            </div>

          </div>

          <div className="box mui" data-aos="zoom-in" style={{borderColor:"#4CAF50"}}>
            <div className=" pb-2 w-fit m-auto">
              <img src={mongodb} alt="" className="w-[48px] h-[48px]" />
            </div>

            <div className="pb-2">
              <b>Material UI</b>
            </div>

          </div>

          <div className="box mui" data-aos="zoom-in" style={{borderColor:"#359A45"}}>
            <div className=" pb-2 w-fit m-auto">
              <img src={node} alt="" className="w-[48px] h-[48px]" />
            </div>

            <div className="pb-2">
              <b>Material UI</b>
            </div>

          </div>

          <div className="box mui" data-aos="zoom-in" style={{borderColor:"white"}}>
            <div className=" pb-2 w-fit m-auto">
              <img src={npm} alt="" className="w-[48px] h-[48px]" />
            </div>

            <div className="pb-2">
              <b>Material UI</b>
            </div>

          </div>

          <div className="box mui" data-aos="zoom-in" style={{borderColor:"#F4511E"}}>
            <div className=" pb-2 w-fit m-auto">
              <img src={git} alt="" className="w-[48px] h-[48px]" />
            </div>

            <div className="pb-2">
              <b>Material UI</b>
            </div>

          </div>
          
          <div className="box mui" data-aos="zoom-in" style={{borderColor:"white"}}>
            <div className=" pb-2 w-fit m-auto">
              <img src={jira} alt="" className="w-[48px] h-[48px]" />
            </div>

            <div className="pb-2">
              <b>Material UI</b>
            </div>

          </div>

          <div className="box mui" data-aos="zoom-in" style={{borderColor:"#E53935"}}>
            <div className=" pb-2 w-fit m-auto">
              <img src={gitlab} alt="" className="w-[48px] h-[48px]" />
            </div>

            <div className="pb-2">
              <b>Material UI</b>
            </div>

          </div>

          <div className="box mui" data-aos="zoom-in" style={{borderColor:"#358FD9"}}>
            <div className=" pb-2 w-fit m-auto">
              <img src={canva} alt="" className="w-[48px] h-[48px]" />
            </div>

            <div className="pb-2">
              <b>Material UI</b>
            </div>

          </div>
        </div>


        <div className="flex justify-center px-4  md:px-8 lg:px-16 xl:px-32 pt-10 pb-24 md:hidden">
          <IconCloud />
        </div>

      </div>
    </div>
  );
};




export default Skills;
