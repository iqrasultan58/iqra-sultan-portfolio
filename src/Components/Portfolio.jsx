import React from "react";
// import dnd from "../img/image.png";
// import green from "../img/green.png";
// import job from "../img/job.png";
// import ats from "../img/projects/ats.png";
import cheezious from "../img/projects/cheezious.jpg";
import telbee from "../img/projects/telbee.jpg";
import kitchenconnection from "../img/projects/kitchenconnection.jpg";
import yahuda from "../img/projects/yahuda.jpg";
// import aarish from "../img/projects/next js 3.png";
// import tasmia from "../img/tasmia.png";

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
            <a href="https://security-app-alpha.vercel.app/ " target="_blank">
              <i class="fa-solid fa-link"></i>
            </a>
          </div>

          {/* <img src={framer} alt="dnd" className="w-[100%] h-[100%]" /> */}
        </a>

        <a href="#" className="box" data-aos="slide-up">
          <div className="box_hover animate__fadeIn animate__animated">
          
            <a href="https://hgfhj101.netlify.app/ " target="_blank">
              <i class="fa-solid fa-link"></i>
            </a>
          </div>

          <img src={yahuda} alt="dnd" className="w-[100%] h-[100%]" />
        </a>

        <a href="#" className="box" data-aos="slide-up">
          <div className="box_hover animate__fadeIn animate__animated">
         
            <a href="https://aarish-1.netlify.app/ " target="_blank">
              <i class="fa-solid fa-link"></i>
            </a>
          </div>

          {/* <img src={aarish} alt="dnd" className="w-[100%] h-[100%]" /> */}
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
