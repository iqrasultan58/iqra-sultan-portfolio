import React, { useState } from "react";
import logo from '../img/logo.jfif';
import {
  Drawer,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { Link } from "react-scroll";

const Header = () => {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const [activeSection, setActiveSection] = useState("");

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    setOpen(false)
  };

  return (
    <>
      <div className="fixed bg-[#070E1B] top-0 w-full shadow-md z-50">
        <div className="header flex justify-between items-center px-4 md:px-8 lg:px-16  h-16 sm:h-20 xl:px-0 xl:max-w-[1220px] mx-auto">
          <Link
            className="text-sm lg:text-2xl font-bold"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => handleNavClick("home")}
          >
          <a href="https://iqrasultan.me" class="link"
          >IS.</a
          >
          </Link>

          <div>
            <ul className="hidden md:flex">
              <li className="uppercase px-4 cursor-pointer">
                <Link
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => handleNavClick("home")}
                >
                  Home
                </Link>
              </li>
              <li className="uppercase px-4 cursor-pointer">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => handleNavClick("about")}
                >
                  About
                </Link>
              </li>
              <li className="uppercase px-4 cursor-pointer">
                <Link
                  activeClass="active"
                  to="resume"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => handleNavClick("resume")}
                >
                  Resume
                </Link>
              </li>
              {/* <li className="uppercase px-4 cursor-pointer">
                <Link
                  activeClass="active"
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => handleNavClick("portfolio")}
                >
                  Portfolio
                </Link>
              </li> */}
              <li className="uppercase px-4 cursor-pointer">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={() => handleNavClick("contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="  block md:hidden font-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
                onClick={openDrawer}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      <Drawer open={open} onClose={closeDrawer} className=" z-50 sidebar">
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            Iqra Sultan
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List>
          <ListItem>
            <Link
              className="side_btn"
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => handleNavClick("home")}
            >
              <span>
                <i class="fa-solid fa-house"></i>
              </span>
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Link
              className="side_btn"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => handleNavClick("about")}
            >
              <span>
                <i class="fa-solid fa-address-card"></i>
              </span>
              About
            </Link>
          </ListItem>
          <ListItem>
            <Link
              className="side_btn"
              activeClass="active"
              to="resume"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => handleNavClick("resume")}
            >
              <span>
                <i class="fa-solid fa-file"></i>
              </span>
              Resume
            </Link>
          </ListItem>
          {/* <ListItem>
            <Link
              className="side_btn"
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => handleNavClick("portfolio")}
            >
              <span>
                <i class="fa-solid fa-laptop"></i>
              </span>
              portfolio
            </Link>
          </ListItem> */}
          <ListItem>
            <Link
              className="side_btn"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => handleNavClick("contact")}
            >
              <span>
                <i class="fa-solid fa-address-book"></i>
              </span>
              Contact
            </Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default Header;
