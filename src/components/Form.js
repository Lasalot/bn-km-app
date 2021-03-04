import React, { Component } from "react";
import swal from "sweetalert2";
import {
  Input,
  InputContainer, Label,
  LabelPadding, OptionButton, SendButton,
} from "./styledComps";


class Form extends Component {
  state = {
    runActive:"Active",
    walkActive: "",
    bikeActive: "",
    km: "",
    time: "",
    type: {
      mode:"Run",
      count:"Kilometers"
    }
  };

  setRun = () => {
    this.setState({
      runActive: "active",
      walkActive: "",
      bikeActive: "",
      type: {
        mode:"Run",
        count:"Kilometers"
      }
    });
  };

  setWalk = () => {
    this.setState({
      runActive: "",
      walkActive: "active",
      bikeActive: "",
      type: {
        mode:"Walk",
        count:"Steps"
      }
    });
  };

  setBike = () => {
    this.setState({
      runActive: "",
      walkActive: "",
      bikeActive: "active",
      type: {
        mode:"Bike",
        count:"Kilometers"
      }
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

     else {
      
      swal.fire({
        
        title: "Are you sure?",
        text:"You will not be able to delete this later on",
        icon: "Warning",
        showCancelButton: true,
        confirmButtonText: "Yes I am sure",
        cancelButtonText: "Noooo!",
        }).then((result) => {
          if(result.value){
            swal.fire('Data sent(not really)!')
          } else if (result.dismiss === swal.DismissReason.cancel) {
            swal.fire('Cancelled')
          }
          
        })
        this.setState({runActive: "",
        walkActive: "",
        bikeActive: "",
        km: "",
        time: "",
        type: ""})


    }


  };

  componentDidMount(props) {
    swal.fire({
      title: "Yay you are back again!",
      text: "Up to add some meters huh?",
      icon: "success",
      confirmButtonText: "Ayeaye"
    })
  }

  render() {
    return (
      <>

      <InputContainer>
        <form onSubmit={this.submitForm}>
          <Label>How many {this.state.type.count}?</Label>
          <Input
            value={this.state.km}
            onChange={(event) => this.setState({ km: event.target.value })}
            type="number"
            placeholder={this.state.type.count}
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
            ‍Bike
          </OptionButton>

          <SendButton type="submit">I am awesome!</SendButton>
        </form>
        </InputContainer>

      </>
    );
  }
}

export default Form;
