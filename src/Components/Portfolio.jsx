/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Newzify-A News Web App",
    description:
      "This React.js and Vite-based News Web App is a dynamic tool designed to keep you updated with the latest news in real-time. By fetching and displaying news articles from a reliable API, this project provides a modern, responsive interface for browsing news efficiently.",
    url: "https://news-web-app-eqo2.onrender.com/",
  },
  {
    title: "Website Developed For SDG",
    description:
      "Biofuel promotes environmental sustainability by converting plastics into biofuel. Developed with Vite React, Node.js, and MongoDB, it offers a user-friendly platform hosted on Render.",
    url: "https://sdg-wk1t.onrender.com/",
  },
  {
    title: "College Management System",
    description:
      "The College Management System is a Java-based web application designed to streamline administrative and academic operations in colleges. It supports CRUD operations, enabling administrators, faculty, and students to manage details, view examination schedules, pay fees, and apply for leave through an intuitive and user-friendly interface.",
    url: "https://github.com/yadavmangesh07/Advance-Java-Project",
  },
  {
    title: "TextiFy-A Text Utility Tool",
    description:
      "Welcome to our Text Utility Web App! Simplify text manipulation tasks with ease. Count words, remove spaces, convert text case, and more with a user-friendly interface. Ideal for writers, students, and professionals.",
    url: "https://text-utility-web-app.onrender.com/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
