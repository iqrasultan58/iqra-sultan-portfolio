import React from "react";
import cheezious from "../img/projects/cheezious.gif";
import telbee from "../img/projects/telbee.gif";
import kitchenconnection from "../img/projects/kitchenconnection.gif";
import yahuda from "../img/projects/yahuda.jpg";
import gamesmith from "../img/projects/gamesmith1.png";
import logo from "../img/projects/logo.jpg";

const Portfolio = ({ id, title }) => {
  return (
    <div className="bg_light_blue" id={id}>
      <div className="pt-24">
        <div className="heading">
          <h4 className="main_heading">{title}</h4>
          <h2 className="sub_heading hidden sm:block">PORTFOLIO</h2>
        </div>
      </div>

      <div className="px-4  md:px-8 lg:px-16 xl:px-0 xl:w-[1220px] xl:mx-auto pt-10 pb-24 portfolio flex justify-center">
      <a href="#" className="box" data-aos="slide-up">
          <div className="box_hover animate__fadeIn animate__animated">
            <a target="_blank">
              <i class="fa-solid fa-link"></i>
            </a>
          </div>

          <img src={telbee} alt="ats" className="w-[100%] h-[100%]" />
        </a>

        <a href="#" className="box" data-aos="slide-up">
          <div className="box_hover animate__fadeIn animate__animated">
            
            <a target="_blank">
              <i class="fa-solid fa-link"></i>
            </a>
          </div>

          <img src={kitchenconnection} alt="aarish" className="w-[100%] h-[100%]" />
        </a>

        <a href="#" className="box" data-aos="slide-up">
          <div className="box_hover animate__fadeIn animate__animated">
            <a  target="_blank">
              <i class="fa-solid fa-link"></i>
            </a>
          </div>

          <img src={cheezious} alt="tasmia" className="w-[100%] h-[100%]" />
        </a>

        <a href="#" className="box" data-aos="slide-up">
          <div className="box_hover animate__fadeIn animate__animated">
            <a href="" target="_blank">
              <i class="fa-solid fa-link"></i>
            </a>
          </div>

          <img src={logo} alt="dnd" className="w-[100%] h-[100%]" />
        </a>

        <a href="#" className="box" data-aos="slide-up">
          <div className="box_hover animate__fadeIn animate__animated">
          
            <a href="" target="_blank">
              <i class="fa-solid fa-link"></i>
            </a>
          </div>

          <img src={yahuda} alt="dnd" className="w-[100%] h-[100%]" />
        </a>

        <a href="#" className="box" data-aos="slide-up">
          <div className="box_hover animate__fadeIn animate__animated">
         
            <a href="" target="_blank">
              <i class="fa-solid fa-link"></i>
            </a>
          </div>

          <img src={gamesmith} alt="dnd" className="w-[100%] h-[100%]" />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
