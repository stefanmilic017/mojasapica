import React from "react";
import "../styles/About.css";
import AboutBedWrapper from "./AboutBedWrapper";
import kreveticPas2 from "../images/krevetic-pas-2.jpg";
import kreveticTeddy from "../images/krevetic-teddy.jpg";
import kreveticSunce from "../images/gallery/krevetic-17.jpg";

const About = () => {
  const aboutImages = [
    { image: kreveticPas2, headerText: "Ručno izrađeni krevetići", altName: 'krevetic-pas-2'},
    { image: kreveticTeddy, headerText: "Krevetići sa ušivenim imenom", altName: 'krevetic-teddy' },
    { image: kreveticSunce, headerText: "Raznih dimenzija i dezena", altName: 'krevetic-sunce' },
  ];
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
        <div className="bed-wrapper">
          <AboutBedWrapper
            image={aboutImages[0].image}
            headerText={aboutImages[0].headerText}
            altName={aboutImages[0].altName}
          />
        </div>
        <div className="bed-wrapper">
          <AboutBedWrapper
            image={aboutImages[1].image}
            headerText={aboutImages[1].headerText}
            altName={aboutImages[1].altName}
          />
          <AboutBedWrapper
            image={aboutImages[2].image}
            headerText={aboutImages[2].headerText}
            altName={aboutImages[2].altName}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
