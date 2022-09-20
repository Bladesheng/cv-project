import React, { ChangeEvent } from "react";

export type ISchool = {
  school: string;
  specialization: string;
  degree: string;
  educationFrom: string;
  educationTo: string;
};

type IProps = {
  updateInputState: (state: IStateEducation) => void;
};

export type IStateEducation = {
  schools: ISchool[];
};

class Education extends React.Component<IProps, IStateEducation> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      schools: []
    };

    this.props.updateInputState(this.state); // initial update of Input's state

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addSchool = this.addSchool.bind(this);
    this.removeSchool = this.removeSchool.bind(this);
  }

  handleInputChange(event: ChangeEvent) {
    const inputElement = event.target as HTMLInputElement;
    const key = inputElement.id as keyof ISchool; // ID's are the same as school's keys
    const inputText = inputElement.value;
    const schoolElement = inputElement.parentNode as HTMLFieldSetElement;
    const eduID = schoolElement.dataset.eduid; // is same as index in schools array

    const schoolsCopy = this.state.schools;
    const school = schoolsCopy[parseInt(eduID)];
    school[key] = inputText;

    this.setState(
      {
        ...this.state,
        schools: schoolsCopy
      },
      () => {
        this.props.updateInputState(this.state); // update Input state after updating Education state
      }
    );
  }

  addSchool() {
    const newSchool = {
      school: "",
      specialization: "",
      degree: "",
      educationFrom: "",
      educationTo: ""
    };

    this.setState(
      {
        ...this.state,
        schools: this.state.schools.concat(newSchool)
      },
      () => {
        this.props.updateInputState(this.state);
      }
    );
  }

  removeSchool(eduID: string) {
    const filteredSchools = this.state.schools.filter((school, index) => {
      return index !== parseInt(eduID); // keep only schools with different index than the one to be removed
    });

    console.log(this.state.schools);
    console.log(filteredSchools);

    this.setState(
      {
        ...this.state,
        schools: filteredSchools
      },
      () => {
        this.props.updateInputState(this.state);
      }
    );
  }

  render() {
    const educationElements = this.state.schools.map((school, index) => {
      return (
        <fieldset key={index} data-eduid={index}>
          <label htmlFor="school">School name</label>
          <input
            onChange={this.handleInputChange}
            type="text"
            id="school"
            value={school.school}
          ></input>

          <label htmlFor="specialization">Specialization</label>
          <input
            onChange={this.handleInputChange}
            type="text"
            id="specialization"
            value={school.specialization}
          ></input>

          <label htmlFor="degree">Degree</label>
          <input
            onChange={this.handleInputChange}
            type="text"
            id="degree"
            value={school.degree}
          ></input>

          <label htmlFor="educationFrom">From</label>
          <input
            onChange={this.handleInputChange}
            type="text"
            id="educationFrom"
            value={school.educationFrom}
          ></input>

          <label htmlFor="educationTo">To</label>
          <input
            onChange={this.handleInputChange}
            type="text"
            id="educationTo"
            value={school.educationTo}
          ></input>

          <button
            onClick={(event) => {
              event.preventDefault();
              const buttonElement = event.target as HTMLButtonElement;
              const schoolElement = buttonElement.parentNode as HTMLFieldSetElement;
              const eduID = schoolElement.dataset.eduid;

              this.removeSchool(eduID);
            }}
            className="delete"
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
            this.addSchool();
          }}
          className="add"
        >
          Add
        </button>
      </fieldset>
    );
  }
}

export default Education;
