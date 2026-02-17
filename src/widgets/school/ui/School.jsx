import React from "react";
import school1 from "../images/school1.png";
import school2 from "../images/school2.png";
import "../school.scss";

export const School = () => {
  const schoolData = {
    subtitle: "Школа",
    title: "Школе",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",

    images: [school1, school2],

    info: [
      {
        id: 1,
        title: "Lorem Ipsum has been",
        description:
          "The industry's standard dummy text ever since the 1500s...",
      },
      {
        id: 2,
        title: "Lorem Ipsum has been",
        description:
          "The industry's standard dummy text ever since the 1500s...",
      },
      {
        id: 3,
        title: "Lorem Ipsum has been",
        description:
          "The industry's standard dummy text ever since the 1500s...",
      },
      {
        id: 4,
        title: "Lorem Ipsum has been",
        description:
          "The industry's standard dummy text ever since the 1500s...",
      },
    ],

    buttonText: "Посетить сайт",
  };

  return (
    <section className="school" id="school">
      <div className="container">
        <h2 className="subtitle">{schoolData.subtitle}</h2>
        <h3 className="title">{schoolData.title}</h3>
        <p className="text">{schoolData.text}</p>

        <div className="school__content">
          <div className="col-6">
            <div className="school__img">
              {schoolData.images.map((img, index) => (
                <img src={img} alt={`School ${index + 1}`} key={index} />
              ))}
            </div>
          </div>

          <div className="col-6">
            <div className="school__info">
              <div className="school__info-line"></div>

              {schoolData.info.map((item) => (
                <div className="school__info-block" key={item.id}>
                  <div className="school__info-square"></div>
                  <div>
                    <h3 className="info-title">{item.title}</h3>
                    <p className="info-description">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}

              <button className="school__info-btn">
                <a href="#">Посетить сайт</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
