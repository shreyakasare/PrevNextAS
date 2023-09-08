import React, { Component } from "react";

class CycleThrough extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        { srno: 1, name: "shre", age: 7, height: 4, dob: "76" },
        { srno: 2, name: "abc", age: 70, height: 4, dob: "6" },
        { srno: 3, name: "def", age: 8, height: 5, dob: "6" },
        { srno: 4, name: "ghi", age: 6, height: 34, dob: "16" },
        { srno: 5, name: "she", age: 71, height: 43, dob: "76" },
      ],
      currentSrno: 1,
    };
  }

  handlePreviousClick = () => {
    debugger
    const { currentSrno } = this.state;
    if (currentSrno > 1) {
      this.setState({ currentSrno: currentSrno - 1 });
    }
  };

  handleNextClick = () => {
    debugger
    const { currentSrno, data } = this.state;
    if (currentSrno < data.length) {
      this.setState({ currentSrno: currentSrno + 1 });
    }
  };

  render() {
    const { data, currentSrno } = this.state;
    const currentItem = data.find((item) => item.srno === currentSrno);

    return (
      <div>
        <h1>Data Viewer</h1>
        {currentItem && (
          <div>
            <p>srno: {currentItem.srno}</p>
            <p>Name: {currentItem.name}</p>
            <p>Age: {currentItem.age}</p>
            <p>Height: {currentItem.height}</p>
            <p>DOB: {currentItem.dob}</p>
          </div>
        )}
        <button onClick={this.handlePreviousClick} disabled={currentSrno === 1}>
          Previous
        </button>
        <button onClick={this.handleNextClick} disabled={currentSrno === data.length}>
          Next
        </button>
      </div>
    );
  }
}

export default CycleThrough;
