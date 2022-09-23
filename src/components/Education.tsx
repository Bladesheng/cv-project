import React, { ChangeEvent, useEffect, useState } from "react";

export type ISchool = {
  school: string;
  specialization: string;
  degree: string;
  educationFrom: string;
  educationTo: string;
};

type IProps = {
  updateInputState: (schools: ISchool[]) => void;
  passResetState: (fnc: () => void) => void;
};

export default function Education(props: IProps) {
  const [schools, setSchools] = useState<ISchool[]>([]);

  useEffect(() => {
    props.updateInputState(schools); // update CvInput state after updating Education state
  }, [schools]);

  // saves text from input into state
  function handleInputChange(event: ChangeEvent) {
    const inputElement = event.target as HTMLInputElement;
    const key = inputElement.id as keyof ISchool; // ID's are the same as school's keys
    const inputText = inputElement.value;
    const schoolElement = inputElement.parentNode as HTMLFieldSetElement;
    const schoolID = parseInt(schoolElement.dataset.schoolid); // is same as index in schools array

    const schoolsCopy = [...schools];
    schoolsCopy[schoolID][key] = inputText;

    setSchools(schoolsCopy);
  }

  function addSchool() {
    const newSchool = {
      school: "",
      specialization: "",
      degree: "",
      educationFrom: "",
      educationTo: ""
    };

    setSchools(schools.concat(newSchool));
  }

  function removeSchool(schoolID: string) {
    const filteredSchools = schools.filter((school, index) => {
      return index !== parseInt(schoolID); // keep only schools with different index than the one to be removed
    });

    setSchools(filteredSchools);
  }

  function resetEducationState() {
    setSchools([]);
  }
  props.passResetState(resetEducationState);

  const educationElements = schools.map((school, index) => {
    return (
      <fieldset key={index} data-schoolid={index}>
        <label htmlFor="school">School name</label>
        <input onChange={handleInputChange} type="text" id="school"></input>

        <label htmlFor="specialization">Specialization</label>
        <input onChange={handleInputChange} type="text" id="specialization"></input>

        <label htmlFor="degree">Degree</label>
        <input onChange={handleInputChange} type="text" id="degree"></input>

        <label htmlFor="educationFrom">From</label>
        <input onChange={handleInputChange} type="text" id="educationFrom"></input>

        <label htmlFor="educationTo">To</label>
        <input onChange={handleInputChange} type="text" id="educationTo"></input>

        <button
          className="delete"
          onClick={(event) => {
            event.preventDefault();
            const buttonElement = event.target as HTMLButtonElement;
            const schoolElement = buttonElement.parentNode as HTMLFieldSetElement;
            const schoolID = schoolElement.dataset.schoolid;

            removeSchool(schoolID);
          }}
        >
          Delete
        </button>
      </fieldset>
    );
  });

  return (
    <fieldset className="education">
      <legend>Education</legend>

      {educationElements}

      <button
        onClick={(event) => {
          event.preventDefault();
          addSchool();
        }}
        className="add"
      >
        Add
      </button>
    </fieldset>
  );
}
