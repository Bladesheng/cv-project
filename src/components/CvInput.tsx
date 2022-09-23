import React, { ChangeEvent, useState, MouseEvent, useEffect } from "react";
import Education, { ISchool } from "./Education";
import Experience, { IJob } from "./Experience";
import CvOutput from "./CvOutput";

export type IPersonalInfo = {
  firstName: string;
  lastName: string;
  title: string;
  adress: string;
  phoneNumber: string;
  email: string;
  description: string;
};

export default function CvInput() {
  const [personalInfo, setPersonalInfo] = useState<IPersonalInfo>({
    firstName: "",
    lastName: "",
    title: "",
    adress: "",
    phoneNumber: "",
    email: "",
    description: ""
  });
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [schools, setSchools] = useState<ISchool[]>([]);

  // handling of personal info input only
  function handleInputChange(event: ChangeEvent) {
    const inputElement = event.target as HTMLInputElement;
    const inputText = inputElement.value;
    type stateType = keyof typeof personalInfo;
    const key = inputElement.id as stateType; // ID's are the same as state's keys

    // const personalInfoCopy: IPersonalInfo = Object.assign(personalInfo);
    const personalInfoCopy: IPersonalInfo = structuredClone(personalInfo);

    personalInfoCopy[key] = inputText;
    console.log("is it the same? ", personalInfo === personalInfoCopy);
    setPersonalInfo(personalInfoCopy);
  }

  function loadTemplate(event: MouseEvent) {
    event.preventDefault();

    setPersonalInfo({
      firstName: "Michael",
      lastName: "Scott",
      title: "",
      adress: "Scranton, Pennsylvania",
      phoneNumber: "717-555-0177",
      email: "michael.scott@dundermifflin.com",
      description:
        "First of all no, it's still on tv they didn't take it off. The Office is in second person and the camera points to the characters faces on purpose because in the end they do say that they are talking to the audience. The only way you could've missed this is because you didn't really watch it at all. Second, there is nothing wrong with..."
    });

    setJobs([
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
    ]);

    setSchools([
      {
        school: "Cornell University",
        specialization: "Art",
        degree: "Bachelor",
        educationFrom: "1991",
        educationTo: "1995"
      }
    ]);
  }

  function resetInput(event: MouseEvent) {
    event.preventDefault();

    setPersonalInfo({
      firstName: "",
      lastName: "",
      title: "",
      adress: "",
      phoneNumber: "",
      email: "",
      description: ""
    });

    setJobs([]);
    setSchools([]);
  }

  return (
    <main>
      <form className="cvInput">
        <fieldset className="personalInfo">
          <legend>Personal Information</legend>

          <label htmlFor="firstName">First name</label>
          <input onChange={handleInputChange} type="text" id="firstName"></input>

          <label htmlFor="lastName">Last name</label>
          <input onChange={handleInputChange} type="text" id="lastName"></input>

          <label htmlFor="title">Title</label>
          <input onChange={handleInputChange} type="text" id="title"></input>

          <label htmlFor="adress">Adress</label>
          <input onChange={handleInputChange} type="text" id="adress"></input>

          <label htmlFor="phoneNumber">Phone number</label>
          <input onChange={handleInputChange} type="tel" id="phoneNumber"></input>

          <label htmlFor="email">Email</label>
          <input onChange={handleInputChange} type="email" id="email"></input>

          <label htmlFor="description">Description</label>
          <textarea onChange={handleInputChange} id="description"></textarea>
        </fieldset>

        <Experience
          updateInputState={(jobs: IJob[]) => {
            // saves Experience's state in CvInput's state
            setJobs(jobs);
          }}
        ></Experience>

        <Education
          updateInputState={(schools: ISchool[]) => {
            // saves Education's state in CvInput's state
            setSchools(schools);
          }}
        ></Education>

        <section className="controls">
          <button
            className="pdf"
            onClick={(event: MouseEvent) => {
              event.preventDefault();
              window.print();
            }}
          >
            Generate PDF
          </button>

          <button className="example" onClick={loadTemplate}>
            Load Example
          </button>

          <button className="reset" onClick={resetInput}>
            Reset Form
          </button>
        </section>
      </form>

      <CvOutput personalInfo={personalInfo} jobs={jobs} schools={schools}></CvOutput>
    </main>
  );
}
