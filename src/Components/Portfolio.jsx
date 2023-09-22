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
    title: "The wait is over, Postman & VS Code 🎉",
    description:
      "With the Postman extension in Visual Studio Code, developers can test and collaborate efficiently, helping them streamline workflow when working with APIs and web services.",
    url: "https://vicenteguzman.com/postman/2023-07-25-postman-and-vscode/",
  },
  {
    title: "GitHub 101 for Beginners",
    description:
      "Mini basic course to learn how to use GitHub.",
    url: "https://github.com/LucioMSP/GitHub-101",
  },
  {
    title: "My WebSite",
    description:
      "A quicker, cleaner way to get started blogging with Hydejack and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://vicenteguzman.com/",
  },
  {
    title: "Alexa Ninja",
    description:
      "Alexa Ninja is a technological information channel where we talk about development, specifically how to generate Skills for Amazon Alexa.",
    url: "https://www.youtube.com/channel/UCM9wdzw_LU7_rZvyMo0s2LA",
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
