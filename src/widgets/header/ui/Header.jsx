import React from "react";
import logo from "@/shared/assets/headerLogo.png";
import glass from "@/shared/assets/glass.png";
import language from "@/shared/assets/language.png";
import "../header.scss";

export function Header() {
  return (
    <header className="header">
      <div className="container header__container">
        <img src={logo} alt="Logo" />
        <nav className="header__nav">
        <a href="#about">О нас</a>
        <a href="#college">Колледж</a>
        <a href="#school">Школа</a>
        <a href="#kinderGarden">Детский сад</a>
        <a href="#awards">Награды</a>
      </nav>
      <div className="header__buttons">
        <button className="header__buttons-btn" type="button">
          <img src={glass} alt="Glass" />
        </button>
        <button className="header__buttons-btn" type="button">
          <img src={language} alt="Language" />
        </button>
      </div>
      </div>
    </header>
  );
}
