import React from "react";
import { IStateInput } from "./CvInput";

type OutputProps = {
  inputState: IStateInput;
};

class CvOutput extends React.Component<OutputProps> {
  render() {
    console.log(this.props.inputState);

    const { inputState } = this.props;

    const schoolsElements = inputState.education.map((school, index) => {
      return (
        <div key={index} className="school">
          <p className="date">
            {school.educationFrom} - {school.educationTo}
          </p>
          <h3 className="schoolName">{school.school}</h3>
          <p className="degree">{school.degree}</p>
          <p className="specialization">{school.specialization}</p>
        </div>
      );
    });

    const jobsElements = inputState.experience.map((job, index) => {
      return (
        <div key={index} className="job">
          <p className="date">
            {job.experinceFrom} - {job.experinceTo}
          </p>
          <h3 className="compayName">{job.company}</h3>
          <p className="position">{job.position}</p>
        </div>
      );
    });

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
            <section className="jobsList">{jobsElements}</section>
          </section>

          <section className="education">
            <h2>Education</h2>
            <section className="schoolsList">{schoolsElements}</section>
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
