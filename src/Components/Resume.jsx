import React from "react";

const Resume = ({ id, title }) => {
  return (
    <div className="bg_dark_blue" id={id}>
      <div className="">
        <div className="heading">
          <h4 className="main_heading">{title}</h4>
          <h2 className="sub_heading hidden sm:block">RESUME</h2>
        </div>
      </div>

      <div className="px-4  md:px-8 lg:px-16 xl:px-0 xl:w-[1220px] xl:mx-auto pt-10 pb-24 sm:flex  resume">
        <div className="sm:w-[50%]">
          <div className="flex items-center heading">
            <i class="fa-solid fa-graduation-cap"></i>
            <h1 className="text-white ">Education</h1>
          </div>

          <div className="side">
          <div className="degree " data-aos="fade-up">
              <h2>MS Software Project Management</h2>
              <h3>2022-2024</h3>
              <b>National University of Computer and Emerging Sciences</b>
            </div>

            <div className="degree " data-aos="fade-up">
              <h2>BS Computer Science</h2>
              <h3>2015-2019</h3>
              <b>University of Central Punjab</b>
            </div>
          </div>
        </div>

        <div className="sm:w-[50%] sm:mt-0 mt-12">
          <div className="flex items-center heading ">
            <i class="fa-solid fa-briefcase"></i>
            <h1 className="text-white ">Experience</h1>
          </div>

          <div className="side">
            <div className="degree " data-aos="fade-up">
              <h2>Technical Lead</h2>
              <h3>Feburary 2023 - Present</h3>
              <b>Frizhub</b>
              <p>
              As a Tech Lead, I led a cross-functional team of 15, driving Agile delivery through Scrum ceremonies and efficient backlog management using Jira and Confluence. I translated business requirements into technical tasks, managed timelines, and ensured smooth execution by resolving blockers. My strategic leadership and clear communication ensured seamless collaboration and stakeholder alignment for successful project delivery.
              </p>
            </div>

            <div className="degree " data-aos="fade-up">
              <h2>Software Engineer</h2>
              <h3>November 2021 - March 2023</h3>
              <b>Synavos</b>
              <p>
              Worked as a Frontend Developer using JavaScript, React JS, Redux, Next JS, JEST, Bootstrap, and SCSS, delivering end-to-end solutions from design to deployment. Collaborated with UI/UX designers and backend teams to build responsive, high-performance web applications, ensuring seamless integration and optimal user experience. Mentored junior engineers, conducted PR reviews, and utilized Bitbucket for version control and team collaboration.
              </p>
            </div>

            <div className="degree1" data-aos="fade-up">
              <h2>Software Engineer</h2>
              <h3>October 2019 - October 2021</h3>
              <b>Engin Technologies</b>
              <p>
              Worked as a Full Stack Developer, collaborating with development and QA teams to deliver robust,
              scalable solutions across all phases of the SDLC. Designed scalable data models using JavaScript,
              ReactJS, Redux, Ruby on Rails, and PostgreSQL, while enhancing functionality with complex
              algorithms in Scala. Provided continuous support throughout planning, development, and testing
              to ensure seamless project execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
