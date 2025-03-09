import { FaGithub, FaInstagram, FaLinkedin, FaSnapchat, FaYoutube } from "react-icons/fa";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { SiFiverr } from "react-icons/si";
import { TbBrandFiverr } from "react-icons/tb";
import ReactGA from "react-ga4";
import { FaUpwork } from "react-icons/fa6";

const Footer = () => {
  // Create separate states for each icon's position
  const [linkedinPosition, setLinkedinPosition] = useState({ x: 0, y: 0 });
  const [youtubePosition, setYoutubePosition] = useState({ x: 0, y: 0 });
  const [snapchatPosition, setSnapchatPosition] = useState({ x: 0, y: 0 });
  const [instagramPosition, setInstagramPosition] = useState({ x: 0, y: 0 });
  const [upworkPosition, setUpworkPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e, setPosition) => {
    const { clientX, clientY } = e;
    const ref = e.currentTarget;
    const { height, width, left, top } = ref.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const resetPosition = (setPosition) => {
    setPosition({ x: 0, y: 0 });
  };

  // Animation properties for scaling and rotation
  const animationProps = {
    scale: 1.2,  // Scale up to 120%
    rotate: 10,  // Rotate by 10 degrees
  };

  const trackClick = async (platform) => {
    await fetch("/api/track-click", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ platform, timestamp: new Date() }),
    });
  };
  

  return (
    <div className='relative h-[300px] ' style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}>
      <footer className="bg_light_blue text-white py-12 text-center fixed bottom-0 h-[300px] w-full px-2">
        <div className="flex justify-center items-center mb-6">
          <span className="text-3xl sm:text-4xl font-bold">
            Iqra <span className="text-[#F6BA08]">Sultan</span>
          </span>
        </div>

        <div className="flex justify-center space-x-8 mb-4">
          <a  onClick={() => trackClick("LinkedIn")} href="https://www.linkedin.com/in/iqrasultan/" target="_blank" rel="noopener noreferrer" >
            <motion.div
              style={{ position: "relative" }}
              onMouseMove={(e) => handleMouse(e, setLinkedinPosition)}
              onMouseLeave={() => resetPosition(setLinkedinPosition)}
              animate={{ ...linkedinPosition, scale: 1, rotate: 0 }} // Reset scale and rotation
              whileHover={{ scale: animationProps.scale, rotate: animationProps.rotate }} // Scale and rotate on hover
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1,
              }}
            >
              <FaLinkedin className="text-white text-4xl sm:text-5xl" />
            </motion.div>
          </a>

          {/* <a onClick={() => trackClick("Fiverr")} href="" target="_blank" rel="noopener noreferrer">
            <motion.div
              style={{ position: "relative" }}
              onMouseMove={(e) => handleMouse(e, setYoutubePosition)}
              onMouseLeave={() => resetPosition(setYoutubePosition)}
              animate={{ ...youtubePosition, scale: 1, rotate: 0 }} // Reset scale and rotation
              whileHover={{ scale: animationProps.scale, rotate: animationProps.rotate }} // Scale and rotate on hover
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1,
              }}
            >
              <TbBrandFiverr className="text-white text-4xl sm:text-5xl" />
            </motion.div>
          </a> */}

          <a  onClick={() => trackClick("GitHub")} href="https://github.com/iqrasultan58" target="_blank" rel="noopener noreferrer">
            <motion.div
              style={{ position: "relative" }}
              onMouseMove={(e) => handleMouse(e, setSnapchatPosition)}
              onMouseLeave={() => resetPosition(setSnapchatPosition)}
              animate={{ ...snapchatPosition, scale: 1, rotate: 0 }} // Reset scale and rotation
              whileHover={{ scale: animationProps.scale, rotate: animationProps.rotate }} // Scale and rotate on hover
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1,
              }}
            >
              <FaGithub className="text-white text-4xl sm:text-5xl" />
            </motion.div>
          </a>

          <a onClick={() => trackClick("Instagram")} href="https://www.instagram.com/_iiqqrraa/" target="_blank" rel="noopener noreferrer">
            <motion.div
              style={{ position: "relative" }}
              onMouseMove={(e) => handleMouse(e, setInstagramPosition)}
              onMouseLeave={() => resetPosition(setInstagramPosition)}
              animate={{ ...instagramPosition, scale: 1, rotate: 0 }} // Reset scale and rotation
              whileHover={{ scale: animationProps.scale, rotate: animationProps.rotate }} // Scale and rotate on hover
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1,
              }}
            >
              <FaInstagram className="text-white text-4xl sm:text-5xl" />
            </motion.div>
          </a>

          <a onClick={() => trackClick("Upwork")} href="https://www.upwork.com/freelancers/~01a562478db5ce46df" target="_blank" rel="noopener noreferrer">
            <motion.div
              style={{ position: "relative" }}
              onMouseMove={(e) => handleMouse(e, setUpworkPosition)}
              onMouseLeave={() => resetPosition(setUpworkPosition)}
              animate={{ ...upworkPosition, scale: 1, rotate: 0 }} // Reset scale and rotation
              whileHover={{ scale: animationProps.scale, rotate: animationProps.rotate }} // Scale and rotate on hover
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 15,
                mass: 0.1,
              }}
            >
              <FaUpwork className="text-white text-4xl sm:text-5xl" />
            </motion.div>
          </a>
        </div>
        
        <div className="mb-2">
          <a href="mailto:hiqrasultan58@gmail.com">iqrasultan58@gmail.com</a>
        </div>

        <div className="mb-2">
          © 2025 Iqra Sultan. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
