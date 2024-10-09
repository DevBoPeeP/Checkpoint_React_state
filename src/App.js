import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    // Initialize state
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "A software developer from Earth.",
        imgSrc: "./images/unnamed.webp", // Placeholder image URL
        profession: "Software Engineer",
      },
      show: false,
      timeSinceMount: 0, // time interval since the component was mounted
    };
    this.intervalId = null; // To store the interval ID
  }

  componentDidMount() {
    // Start interval to update timeSinceMount every second
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeSinceMount: prevState.timeSinceMount + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component unmounts
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeSinceMount } = this.state;

    return (
      <div className="App">
        <h1
          style={{
            color: "white",
            textAlign: "center",
            fontFamily: "tahoma",
            fontSize: "2em",
            fontWeight: "bold",
            textTransform: "uppercase",
            textDecoration: "dotted",
          }}
        >
          Profile
        </h1>
        <button
          style={{
            padding: "0.5em",
            margin: "1em",
            backgroundColor: "black",
            color: "white",
            border: "white 1px solid",
            borderRadius: "20px",
            cursor: "pointer",
          }}
          onClick={this.toggleShow}
        >
          {show ? "Hide Profile" : "Show Profile"}
        </button>
        {show && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "black",
              color: "white",
              padding: "1em",
              margin: "1em",
              borderRadius: "10px",
            }}
          >
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>{profession}</p>
            <p>Time since mount: {timeSinceMount} seconds</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
