import React from 'react';

const Testimonial = ({ id, title }) => {
  return (
    <div className="bg_light_blue" id={id}>
      <div className="pt-24">
        <div className="heading">
          <h4 className="main_heading">{title}</h4>
          <h2 className="sub_heading hidden sm:block">Testimonials</h2>
        </div>
      </div>

    <section className="py-16 bg-[#0a101e]">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-[#101624] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 align-content-center">
            {/* <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="John Doe"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            /> */}
            <p className="text-lg text-[#a9adb8] mb-4">
            Iqra is an exceptional project manager and a valued colleague. She keeps a proven track record of successfully leading cross-functional teams and driving projects to completion.
            Along with her extensive project management expertise, she is also a highly skilled frontend developer with a deep understanding of modern web development technologies. Her proficiency in React.js is particularly noteworthy.
            </p>
            <h3 className="font-semibold text-[#ffc107]">Amjad Sheikh</h3>
            <p className="text-sm text-[#fff]">Project Manager, Vision Valley</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-[#101624] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 align-content-center">
            {/* <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="Michael Johnson"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            /> */}
            <p className="text-lg text-[#a9adb8] mb-4">
            Iqra is an outstanding manager who keeps teams organized, motivated, and focused. Her leadership and problem-solving skills ensure smooth collaboration and successful project delivery. Highly recommend working with her!            </p>
            <h3 className="font-semibold text-[#ffc107]">Sohaib Safdar Malik</h3>
            <p className="text-sm text-[#fff]">Operations Manager, Cheezious</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-[#101624] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 align-content-center">
            {/* <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Jane Smith"
              className="w-20 h-20 rounded-full mx-auto mb-4"
            /> */}
            <p className="text-lg text-[#a9adb8] mb-4">
            Iqra has exceptional project management skills. Leading a team, she successfully delivered a large-scale enterprise project with outstanding efficiency and precision.
            Her ability to manage timelines, coordinate teams, and handle challenges with a solution-oriented mindset made a significant impact on the project's success. She is not only a strategic thinker but also an inspiring leader who knows how to bring out the best in her team.            </p>
            <h3 className="font-semibold text-[#ffc107]">Meenam Afzal</h3>
            <p className="text-sm text-[#fff]">CEO, Aglivo</p>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default Testimonial;
