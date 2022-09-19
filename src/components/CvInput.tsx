import React from "react";
import Education from "./Education";
import Experience from "./Experience";
import CvOutput from "./CvOutput";

class CvInput extends React.Component {
  render() {
    return (
      <div className="main">
        <form className="cvInput">
          <fieldset className="personalInfo">
            <legend>Personal Information</legend>

            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName"></input>

            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName"></input>

            <label htmlFor="title">Title</label>
            <input type="text" id="title"></input>

            <label htmlFor="adress">Adress</label>
            <input type="text" id="adress"></input>

            <label htmlFor="phoneNumber">Phone number</label>
            <input type="tel" id="phoneNumber"></input>

            <label htmlFor="email">Email</label>
            <input type="email" id="email"></input>

            <label htmlFor="description">Description</label>
            <textarea id="description"></textarea>
          </fieldset>

          <fieldset className="education">
            <legend>Education</legend>

            <Education></Education>

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

        <CvOutput></CvOutput>
      </div>
    );
  }
}

export default CvInput;
