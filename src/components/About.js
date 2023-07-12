import React from "react";
import "../styles/About.css";
import AboutBedWrapper from "./AboutBedWrapper";

const About = () => {
  return (
    <section className="about">
      <div className="about-header">
        <h1 className="ui header">Moja Šapica</h1>
        <ul>
          <li>
            Bavimo se ručnom izradom krevetića za pse raznih dimenzija i boja
          </li>
          <li>Sve navlake se skidaju</li>
          <li>Moguće ušivanje imena na krevetiću</li>
        </ul>
      </div>
      <div className="beds-container">
        <div className="beds-wrapper">
          <div className="bed-first-part">
            <AboutBedWrapper
              image={require("../images/krevetic-pas-1.png")}
              alt="krevetic-pas-1"
              header="Ručno izrađeni krevetići"
            />
          </div>
          <div className="bed-second-part">
            <AboutBedWrapper
              add="bed-with-name"
              image={require("../images/krevetic-teddy.jpg")}
              alt="krevetic-sa-imenom-teddy"
              header="Krevetići sa ušivenim imenom"
            />
            <AboutBedWrapper
              image={require("../images/gallery/krevetic-17.jpg")}
              alt="krevetic-sunce"
              header="Raznih dimenzija i dezena"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
