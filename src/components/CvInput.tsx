import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import CvOutput from "./CvOutput";

class CvInput extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      firstName: "test first name",
      lastName: "test last name",
      title: "test title",
      adress: "test adress",
      phoneNumber: "test phone",
      email: "test mail",
      description: "test description"
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event: any) {
    const inputElement = event.target as HTMLInputElement;
    const inputText = inputElement.value;

    this.setState({
      [inputElement.id]: inputText
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

          <fieldset className="education">
            <legend>Education</legend>

            <Education
              eduID="0"
              updateParentState={(state: object) => {
                // saves Education's state in CvInput's state
                this.setState({
                  [`education${0}State`]: state
                });
              }}
            ></Education>

            <button>Add</button>
          </fieldset>

          <fieldset className="experience">
            <legend>Experience</legend>

            <Experience></Experience>

            <button>Add</button>
          </fieldset>

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
