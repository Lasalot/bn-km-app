import React, { Component } from "react";
import swal from "sweetalert2";
import {
  Input,
  InputContainer, Label,
  LabelPadding, OptionButton,
  SendButton
} from "./styledComps";


class Form extends Component {
  state = {
    runActive: "",
    walkActive: "",
    bikeActive: "",
    km: "",
    time: "",
    type: ""
  };

  setRun = () => {
    this.setState({
      runActive: "active",
      walkActive: "",
      bikeActive: "",
      type: "Run"
    });
  };

  setWalk = () => {
    this.setState({
      runActive: "",
      walkActive: "active",
      bikeActive: "",
      type: "Walk"
    });
  };

  setBike = () => {
    this.setState({
      runActive: "",
      walkActive: "",
      bikeActive: "active",
      type: "Bike"
    });
  };

  submitForm = (e) => {
    e.preventDefault();
    if (!this.state.km &&
      !this.state.time &&
      !this.state.type) {
        swal.fire({
        title: "Everything is missing",
        text: "Nothing happened, just test!",
        icon: "error",
        confirmButtonText: "Not cool"
      })

    }
    else if (
      !this.state.km

    ) {
      swal.fire({
        title: "KM is missing",
        text: "Nothing happened, just test!",
        icon: "error",
        confirmButtonText: "Not cool"
      })
    }
    else if (!this.state.time) {
      swal.fire({
        title: "Time is missing is missing",
        text: "Nothing happened, just test!",
        icon: "error",
        confirmButtonText: "Not cool"
      })
    }
    else if(!this.state.type) {
swal.fire({
        title: "Type is missing is missing",
        text: "Nothing happened, just test!",
        icon: "error",
        confirmButtonText: "Not cool"
      })
    }

     else {swal.fire({
        title: "Alrighty!",
        text: "Nothing happened, just test!",
        icon: "success",
        confirmButtonText: "Cool"
      });
      this.setState({runActive: "",
    walkActive: "",
    bikeActive: "",
    km: "",
    time: "",
    type: ""})}

  };

  render() {
    return (
      <>
      <InputContainer>
        <form onSubmit={this.submitForm}>
          <Label>How many kilometers?</Label>
          <Input
            value={this.state.km}
            onChange={(event) => this.setState({ km: event.target.value })}
            type="number"
            placeholder="KM"
          />

            <Label>How much time it took you?</Label>
            <Input
              value={this.state.time}
              onChange={(event) => this.setState({ time: event.target.value })}
              type="time" step="1"

            />



          <LabelPadding>How?</LabelPadding>
          <OptionButton type="button" onClick={this.setRun} active={this.state.runActive}>
            Run
          </OptionButton>
          <OptionButton type="button" onClick={this.setWalk} active={this.state.walkActive}>
            Walk
          </OptionButton>
          <OptionButton type="button" onClick={this.setBike} active={this.state.bikeActive}>
            Bike
          </OptionButton>

          <SendButton type="submit">I am awesome!</SendButton>
        </form>
        </InputContainer>
      </>
    );
  }
}

export default Form;
