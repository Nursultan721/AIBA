import React, { useState, useEffect } from "react";
import logo from "@/shared/assets/footerLogo.svg";
import geekLogo from "../images/logo.svg";
import ArrowTop from "../images/ArrowTop.svg";
import "../footer.scss";

const SCROLL_THRESHOLD = 300;

export const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="row">
              <div className="col-3">
                <div className="footer__logo">
                  <img src={logo} alt="Logo" />
                </div>
              </div>
              <div className="col-3">
                <ul className="footer__navigation">
                  <li className="footer__navigation-head">Навигация</li>
                  <li className="footer__navigation-item">О нас</li>
                  <li className="footer__navigation-item">Колледж</li>
                  <li className="footer__navigation-item">Школа</li>
                  <li className="footer__navigation-item">Детский сад</li>
                  <li className="footer__navigation-item">Награды</li>
                </ul>
              </div>
              <div className="col-3">
                <ul className="footer__navigation">
                  <li className="footer__navigation-head">Соц сети</li>
                  <li className="footer__navigation-item">
                    <a href="https://www.instagram.com/aiba.kg/">Instagram</a>
                  </li>
                  <li className="footer__navigation-item">
                    <a href="https://www.instagram.com/aiba.kg/">Facebook</a>
                  </li>
                </ul>
                <ul className="footer__navigation address">
                  <li className="footer__navigation-head">Адрес</li>
                  <li className="footer__navigation-item">
                    <a href="https://www.instagram.com/aiba.kg/">
                      с. Араван ул.Ленина 94
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-3"></div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="row">
              <div className="col-4">
                <p>© 2026 . Все права защищены.</p>
              </div>
              <div className="col-4">
                <a href="https://geeks.kg/geeks-pro">
                  <img src={geekLogo} alt="" />
                </a>
              </div>
              <div className="col-4">
                <p>Политика конфиденциальности</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div
        className={`footer__scroll-top ${
          showScrollTop ? "footer__scroll-top--visible" : ""
        }`}
        onClick={scrollToTop}
        onKeyDown={(e) => e.key === "Enter" && scrollToTop()}
        role="button"
        tabIndex={0}
        aria-label="Прокрутить вверх"
      >
        <img src={ArrowTop} alt="" />
        <p>Вверх</p>
      </div>
    </>
  );
};
