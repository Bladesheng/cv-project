import React from "react";

type OutputProps = {
  inputState: any;
};

class CvOutput extends React.Component<OutputProps> {
  render() {
    console.log(this.props.inputState);

    const { inputState } = this.props;

    return (
      <div className="cvOutput">
        <h1 className="fullName">
          {`${inputState.title} ${inputState.firstName} ${inputState.lastName}`}
        </h1>

        <section className="skills">
          <section className="description">
            <h2>Description</h2>
            <p>{inputState.description}</p>
          </section>

          <section className="experience">
            <h2>Experience</h2>
          </section>

          <section className="education">
            <h2>Education</h2>
          </section>
        </section>

        <section className="personalInfo">
          <h2>Personal Information</h2>

          <h3>Adress</h3>
          <p>{inputState.adress}</p>

          <h3>Phone Number</h3>
          <p>{inputState.phoneNumber}</p>

          <h3>Email</h3>
          <p>{inputState.email}</p>
        </section>
      </div>
    );
  }
}

export default CvOutput;
