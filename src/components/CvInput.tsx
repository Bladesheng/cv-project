import React, { ChangeEvent } from "react";
import Education, { IStateEducation, ISchool } from "./Education";
import Experience, { IStateExperience, IJob } from "./Experience";
import CvOutput from "./CvOutput";
import { type } from "os";

type IProps = {};

export type IStateInput = {
  firstName: string;
  lastName: string;
  title: string;
  adress: string;
  phoneNumber: string;
  email: string;
  description: string;
  experience: IJob[];
  education: ISchool[];
};

class CvInput extends React.Component<IProps, IStateInput> {
  constructor(props: any) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      title: "",
      adress: "",
      phoneNumber: "",
      email: "",
      description: "",
      experience: [],
      education: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.loadTemplate = this.loadTemplate.bind(this);
    this.resetInput = this.resetInput.bind(this);
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

  loadTemplate(event: any) {
    event.preventDefault();

    this.setState({
      firstName: "Michael",
      lastName: "Scott",
      title: "",
      adress: "Scranton, Pennsylvania",
      phoneNumber: "717-555-0177",
      email: "michael.scott@dundermifflin.com",
      description:
        "First of all no, it's still on tv they didn't take it off. The Office is in second person and the camera points to the characters faces on purpose because in the end they do say that they are talking to the audience. The only way you could've missed this is because you didn't really watch it at all. Second, there is nothing wrong with...",
      experience: [
        {
          position: "Salesman",
          company: "Dunder Mifflin",
          experinceFrom: "1992",
          experinceTo: "2001"
        },
        {
          position: "Regional Manager",
          company: "Dunder Mifflin",
          experinceFrom: "2001",
          experinceTo: "2011"
        }
      ],
      education: [
        {
          school: "Cornell University",
          specialization: "Art",
          degree: "Bachelor",
          educationFrom: "1991",
          educationTo: "1995"
        }
      ]
    });
  }

  resetInput(event: any) {
    event.preventDefault();

    this.setState({
      firstName: "",
      lastName: "",
      title: "",
      adress: "",
      phoneNumber: "",
      email: "",
      description: "",
      experience: [],
      education: []
    });
  }

  render() {
    return (
      <main>
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

          <Experience
            updateInputState={(experienceState: IStateExperience) => {
              // saves Experience's state in CvInput's state
              this.setState({
                ...this.state,
                experience: experienceState.jobs
              });
            }}
          ></Experience>

          <Education
            updateInputState={(educationState: IStateEducation) => {
              // saves Education's state in CvInput's state
              this.setState({
                ...this.state,
                education: educationState.schools
              });
            }}
          ></Education>

          <section className="controls">
            <button className="pdf">Generate PDF</button>
            <button className="example" onClick={this.loadTemplate}>
              Load Example
            </button>
            <button className="reset" onClick={this.resetInput}>
              Reset Form
            </button>
          </section>
        </form>

        <CvOutput inputState={this.state}></CvOutput>
      </main>
    );
  }
}

export default CvInput;
