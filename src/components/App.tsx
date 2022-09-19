import React from "react";
import CvOutput from "./CvOutput";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <CvOutput></CvOutput>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
