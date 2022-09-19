import React from "react";

class Experience extends React.Component {
  render() {
    return (
      <fieldset>
        <label htmlFor="position">Position</label>
        <input type="text" id="position"></input>

        <label htmlFor="company">Company</label>
        <input type="text" id="company"></input>

        <label htmlFor="experinceFrom">From</label>
        <input type="text" id="experinceFrom"></input>

        <label htmlFor="experinceTo">To</label>
        <input type="text" id="experinceTo"></input>

        <button>Delete</button>
      </fieldset>
    );
  }
}

export default Experience;
