import React, { useState } from "react";
import awardsImage from "../images/image.png";
import arrowLeft from "../images/Arrow left.svg";
import arrowRight from "../images/Arrow right.svg";
import "../awards.scss";

const AWARDS_DATA = [
  {
    firstText: "Награда за достижения 2020",
    title: "Лучшая академия года",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    documentLink: "#",
    image: awardsImage,
  },
  {
    firstText: "Сертификат качества 2021",
    title: "Сертификация образовательных программ",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.",
    documentLink: "#",
    image: awardsImage,
  },
  {
    firstText: "Премия в области образования 2022",
    title: "Инновации в обучении",
    text: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    documentLink: "#",
    image: awardsImage,
  },
  {
    firstText: "Партнёрство и сотрудничество 2023",
    title: "Награда за вклад в развитие отрасли",
    text: "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum.",
    documentLink: "#",
    image: awardsImage,
  },
];

export const Awards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const award = AWARDS_DATA[currentIndex];
  const total = AWARDS_DATA.length;
  const currentNum = String(currentIndex + 1).padStart(2, "0");
  const totalStr = String(total).padStart(2, "0");

  const goNext = () => {
    setCurrentIndex((i) => (i + 1) % total);
  };

  const goPrev = () => {
    setCurrentIndex((i) => (i - 1 + total) % total);
  };

  return (
    <section className="awards" id="awards">
      <div className="container">
        <h3 className="awards__subtitle">Наши награды</h3>
        <h2 className="awards__title">История академии и планы на будущее</h2>
        <p className="awards__text">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book
        </p>
        <div className="awards__list">
          <div className="awards__content">
            <div className="awards__content-first">
              <span></span>
              <p className="awards__content-first-text">{award.firstText}</p>
            </div>
            <div className="row">
              <div className="col-6">
                <img
                  className="awards__content-second-image"
                  src={award.image}
                  alt={award.title}
                />
              </div>
              <div className="col-6">
                <div className="awards__content-second">
                  <h3 className="awards__content-second-title">
                    {award.title}
                  </h3>
                  <p className="awards__content-second-text">{award.text}</p>
                  <a
                    href={award.documentLink}
                    className="awards__content-second-link"
                  >
                    Посмотреть документ
                  </a>

                  <div className="awards__content-second-buttons">
                    <button
                      type="button"
                      className="awards__content-second-buttons-btn"
                      onClick={goPrev}
                      disabled={currentIndex === 0}
                      aria-label="Предыдущая награда"
                    >
                      <img src={arrowRight} alt="Arrow Right" />
                    </button>
                    <button
                      type="button"
                      className="awards__content-second-buttons-btn"
                      onClick={goNext}
                      disabled={currentIndex === total - 1}
                      aria-label="Следующая награда"
                    >
                      <img src={arrowLeft} alt="Arrow Left" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="awards__content-third">
              <h3 className="awards__content-third-title">
                {currentNum}/<span>{totalStr}</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
