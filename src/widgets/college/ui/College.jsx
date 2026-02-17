import React from "react";
import collegeImage from "../images/college.png";
import "../college.scss";

export const College = () => {
  const collegeData = {
    subtitle: "Колледж",
    title: "О Колледже Дулдул-Тоо",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",

    image: collegeImage,

    infoLeft: {
      title: "Lorem ipsum dolor sit.",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },

    infoRight: {
      title: "Lorem ipsum dolor sit.",
      description:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    },

  };

  return (
    <section className="college" id="college">
      <div className="container">

        <h2 className="subtitle">{collegeData.subtitle}</h2>
        <h3 className="title">{collegeData.title}</h3>
        <p className="text">{collegeData.text}</p>

        <img src={collegeData.image} alt="College" />

        <div className="college__content">
          <div className="college__info">

            <div className="col-6">
              <div className="college__info-left">
                <h3 className="info-title">
                  {collegeData.infoLeft.title}
                </h3>
                <p className="info-description">
                  {collegeData.infoLeft.description}
                </p>
              </div>
            </div>

            <div className="col-6">
              <div className="college__info-right">
                <h3 className="info-title">
                  {collegeData.infoRight.title}
                </h3>
                <p className="info-description">
                  {collegeData.infoRight.description}
                </p>
              </div>
            </div>

          </div>
        </div>

        <button className="college__btn">
          <a href="#">Посетить сайт</a>
        </button>

      </div>
    </section>
  );
};
