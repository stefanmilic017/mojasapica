import React from "react";
import "../styles/Contact.css";
import InstagramLink from "./InstagramLink";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h1>Kontakt</h1>
      <div className="contact-content">
        <div className="contact-content-left">
          <p>
            Zapratite nas na našoj instagram stranici <b>mojasapicaa</b>
          </p>
          <InstagramLink />
        </div>
        <div className="contact-content-right">
          <img
            className="mojasapica-ig ui fluid image"
            src={require("../images/instagram-mojasapica.png")}
            alt="mojasapica-instagram-look"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
