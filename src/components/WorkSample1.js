import React, { Component } from "react";

class WorkSample1 extends Component {
  render() {
    const sample = this.props.workSample;
    console.log(sample);
    if (sample === "1") {
      return <p>hey</p>;
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
