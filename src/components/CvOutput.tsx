import React, { useEffect } from "react";
import { IPersonalInfo } from "./CvInput";
import { IJob } from "./Experience";
import { ISchool } from "./Education";

type IProps = {
  personalInfo: IPersonalInfo;
  jobs: IJob[];
  schools: ISchool[];
};

export default function CvOutput(props: IProps) {
  const { personalInfo, jobs, schools } = props;

  const jobsElements = jobs.map((job, index) => {
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

  const schoolsElements = schools.map((school, index) => {
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

  return (
    <div className="cvOutput">
      <h1 className="fullName">
        {`${personalInfo.title} ${personalInfo.firstName} ${personalInfo.lastName}`}
      </h1>

      <section className="skills">
        <section className="description">
          <h2>Description</h2>
          <p>{personalInfo.description}</p>
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
        <p>{personalInfo.adress}</p>

        <h3>Phone Number</h3>
        <p>{personalInfo.phoneNumber}</p>

        <h3>Email</h3>
        <p>{personalInfo.email}</p>
      </section>
    </div>
  );
}
