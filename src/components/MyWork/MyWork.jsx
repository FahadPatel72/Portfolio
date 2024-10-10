import React from "react";
import "../MyWork/MyWork.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import { motion } from "framer-motion";
import fp_3 from "../../assets/fp_3.png";
import fp_1 from "../../assets/fp_1.png";
import fp_2 from "../../assets/fp_2.png";

const MyWork = () => {
  return (
    <div>
      <div id="work" className="mywork">
        <div className="mywork-title">
          <h1>My Latest work</h1>
          <img src={theme_pattern} alt="" />
        </div>
        <div className="mywork-container">
          

<div class="container">
  
  <a className="nav-link" href="https://fashiononlinestore72.netlify.app/" target="_blank"
                rel="noreferrer">
  <div className="project-card-sm">
        <div className="card-border-gradient"></div>
        <div className="card-container">
          <img 
            src={fp_1}
            alt="Project Thumbnail" 
          />
          <div className="wrapper">
            <h1>Online Fashion Store</h1>
            <p>
            This project involved building a user-friendly e-commerce website for fashion products. Using React.js for the front end and Redux for efficient state management, the site offers several key features: Tech Stack: React.js, Redux Toolkit, Javascript,
                responsive design.
            </p>
            
          </div>
        </div>
      </div>
  </a>

  <a className="nav-link" href="https://github.com/FahadPatel72/BlogsWebsite" target="_blank"
                rel="noreferrer">
  <div className="project-card-sm">
        <div className="card-border-gradient"></div>
        <div className="card-container">
          <img 
            src={fp_2}
            alt="Project Thumbnail" 
          />
          <div className="wrapper">
            <h1>Blogs Website</h1>
            <p>
            I’ve created a blogs website where you can explore 5 different blogs all on one page. You can easily filter the blogs by clicking on any tag you're interested in, and it will show only the blogs related to that topic. There's also a handy 'related blogs' button that lets you discover similar content with just one click. The website is designed to make it super easy and fun to explore different blogs.
            Tech Stack: React.js, AppContext
            </p>
            
          </div>
        </div>
      </div>
  </a>


  <a className="nav-link" href="https://clothify-commerce.netlify.app/" target="_blank"
                rel="noreferrer">
  <div className="project-card-sm">
        <div className="card-border-gradient"></div>
        <div className="card-container">
          <img 
            src={fp_3}
            alt="Project Thumbnail" 
          />
          <div className="wrapper">
            <h1>Top Courses</h1>
            <p>
             A course platform, built with React, makes it easy for users to find the right courses by letting them filter based on specific topics. Users can simply choose a topic, and the platform will show only the courses that match their interest. This helps users quickly find what they’re looking for without having to scroll through everything. It’s designed to be simple and intuitive, making the learning experience smoother and more personalized.
            </p>
            
          </div>
        </div>
      </div>
  </a>

  


</div>


          {/* <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ delay: 0.1 }}
            class="project-section"
          >
            <div class="project-card">
              <img class="bg" src={p5} alt="" />
              <h2>Expense Tracker Website</h2>
              <p>
              The Expense Tracker is a web application built using ASP.NET Core MVC, HTML, CSS, and SQL Server to help users manage their finances efficiently. It features a dashboard displaying total income, total expenses, balance amount, and recent transactions, with interactive charts for data visualization. Users can add, edit, and delete categories for tracking income and expenses, and manage transactions by creating, updating, or removing them. The app supports up to 20 categories and 500 transactions, offering a responsive and intuitive user experience.
              </p>
              <a
                href=""
                rel="noreferrer"
              >
                VIEW PROJECT
              </a>
            </div>
          </motion.div> */}


          {/* <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ delay: 0.1 }}
            class="project-section"
          >
            <div class="project-card">
              <img class="bg" src={p1} alt="" />
              <h2>Clothify | fashion e-commerce</h2>
              <p>
                Clothify is a responsive e-commerce website for fashion clothes,
                built using the MERN stack. Features include secure user
                authentication, a shopping cart, detailed product listings,
                customer reviews, and sections for men, women, and kids. Explore
                popular items and stay updated with new collections. Check out
                Clothify and share your feedback!
              </p>
              <a
                href="https://clothify-commerce.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                VIEW PROJECT
              </a>
            </div>
          </motion.div> */}


          {/* <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ delay: 0.15 }}
            class="project-section"
          >
            <div class="project-card">
              <img class="bg" src={p2} alt="" />
              <h2>Mobile-Dekho | Mobile Store</h2>
              <p>
                📱Explore our online mobile shop with a range of top-brand
                phones, TVs, laptops, audio devices, and more. 🖥️ Built with
                HTML, CSS, JavaScript, and React.js for a seamless experience.
                Our responsive design ensures easy access on all devices. 🛒
                Check out Mobile-Dekho and find your next electronic companion
                today!
              </p>
              <a
                href="https://mobile-dekho.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                VIEW PROJECT
              </a>
            </div>
          </motion.div> */}

          {/* <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            transition={{ delay: 0.2 }}
            class="project-section"
          >
            <div class="project-card">
              <img class="bg" src={p3} alt="" />
              <h2>Cinemo 🎬 | movies IMDb ratings </h2>
              <p>
                I'm excited to introduce my React project: Cinemo 🎬 | An online
                movies IMDb ratings web app that I developed using ReactJS and
                the TMDB API (MovieDB API). This app provides an easy and
                efficient way to dive in and discover the IMDb ratings of your
                favorite movies, all in one place! 🌟
              </p>
              <a
                href="https://cinemomovies.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                VIEW PROJECT
              </a>
            </div>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
};

export default MyWork;
