import React, { ChangeEvent } from "react";

type EduProps = {
  eduID: string;
  updateParentState: (state: object) => void;
};

class Education extends React.Component<EduProps> {
  constructor(props: EduProps) {
    super(props);

    this.state = {
      eduID: this.props.eduID,
      school: "testxxxx school",
      specialization: "some specialization",
      degree: "test degree",
      educationFrom: "9/11/2001",
      educationTo: "69/420/13337"
    };

    this.props.updateParentState(this.state); // initial update of Input's state

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event: ChangeEvent) {
    const inputElement = event.target as HTMLInputElement;
    const inputText = inputElement.value;

    this.setState(
      {
        [inputElement.id]: inputText
      },
      () => {
        this.props.updateParentState(this.state); // update Input state after updating Education state
      }
    );
  }

  render() {
    return (
      <fieldset>
        <label htmlFor="school">School name</label>
        <input onChange={this.handleInputChange} type="text" id="school"></input>

        <label htmlFor="specialization">Specialization</label>
        <input onChange={this.handleInputChange} type="text" id="specialization"></input>

        <label htmlFor="degree">Degree</label>
        <input onChange={this.handleInputChange} type="text" id="degree"></input>

        <label htmlFor="educationFrom">From</label>
        <input onChange={this.handleInputChange} type="text" id="educationFrom"></input>

        <label htmlFor="educationTo">To</label>
        <input onChange={this.handleInputChange} type="text" id="educationTo"></input>

        <button>Delete</button>
      </fieldset>
    );
  }
}

export default Education;
