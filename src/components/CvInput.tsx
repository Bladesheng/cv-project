import React from "react";
import Education, { IStateEducation, ISchool } from "./Education";
import Experience from "./Experience";
import CvOutput from "./CvOutput";

type IProps = {};

export type IStateInput = {
  firstName: string;
  lastName: string;
  title: string;
  adress: string;
  phoneNumber: string;
  email: string;
  description: string;
  experience: [];
  education: ISchool[];
};

class CvInput extends React.Component<IProps, IStateInput> {
  constructor(props: any) {
    super(props);

    this.state = {
      firstName: "John",
      lastName: "Doe",
      title: "Ing.",
      adress: "Uganda",
      phoneNumber: "133769420",
      email: "john@doe.com",
      description:
        "Doggo ipsum big ol doggorino clouds big ol pupper wow such tempt, doing me a frighten.",
      experience: [],
      education: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event: any) {
    const inputElement = event.target as HTMLInputElement;
    const inputText = inputElement.value;

    type stateKey = keyof typeof this.state;
    const key = inputElement.id as stateKey; // ID's are the same as state's keys

    this.setState({
      ...this.state,
      [key]: inputText
    });
  }

  render() {
    return (
      <div className="main">
        <form className="cvInput">
          <fieldset className="personalInfo">
            <legend>Personal Information</legend>

            <label htmlFor="firstName">First name</label>
            <input onChange={this.handleInputChange} type="text" id="firstName"></input>

            <label htmlFor="lastName">Last name</label>
            <input onChange={this.handleInputChange} type="text" id="lastName"></input>

            <label htmlFor="title">Title</label>
            <input onChange={this.handleInputChange} type="text" id="title"></input>

            <label htmlFor="adress">Adress</label>
            <input onChange={this.handleInputChange} type="text" id="adress"></input>

            <label htmlFor="phoneNumber">Phone number</label>
            <input onChange={this.handleInputChange} type="tel" id="phoneNumber"></input>

            <label htmlFor="email">Email</label>
            <input onChange={this.handleInputChange} type="email" id="email"></input>

            <label htmlFor="description">Description</label>
            <textarea onChange={this.handleInputChange} id="description"></textarea>
          </fieldset>

          {/* <Experience></Experience> */}

          <Education
            updateInputState={(educationState: IStateEducation) => {
              // saves Education's state in CvInput's state
              this.setState({
                ...this.state,
                education: educationState.schools
              });
            }}
          ></Education>

          <button>Generate PDF</button>
          <button>Load Example</button>
          <button>Reset Form</button>
        </form>

        <CvOutput inputState={this.state}></CvOutput>
      </div>
    );
  }
}

export default CvInput;
