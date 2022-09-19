import React from "react";
import CvOutput from "./CvOutput";

class CvInput extends React.Component {
  render() {
    return (
      <div className="main">
        <div className="cvInput">
          <p>input elements here</p>
        </div>
        <CvOutput></CvOutput>
      </div>
    );
  }
}

export default CvInput;
