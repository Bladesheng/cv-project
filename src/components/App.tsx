import React from "react";
import CvInput from "./CvInput";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <CvInput></CvInput>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
