import React, { Component } from "react";
import Modal from "react-modal";
import WorkSample1 from "./WorkSample1";
import visual_translate from "../assets/visual_translate.png";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

class Works extends Component {
  state = {
    modalIsOpen: false,
    worksample: ""
  };

  openModal = e => {
    e.preventDefault();
    const worksample = e.target.value;
    this.setState({ modalIsOpen: true, worksample });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  render() {
    return (
      <section id="projects" className="project">
        <div>
          <button value="1" onClick={this.openModal}>
            Open Modal
          </button>
          <button value="2" onClick={this.openModal}>
            Open Modal
          </button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
          >
            <WorkSample1
              closeModal={this.closeModal}
              worksample={this.state.worksample}
            />
          </Modal>
        </div>
        <div className="project__inner">
          <h2>Works</h2>
          <ul className="project__list">
            <li className="project__item" id="project__item01">
              <div
                className="project__itemWrap"
                onClick={this.openModal}
                value="1"
              >
                <img src={visual_translate} alt="visual translate" />
                <div className="project__detailBox">
                  <p className="project__title">
                    <a href="http://www.city-volunteer.metro.tokyo.jp/index.html">
                      Tokyo Metropolitan Volunteerism Navigation Website
                    </a>
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
                <a
                  className="project__anchor"
                  href="https://www.honda.co.jp/orangedealer/orezou/"
                >
                  <img src={visual_translate} alt="visual translate" />
                </a>
                <div className="project__detailBox">
                  <p className="project__title">
                    <a href="https://www.honda.co.jp/orangedealer/orezou/https://www.honda.co.jp/orangedealer/orezou/">
                      Honda Orange Dealer
                    </a>
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
                <a
                  className="project__anchor"
                  href="https://www.breitling.co.jp/"
                >
                  <img src={visual_translate} alt="visual translate" />
                </a>
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
          </ul>
        </div>
      </section>
    );
  }
}

export default Works;
