import React, { Component } from "react";
import Modal from "react-modal";
import Work from "./Work";
import work_example01 from "../assets/work_example01.jpg";
import work_example02 from "../assets/work_example02.jpg";
import work_example03 from "../assets/work_example03.jpg";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

class Works extends Component {
  state = {
    modalIsOpen: false,
    example: ""
  };

  openModal = e => {
    e.preventDefault();
    console.log(e.target.value);
    const example = e.target.name;
    this.setState({ modalIsOpen: true, example });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    const { example } = this.state;
    return (
      <section id="projects" className="project">
        <div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
          >
            <Work closeModal={this.closeModal} example={example} />
          </Modal>
        </div>
        <div className="project__inner">
          <h2>Works</h2>
          <ul className="project__list">
            <li className="project__item" id="project__item01">
              <div className="project__itemWrap">
                <input
                  type="button"
                  className="project__anchor"
                  name="example01"
                  onClick={this.openModal}
                />
                <img
                  src={work_example01}
                  alt="Tokyo Metropolitan Volunteerism Navigation Website"
                />
                <div className="project__detailBox">
                  <p className="project__title">
                    Tokyo Metropolitan Volunteerism Navigation Website
                  </p>
                  <ul className="project__skillList">
                    <li className="project__skill">React</li>
                    <li className="project__skill">Ajax</li>
                    <li className="project__skill">Git</li>
                    <li className="project__skill">Responsive Web Design</li>
                  </ul>
                </div>
              </div>
            </li>
            <li className="project__item" id="project__item01">
              <div className="project__itemWrap">
                <input
                  type="button"
                  className="project__anchor"
                  name="example02"
                  onClick={this.openModal}
                />
                <img src={work_example02} alt="Breitling Japan" />
                <div className="project__detailBox">
                  <p className="project__title">
                    <a href="https://www.breitling.co.jp/">Breitling Japan</a>
                  </p>
                  <ul className="project__skillList">
                    <li className="project__skill">React</li>
                    <li className="project__skill">Ajax</li>
                    <li className="project__skill">Git</li>
                    <li className="project__skill">Responsive Web Design</li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="project__item" id="project__item01">
              <div className="project__itemWrap">
                <input
                  type="button"
                  className="project__anchor"
                  name="example03"
                  onClick={this.openModal}
                />
                <img src={work_example03} alt="Honda Orange Dealer" />
                <div className="project__detailBox">
                  <p className="project__title">Honda Orange Dealer</p>
                  <ul className="project__skillList">
                    <li className="project__skill">React</li>
                    <li className="project__skill">Ajax</li>
                    <li className="project__skill">Git</li>
                    <li className="project__skill">Responsive Web Design</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Works;
