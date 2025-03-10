import React from "react";
import { motion } from 'framer-motion'
import { BorderBeam } from "./BorderBeam";
import '../App.css';
import dp from "../img/Untitled design (3).png";

const About = ({ id, title }) => {
  return (
    <div id={id}>
      <div className="about pt-10">
        <div className="">
          <div className="heading">
            <h4 className="main_heading">{title} Me</h4>
            <h2 className="sub_heading hidden sm:block">About Me</h2>
          </div>
        </div>

        <div className="px-4  md:px-8 lg:px-16 xl:px-0 xl:w-[1220px] xl:mx-auto pt-10 lg:flex lg:flex-row  md:flex-row text-white">
          <div className="mb-6 md:mb-0 " data-aos="zoom-in">
          {/* <img src={dp} alt="ats" className="w-[100%] h-[100%]" /> */}
          </div>

          <div
            className=" sm:p-10 about_content  "
            data-aos="zoom-in"
          >
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4">
              Hello! I'm Iqra Sultan
            </h2>

            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4">
              Full Stack Developer
            </h3>

            <p className="max-w-full text-[15px]">
              I’m a results-driven Senior Full Stack Developer with a strong background in designing
              and developing scalable, high-performance web applications. With years of hands-on
              experience in MERN Stack I specialize in building robust digital solutions that blend
              functionality with exceptional user experience.
            </p>
            <p>
              Beyond development, I bring strategic thinking and leadership to every project—ensuring
              timely delivery, efficient workflows, and alignment with business goals.
            </p>
            <p>Having also worked in project management roles, I understand the importance of clear
              communication, collaboration, and agile execution. Whether it’s creating custom
              applications, managing complex integrations, or optimizing performance, I’m passionate
              about delivering solutions that create real impact.

              Let’s build something amazing together.
            </p>

            <div className="info pt-2">
              <div className="flex py-1">
                <p className=" pr-4 sm:pr-14">Email</p>
                <p>: iqrasultan58@gmail.com</p>
              </div>

              <div className="flex py-1">
                <p className="pr-4 sm:pr-[58px]">From</p>
                <p>: Lahore, Pakistan</p>
              </div>

              <div className="flex py-1">
                <p className="pr-4 sm:pr-[24px]">Language</p>
                <p>: English, Urdu</p>
              </div>

              <div className="pt-4 flex justify-center sm:block">
                {/* <a
                  href="cv/Bilal_CV.pdf"
                  download={true}
                  target="blank"
                  className="btn btn_hire_me"
                >
                  Download CV
                </a> */}

                <a
                  href="https://www.upwork.com/freelancers/~01a562478db5ce46df"
                  target="blank"
                  className="btn btn_hire_me"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-24">
          <div className="heading">
            <h4 className="main_heading">Service</h4>
            <h2 className="sub_heading hidden sm:block">Service</h2>
          </div>
        </div>

        <div className="px-4 md:px-8 lg:px-16 xl:px-0 xl:w-[1220px] xl:mx-auto pt-10 pb-24 flex justify-around flex-wrap lg:flex-row services">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.04, ease: "easeInOut" }}
            className="box relative overflow-hidden" // Add relative and overflow-hidden for positioning
            data-aos="zoom-in"
          >
            <BorderBeam
              className="absolute inset-0" // Ensures the beam covers the card
              size={200}
              duration={15}
              anchor={90}
              borderWidth={2} // Adjust border width to fit your design
              colorFrom="#ffaa40"
              colorTo="#9c40ff"
              delay={0.2} // You can modify delay for each card if needed
            />
            <div className="box_icon">
              <i className="fa-solid fa-code"></i>
            </div>

            <div className="bold">
              <b className="">Full Stack Development</b>
            </div>

            <div className="simple">
              <p>
              I am a Full Stack web developer with extensive experience in building web applications from
              scratch using MERN stack. I excel in integrating frontend and backend components seamlessly
              delivering scalable, efficient, and user-focused solutions with high performance and quality.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.04, ease: "easeInOut" }}
            className="box relative overflow-hidden"
            data-aos="zoom-in"
          >
            <BorderBeam
              className="absolute inset-0"
              size={200}
              duration={15}
              anchor={90}
              borderWidth={2}
              colorFrom="#ffaa40"
              colorTo="#9c40ff"
              delay={0.2}
            />
            <div className="box_icon">
              <i className="fa-solid fa-user"></i>
            </div>

            <div className="bold">
              <b>Agile Project Management</b>
            </div>

            <div className="simple">
              <p>
              As an experienced Project Manager and Certified Scrum Master with a strong background in leading
              software development projects, I specialize in fostering collaboration, ensuring timely delivery,
              and aligning teams with client goals, all while maintaining a with a focus on efficiency and continuous
              improvement.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.04, ease: "easeInOut" }}
            className="box relative overflow-hidden"
            data-aos="zoom-in"
          >
            <BorderBeam
              className="absolute inset-0"
              size={200}
              duration={15}
              anchor={90}
              borderWidth={2}
              colorFrom="#ffaa40"
              colorTo="#9c40ff"
              delay={0.2}
            />
            <div className="box_icon">
              <i className="fa-brands fa-shopping-cart "></i>
            </div>

            <div className="bold">
              <b>E-commerce Specialist</b>
            </div>

            <div className="simple">
              <p>
              I am an experienced eCommerce specialist with expertise in both Shopify and WordPress,
              specializing in building and customizing high-performance online stores. With a deep
              understanding of eCommerce platforms, I excel in creating seamless shopping experiences,
              optimizing store functionality, and driving business growth.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
