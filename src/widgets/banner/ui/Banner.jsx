import React from "react";
import "../banner.scss";

export function Banner() {
  const banner = 
    {
      title: "Араван Илим Билим Академия",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    }
  
  return (
    <div className="banner">
      <div className="container banner__container">
        <h1 className="banner__title">{banner.title}</h1>
        <p className="banner__text">
          {banner.text}
        </p>
      </div>
    </div>
  );
}
