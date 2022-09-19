import React from "react";

class Experience extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="position">Position</label>
        <input type="text" id="position"></input>

        <label htmlFor="company">Company</label>
        <input type="text" id="company"></input>

        <label htmlFor="from">From</label>
        <input type="text" id="from"></input>

        <label htmlFor="to">To</label>
        <input type="text" id="to"></input>

        <button>Delete</button>
      </fieldset>
    );
  }
}

export default Experience;
