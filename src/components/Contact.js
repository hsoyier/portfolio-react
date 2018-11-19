import React from "react";

const Contact = props => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p className="contact__text">
        Don’t hesitate to contact me if you want to know more about What I do. I
        am currently based in Vancouver. Please contact me whenever you want,
        Thanks!
      </p>
      <button className="contact__btn">
        <a href="mailto:reiyoshizawa0418@gmail.com" className="contact__anchor">
          Contact me
        </a>
      </button>
    </section>
  );
};

export default Contact;
