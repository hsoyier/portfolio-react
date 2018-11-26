import React, { Component } from "react";
import Project01 from "./projectExamples/Project01";
import Project02 from "./projectExamples/Project02";
import Project03 from "./projectExamples/Project03";

class Work extends Component {
  state = {
    closeModal: this.props.closeModal
  };
  render() {
    const { example, closeModal } = this.props;

    switch (example) {
      case "example01":
        return <Project01 closeModal={closeModal} />;
      case "example02":
        return <Project02 closeModal={closeModal} />;
      case "example03":
        return <Project03 closeModal={closeModal} />;
      default:
        break;
    }
  }
}

export default Work;
