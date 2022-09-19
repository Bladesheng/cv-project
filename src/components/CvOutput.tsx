import React from "react";

type OutputProps = {
  inputState: any;
};

class CvOutput extends React.Component<OutputProps> {
  render() {
    console.log(this.props.inputState);
    console.log(this.props.inputState.education0State);
    return (
      <div className="cvOutput">
        <p>output elements here</p>
      </div>
    );
  }
}

export default CvOutput;
