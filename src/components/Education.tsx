import React from "react";

class Education extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="school">School name</label>
        <input type="text" id="school"></input>

        <label htmlFor="specialization">Specialization</label>
        <input type="text" id="specialization"></input>

        <label htmlFor="degree">Degree</label>
        <input type="text" id="degree"></input>

        <label htmlFor="from">From</label>
        <input type="text" id="from"></input>

        <label htmlFor="to">To</label>
        <input type="text" id="to"></input>

        <button>Delete</button>
      </fieldset>
    );
  }
}

export default Education;
