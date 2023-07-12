import React, { useState } from "react";
import "../styles/Accordion.css";

const items = [
  {
    title: "Ručno izrađeni krevetići",
    content:
      "Krevetići se mogu izraditi od raznih vrsta tkanina i ispuniti materijalom po vašoj želji. Pored toga što su izdržljivi pružaju udobnost i savršeno iskustvo za spavanje vašeg ljubimca.",
  },
  {
    title: "Raznih dimenzija i dezena",
    content:
      "Verujemo da krevetići pored toga što su funkcionalni, trebaju odgovarati i stilu vašeg kućnog prostora. Možemo dizajnirati jedinstvene primerke, od modernih i jedinstvenih do tradicionalnih i složenijih oblika i boja. Sa našim ručno izrađenim krevetićima možete omogućiti vašem ljubimcu poseban prostor, dok ujedno ulepšavate estetiku vašeg životnog prostora.",
  },
  {
    title: "Krevetići sa ušivenim imenom",
    content:
      "Razumemo da je svaki pas jedinstven, pa bi i njihov krevetić trebao biti isto. Zato je prilikom izrade moguće odabrati pored odgovarajućih dimenzija, materijala i ušivanje imena na krevetiću.",
  },
];

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClick = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const renderedItems = items.map((item, index) => {
    const active = index === activeIndex ? "active" : "";

    return (
      <React.Fragment key={item.title}>
        <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`content ${active}`}>{item.content}</div>
      </React.Fragment>
    );
  });

  return (
    <section id="accordion">
      <div className="ui styled accordion accordion-section">
        {renderedItems}
      </div>
    </section>
  );
};

export default Accordion;
