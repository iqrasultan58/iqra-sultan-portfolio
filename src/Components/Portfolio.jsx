import React from "react";
import cheezious from "../img/projects/cheezious.png";
import telbee from "../img/projects/telbee.png";
import kitchenconnection from "../img/projects/kitchenconnection.png";
import yahuda from "../img/projects/yahuda.png";
import gamesmith from "../img/projects/gamesmith.png";
import codeFactory from "../img/projects/codeFactory.png";

const Portfolio = ({ id, title }) => {
  return (
    <div className="bg_light_blue" id={id}>
      <div className="pt-24">
        <div className="heading">
          <h4 className="main_heading">{title}</h4>
          <h2 className="sub_heading hidden sm:block">PORTFOLIO</h2>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-[#101624] border-2px rounded-lg shadow-md overflow-hidden">
            <a href="#" className="group relative block overflow-hidden">
            <img src={cheezious} alt="cheezious" className="w-full object-cover transition-transform duration-300 group-hover:scale-105"/>
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300" />
            </a>
            <div className="p-4 text-[#a9adb8]">
              <h3 className="text-[#fff] text-xl font-semibold">Cheezious</h3>
              <p>Cheezious is a comprehensive solution 
                designed to streamline and manage all aspects of a food delivery and restaurant 
                management system. It integrates three main components: the Rider App, Admin Dashboard, and 
                Customer App. Each component addresses distinct needs and challenges within the fast
                food delivery ecosystem, from managing delivery operations and rider interactions to 
                enhancing customer engagement.</p>
            </div>
          </div>

          <div className="bg-[#101624] border-2px rounded-lg shadow-md overflow-hidden">
            <a href="#" className="group relative block overflow-hidden">
              <img
                src={codeFactory}
                alt="CodeFactory" 
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300" />
            </a>
            <div className="p-4 text-[#a9adb8]">
              <h3 className="text-[#fff] text-xl font-semibold">Code Factory</h3>
              <p>Code Factory is a React-based company portfolio project built to professionally
                showcase digital agency services. It highlights core offerings, completed projects,
                and client testimonials through a clean, responsive design. The platform includes a
                dynamic contact form for inquiries and emphasizes user-friendly navigation, aiming
                to leave a strong impression on potential clients and partners.</p>
            </div>
          </div>

          <div className="bg-[#101624] border-2px rounded-lg shadow-md overflow-hidden">
            <a href="#" className="group relative block overflow-hidden">
              <img
                src={yahuda}
                alt="yahuda" 
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300" />
            </a>
            <div className="p-4">
              <h3 className="text-xl text-[#fff] font-semibold">Yahuda</h3>
              <p className="text-[#a9adb8]">Yahuda is a real estate platform that connects tenants,
                agents, and property owners. It offers live chat, property verification, payment features,
                and role-based access for agents, owners, and super admins. Tenants can browse,
                make offers, and schedule appointments. The project uses Twilio, Stripe, and AWS for
                efficient communication and storage.</p>
            </div>
          </div>

          <div className="bg-[#101624] border-2px rounded-lg shadow-md overflow-hidden">
            <a href="#" className="group relative block overflow-hidden">
              <img
                src={kitchenconnection}
                alt="Kitchenconnection" 
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300" />
            </a>
            <div className="p-4">
              <h3 className="text-[#fff] text-xl font-semibold">Kitchen Connection</h3>
              <p className="text-[#a9adb8]">​KitchenConnection.org is a dynamic online platform dedicated to uniting individuals
                worldwide through the universal language of food. It offers interactive cooking
                classes, educational resources, and community events aimed at promoting sustainable
                food systems and cultural understanding. Users can engage with chefs, farmers, and
                food enthusiasts to learn about diverse cuisines and contribute to global initiatives
                addressing hunger and environmental sustainability.</p>
            </div>
          </div>

          <div className="bg-[#101624] border-2px rounded-lg shadow-md overflow-hidden">
            <a href="#" className="group relative block overflow-hidden">
              <img
                src={telbee}
                alt="Kitchenconnection" 
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300" />
            </a>
            <div className="p-4">
              <h3 className=" text-[#fff] text-xl font-semibold">Telbee</h3>
              <p className="text-[#a9adb8]">Telbee is an innovative voice messaging platform that helps businesses build
                deeper, more personal connections with their customers. It enables users to send
                and receive voice messages directly through websites, email, or social media,
                making communication faster and more human. Designed to boost engagement, save time,
                and increase conversions, Telbee bridges the gap between automation and real
                conversations by giving customers a voice.</p>
            </div>
          </div>

          <div className="bg-[#101624] border-2px rounded-lg shadow-md overflow-hidden">
            <a href="#" className="group relative block overflow-hidden">
              <img
                src={gamesmith}
                alt="gamesmith" 
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300" />
            </a>
            <div className="p-4">
              <h3 className="text-[#fff] text-xl font-semibold">Gamesmith</h3>
              <p className="text-[#a9adb8]">Gamesmith is an online platform designed for game developers,
                offering tools to collaborate, create, and showcase their projects. It includes features
                for project management, team communication, version control, and asset sharing. With an
                intuitive interface and robust integration options, Gamesmith aims to streamline the game
                development process, promoting creativity and efficiency.</p>
            </div>
          </div>
      </div>
    </div>
  </div>
  );
};

export default Portfolio;
