import React from "react";
import about1 from "@/shared/assets/about1.png";
import '../about.scss';

export const About = () => {
  return (
    <section className="about container" id="about">
        <h2 className="subtitle">О нас</h2>
        <h3 className="title">Об основателе и достижениях Академии</h3>
        <p className="description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
        <div className="about__content">
            <div className="col-6">
                <img src={about1} alt="About" />
            </div>
            <div className="col-6">
                <div className="about__info">
                    <div>
                        <h3 className="title-info">Lorem Ipsum has been</h3>
                        <p className="info-description">Lorem ipsum dolor sit.</p>
                    </div>
                    <div>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};
