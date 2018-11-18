import React, { Component } from "react";
import Work01 from "./workExamples/Work01";

class WorkSample1 extends Component {
  render() {
    const sample = this.props.worksample;
    if (sample === "1") {
      return <Work01 />;
    } else {
      return (
        <div>
          <button onClick={this.props.closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </div>
      );
    }
  }
}

export default WorkSample1;
