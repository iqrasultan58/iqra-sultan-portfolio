import React from "react";
import { motion } from 'framer-motion'
import { BorderBeam } from "./BorderBeam";
import '../App.css';

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

          <div className=" sm:p-10 about_content  " data-aos="zoom-in">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-4">
              Hello! I'm Iqra Sultan
            </h2>

            <h3 className="text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4">
              Software Project Manager | ECommerce Specialist | Full-Stack
              Developer
            </h3>

            <p className="max-w-full text-[15px]">
              As a results-oriented <b>Project Manager</b> with a deep focus on
              e-commerce, I excel at leading end-to-end digital initiatives that
              drive business growth and customer satisfaction. My experience
              spans managing complex e-commerce projects, from strategic
              planning and team leadership to seamless execution and delivery. I
              prioritize clear communication, cross-functional collaboration,
              and agile methodologies to ensure projects are delivered on time
              and aligned with business goals.
            </p>
            <p>
              Leveraging my strong background in full-stack development, I also
              bring hands-on technical expertise to the table—designing,
              developing, and optimizing scalable, high-performance web
              applications tailored for the e-commerce domain. My dual
              capability allows me to bridge the gap between business and
              technology, ensuring that every digital solution not only meets
              functional requirements but also delivers exceptional user
              experiences and measurable results.
            </p>
            <p>
              Whether orchestrating large-scale platform migrations, integrating
              third-party solutions, or enhancing site performance, I am
              passionate about creating digital ecosystems that empower brands
              and drive real impact.
              <br /> Let’s build something amazing together.
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

                {/* <a
                  href="https://www.upwork.com/freelancers/~01a562478db5ce46df"
                  target="blank"
                  className="btn btn_hire_me"
                >
                  Hire Me
                </a> */}
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
                As an experienced Project Manager and Certified Scrum Master
                with a strong background in leading software development
                projects, I specialize in fostering collaboration, ensuring
                timely delivery, and aligning teams with client goals, all while
                maintaining a with a focus on efficiency and continuous
                improvement.
              </p>
              <div className="flex-chip">
                <span className="chip">Scrum</span>
                <span className="chip">PMP</span>
                <span className="chip">Documentation</span>
                <span className="chip">Agile Methodologies</span>
                <span className="chip">Poker Planning</span>
                <span className="chip">Backlog Managment</span>
                <span className="chip">Jira</span>
                <span className="chip">Trello</span>
              </div>
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
                I am an experienced E-Commerce specialist with expertise in both
                Shopify and WordPress, specializing in building and customizing
                high-performance online stores. With a deep understanding of
                E-Commerce platforms, I excel in creating seamless shopping
                experiences, optimizing store functionality, and driving
                business growth.
              </p>
              <div className="flex-chip">
                <span className="chip">Shopify</span>
                <span className="chip">Wordpress</span>
                <span className="chip">SEO</span>
                <span className="chip">SMM</span>
                <span className="chip">Figma</span>
                <span className="chip">Canva</span>
                <span className="chip">Meta Ads</span>
              </div>
            </div>
          </motion.div>

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
                I am a Full Stack web developer with extensive experience in
                building web applications from scratch using MERN stack. I excel
                in integrating frontend and backend components seamlessly
                delivering scalable, efficient, and user-focused solutions with
                high performance and quality.
              </p>
              <div className="flex-chip">
                <span className="chip">React JS</span>
                <span className="chip">JavaScript</span>
                <span className="chip">Node JS</span>
                <span className="chip">MongoDB</span>
                <span className="chip">HTML</span>
                <span className="chip">CSS</span>
                <span className="chip">Vercel</span>
                <span className="chip">Git</span>
                <span className="chip">Postman</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
