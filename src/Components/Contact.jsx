import React, { useState } from "react";
const Contact = ({ id, title }) => {
  const [result, setResult] = useState("");
  // console.log("7c545dad-c414-4ecf-8df6-3c9654607cfd")
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7286f775-49aa-4814-b946-a7d8e44ed5a8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      event.target.reset();

      setTimeout(() => {
        setResult("")
      }, 2000);
    } else {
      console.log("Error", data);
      setResult(data.message);
    }

  };


  return (
    <div className="bg_dark_blue" id={id}>
      <div className="pt-24">
        <div className="heading">
          <h4 className="main_heading">{title}</h4>
          <h2 className="sub_heading hidden sm:block">CONTACT</h2>
        </div>
      </div>

      <div className="flex flex-wrap items-center text-white px-4  md:px-8 lg:px-16 xl:px-0 xl:w-[1220px] xl:mx-auto pt-4 pb-24 content ">
        <div className="left_content">
          <h1 className="">Send me a message 🚀</h1>

          <form className="flex flex-col" onSubmit={onSubmit}>
            <input type="text" name="name" className="input" required placeholder="Your Name" />

            <input type="email" name="email" className="input" required placeholder="Your Email" />

            <textarea
              placeholder="Your Message"
              id=""
              cols="30"
              rows="5"
              name="message"
              required
              className="input "
            ></textarea>

            <div className="flex justify-center sm:block">
              <button type="submit" class="btn btn_hire_me">Send Message</button>
            </div>
          </form>
          <p className="p-2">{result}</p>
        </div>

        <div className="right_content">
          <h1>Tell me about your project.</h1>
          {/* <h1 className="pb-[22px]">Tell me about your project.</h1> */}
          <p className="mb-[22px]">Let's create something together 🤘</p>

          <div className="flex flex-wrap mb-[22px]">
            <div className="single_icon mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </div>

            <div className="min-w-0">
              <b>Email</b>
              <p className="break-words break-all text-sm sm:text-base">
                iqrasultan58@gmail.com
              </p>
            </div>
          </div>


          <div className="flex mb-[22px]">
            <div className="single_icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </div>

            <div>
              <b>Address</b>
              <p>Lahore, Pakistan</p>
            </div>
          </div>

          <div className="w-full">
            <p className="mb-[22px] text-[20px] font-normal break-words text-left">
              Visit my social profile and get connected
            </p>
          </div>


          <div className="flex">
            <a
              href="https://www.linkedin.com/in/iqrasultan"
              className="social"
            >
              <i class="fa-brands fa-linkedin"></i>
              <span>Linkedin</span>
            </a>

            <a
              href="https://github.com/iqrasultan58"
              className="social"
            >
              <i class="fa-brands fa-github"></i>

              <span>Github</span>
            </a>

            <a
              href="https://join.skype.com/invite/xOOu7mFf9jbf"
              className="social"
            >
              <i class="fa-brands fa-skype"></i>

              <span>Skype</span>
            </a>

            <a href="mailto:iqrasultan58@gmail.com" className="social">
              <i class="fa-regular fa-envelope"></i>

              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
