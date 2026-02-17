import React from "react";
import about1 from "@/shared/assets/about1.png";
import "../about.scss";

export const About = () => {
  const aboutData = {
    title: "Об основателе и достижениях Академии",
    subtitle: "О нас",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    info: {
      title: "Lorem Ipsum has been",
      description: "Lorem ipsum dolor sit."
    },

    paragraphs: [
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a type specimen book.",
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
    ]
  };

  return (
    <section className="about" id="about">
      <div className="container">

        <h2 className="subtitle">{aboutData.subtitle}</h2>
        <h3 className="title">{aboutData.title}</h3>
        <p className="text">{aboutData.text}</p>

        <div className="about__content">

          <div className="col-6">
            <img src={about1} alt="About academy" />
          </div>

          <div className="col-6">
            <div className="about__info">

              <div>
                <h3 className="info-title">
                  {aboutData.info.title}
                </h3>
                <p className="info-description">
                  {aboutData.info.description}
                </p>
              </div>

              <div className="about__content-text">
                {aboutData.paragraphs.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
