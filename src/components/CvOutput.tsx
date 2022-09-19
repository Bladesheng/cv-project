import React from "react";
import CvInput from "./CvInput";

class CvOutput extends React.Component {
  render() {
    return (
      <div className="container">
        <CvInput></CvInput>
        <div className="cvOutput">
          <p>output elements here</p>
        </div>
      </div>
    );
  }
}

export default CvOutput;
