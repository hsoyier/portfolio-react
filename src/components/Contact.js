import React from "react";

const Contact = props => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p className="contact__text">
        Don’t hesitate to contact me if you’ve got a project in mind or want to
        know more about what I do. I am based in Lyon, France but I can easily
        travel for business meetings or skype. Please, make sure you’ve
        specified deadlines and budget for your project in your email. Thanks!
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
