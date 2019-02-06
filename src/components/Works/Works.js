import React, { Component } from 'react'
import './scss/style.scss'
import Modal from 'react-modal'
import Work from './Work/Work'
import work_example01 from './Work/assets/work_example01.jpg'
import work_example02 from './Work/assets/work_example02.jpg'
import work_example03 from './Work/assets/work_example03.jpg'

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

class Works extends Component {
  state = {
    modalIsOpen: false,
    example: '',
  }

  openModal = e => {
    e.preventDefault()
    console.log(e.target.value)
    const example = e.target.name
    this.setState({ modalIsOpen: true, example })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  render() {
    const { example } = this.state
    return (
      <section id="works" className="project">
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          contentLabel="Example Modal"
        >
          <Work closeModal={this.closeModal} example={example} />
        </Modal>
        <div className="project__inner">
          <h2 id="works__title">Works</h2>
          <ul className="project__list" id="works__list">
            <li className="project__item">
              <div className="project__itemWrap">
                <input
                  type="button"
                  className="project__anchor"
                  name="example01"
                  onClick={this.openModal}
                />
                <img
                  className="project__image"
                  src={work_example01}
                  alt="Tokyo Metropolitan Volunteerism Navigation Website"
                />
                <div className="project__detailBox">
                  <p className="project__title">
                    Tokyo Metropolitan Volunteerism Navigation Website
                  </p>
                </div>
              </div>
            </li>
            <li className="project__item">
              <div className="project__itemWrap">
                <input
                  type="button"
                  className="project__anchor"
                  name="example02"
                  onClick={this.openModal}
                />
                <img
                  className="project__image"
                  src={work_example02}
                  alt="Breitling Japan"
                />
                <div className="project__detailBox">
                  <p className="project__title">Breitling Japan</p>
                </div>
              </div>
            </li>
            <li className="project__item">
              <div className="project__itemWrap">
                <input
                  type="button"
                  className="project__anchor"
                  name="example03"
                  onClick={this.openModal}
                />
                <img
                  className="project__image"
                  src={work_example03}
                  alt="JADA Education Package"
                />
                <div className="project__detailBox">
                  <p className="project__title">JADA Education Package</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    )
  }
}

export default Works
