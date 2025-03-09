import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { BorderBeam } from "./BorderBeam";
import { LiaLinkedinIn } from "react-icons/lia";
import { FaGithub, FaInstagram, FaLinkedin, FaSquareInstagram } from "react-icons/fa6";
import dp from "../img/dp.png";

const Home = ({ id, title }) => {
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    setIsAnimating(!isAnimating);
  };

  useEffect(() => {
    setIsAnimating(true);
  }, []);

  var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  };

  TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(function () {
      that.tick();
    }, delta);
  };

  window.onload = function () {
    var elements = document.getElementsByClassName("typewrite");
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute("data-type");
      var period = elements[i].getAttribute("data-period");
      if (toRotate) {
        new TxtType(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
  };

  const trackClick = async (platform) => {
    await fetch("/api/track-click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ platform, timestamp: new Date() }),
    });
  };
  

  return (
    <div id={id}>
      <div className="home_main ">
        <div className="home_img  block  md:hidden pt-36" onClick={handleClick}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="banner"
          >
          </motion.div>
        </div>

        <div className="px-4 md:px-8 lg:px-16 pt-10 pb-24 home_content justify-between y">
          <div className="content">
            <h4 className="text-2xl md:text-3xl lg:text-4xl py-1 ">
              Hello, I'm
            </h4>
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl ">
              Iqra
            </h1>
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl ">
              Sultan
            </h1>
            <h2
              className="my-2 text-2xl md:text-3xl lg:text-4xl typewrite  w-fit"
              data-period="2000"
              data-type='["React Js Developer", "Full Stack Developer", "Full Stack Developer"]'
            >
              Full Stack Developer
            </h2>

            <h1>
              <a href="" className="typewrite">
                <span className="wrap"></span>
              </a>
            </h1>

            <div className="pt-4 relative flex">
              {/* Apply Beam here for the animated border */}

              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.7 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                href="https://www.upwork.com/freelancers/~01a562478db5ce46df"
                className="btn btn_hire_me relative" // Set relative positioning for the button itself
                onClick={() => trackClick("LinkedIn")}
              >
                <BorderBeam
                  className="absolute inset-0" // Ensures the beam covers the card
                  size={200}
                  duration={15}
                  anchor={90}
                  borderWidth={2} // Adjust border width to fit your design
                  colorFrom="#ffaa40"
                  colorTo="#9c40ff"
                  delay={0.2} // 
                />
                Hire Me
              </motion.a>

              <div className=" flex">
                {/* LinkedIn Icon */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  className="relative mx-4"
                >
                  <motion.a
                    href="https://www.linkedin.com/in/iqrasultan58/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-3 rounded-full bg-blue-600 text-white flex justify-center items-center"
                    onClick={() => trackClick("LinkedIn")}
                  >
                    <FaLinkedin size={25} />
                    <BorderBeam
                      className="absolute inset-0"
                      size={180}
                      duration={15}
                      anchor={90}
                      borderWidth={2}
                      colorFrom="#00a0dc"
                      colorTo="#0077b5"
                      delay={0.2}
                    />
                  </motion.a>
                </motion.div>

                {/* Instagram Icon */}
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  className="relative"
                  onClick={() => trackClick("Instagram")}
                >
                  <motion.a
                    href="https://www.instagram.com/_iiqqrraa/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative p-3 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white flex justify-center items-center"
                  >
                    <FaInstagram size={25} />
                    <BorderBeam
                      className="absolute inset-0"
                      size={180}
                      duration={15}
                      anchor={90}
                      borderWidth={2}
                      colorFrom="#f56040"
                      colorTo="#9c40ff"
                      delay={0.2}
                    />
                  </motion.a>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  className="relative"
                  onClick={() => trackClick("Github")}
                >
                  <motion.a
                    href="https://www.github.com/iqrasultan58/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative mx-4 p-3 rounded-full bg-black text-white flex justify-center items-center"
                  >
                    <FaGithub size={25} />
                    <BorderBeam
                      className="absolute inset-0"
                      size={180}
                      duration={15}
                      anchor={90}
                      borderWidth={2}
                      colorFrom="white"
                      colorTo="black"
                      delay={0.2}
                    />
                  </motion.a>
                </motion.div>
              </div>
            </div>


          </div>

          <div className="home_img hidden md:block" onClick={handleClick}>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="banner">
             <img src={dp} alt="ats" className="w-[100%] h-[100%]" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
