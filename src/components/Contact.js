import React from 'react';

const Contact = (props) => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p className="contact__text">Feel free to contact me, I won't dissapoint you</p>
      <div className="contact__btnWrap">
        <button className="contact__btn">
          <a href="mailto:reiyoshizawa0418@gmail.com">
           <i className="fas fa-at fa-2x"></i>
          </a>
        </button>
      </div>
    </section>
  )
}

export default Contact
