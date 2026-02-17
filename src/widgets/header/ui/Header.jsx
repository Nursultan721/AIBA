import React, { useState, useRef, useEffect } from "react";
import logo from "@/shared/assets/headerLogo.png";
import glass from "@/shared/assets/glass.png";
import language from "../images/Vector.png";
import "../header.scss";

const LANGUAGES = [
  { code: "ru", label: "рус" },
  { code: "ky", label: "кырг" },
  { code: "en", label: "англ" },
];

export function Header() {
  const [currentLang, setCurrentLang] = useState(LANGUAGES[0]);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setIsLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          <div className="header__lang" ref={langRef}>
            <button
              className="header__buttons-btn header__lang-trigger"
              type="button"
              onClick={() => setIsLangOpen((v) => !v)}
              aria-expanded={isLangOpen}
              aria-haspopup="listbox"
            >
              <span>{currentLang.label}</span>
              <img src={language} alt="Language" />
            </button>
            {isLangOpen && (
              <ul
                className="header__lang-dropdown"
                role="listbox"
                aria-label="Выбор языка"
              >
                {LANGUAGES.map((lang) => (
                  <li key={lang.code} role="option">
                    <button
                      type="button"
                      className={`header__lang-option ${currentLang.code === lang.code ? "header__lang-option_active" : ""}`}
                      onClick={() => {
                        setCurrentLang(lang);
                        setIsLangOpen(false);
                      }}
                    >
                      {lang.label}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
