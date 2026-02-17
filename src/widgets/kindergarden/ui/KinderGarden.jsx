import React from "react";
import kinder1 from "../images/kinder1.png";
import kinder2 from "../images/kinder2.png";
import "../kinderGarden.scss";

export const KinderGarden = () => {
  const kinderData = {
    subtitle: "Детский сад",
    title: "Дошкольное образовательное учреждение",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",

    leftBlock: {
      image: kinder1,
      title: "Lorem ipsum dolor sit.",
      description:
        "Детский сад предоставляет качественное дошкольное образование для детей 3-7 лет.",
    },

    rightBlock: {
      image: kinder2,
      title: "Lorem ipsum dolor sit.",
      description:
        "Детский сад предоставляет качественное дошкольное образование для детей 3-7 лет.",
    },
  };

  return (
    <section className="kinder" id="kinderGarden">
      <div className="container">

        <h2 className="subtitle">{kinderData.subtitle}</h2>
        <h3 className="title">{kinderData.title}</h3>
        <p className="text">{kinderData.text}</p>

        <div className="kinder__content">

          <div className="kinder__col-6">
            <div className="kinder__content-left">
              <img src={kinderData.leftBlock.image} alt="Kinder left" />
              <div>
                <h3 className="info-title">
                  {kinderData.leftBlock.title}
                </h3>
                <p className="info-description">
                  {kinderData.leftBlock.description}
                </p>
              </div>
            </div>
          </div>

          <div className="kinder__block">
            <div className="kinder__block-line"></div>
            <div className="kinder__block-square"></div>
            <div className="kinder__block-square"></div>
          </div>

          <div className="kinder__col-6">
            <div className="kinder__content-right">
              <img src={kinderData.rightBlock.image} alt="Kinder right" />
              <div>
                <h3 className="info-title">
                  {kinderData.rightBlock.title}
                </h3>
                <p className="info-description">
                  {kinderData.rightBlock.description}
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
