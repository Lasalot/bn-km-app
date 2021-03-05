import axios from "axios";
import React, { Component } from "react";
import swal from "sweetalert2";
import {
  Input,
  InputContainer, Label,
  LabelPadding, OptionButton, SendButton
} from "./styledComps";


class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      runActive:"Active",
      secretpass:"",
      walkActive: "",
      bikeActive: "",
      km: "",
      time: "",
      type: {
        mode:"Run",
        count:"Kilometers"
      }
    };
  }





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
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes I am sure",
        cancelButtonText: "Noooo!",
        }).then((result) => {
          if(result.value){
            if(this.state.type.mode === "Walk"){axios.post('http://localhost:8080/api/distance', {
              steps: this.state.km,
              who: this.props.currUser,
              time: this.state.time,
              activity_type: this.state.type.mode,
              password: this.state.secretpass
            });
            setTimeout(() => {
              this.setState({
                runActive:"Active",
      walkActive: "",
      bikeActive: "",
      secretpass: "",
      km: "",
      time: "",
      type: {
        mode:"Run",
        count:"Kilometers"
      }
              })
            }, 2000)} else if (this.state.type.mode === "Run" || "Bike") { console.log("bike or run")

              axios.post('http://localhost:8080/api/distance', {
              kilometers: this.state.km,
              who: this.props.currUser,
              time: this.state.time,
              activity_type: this.state.type.mode,
              password: this.state.secretpass
            });
            setTimeout(() => {
              swal.fire({
                title: "Success!",
                text:"Data has been sent!(BIKERUN)",
                icon: "success"
              })
              this.setState({
                runActive:"Active",
      walkActive: "",
      bikeActive: "",
      secretpass:"",
      km: "",
      time: "",
      type: {
        mode:"Run",
        count:"Kilometers"
      }
              })
            }, 2000)

            }



          } else if (result.dismiss === swal.DismissReason.cancel) {
            swal.fire('Cancelled')

          }

        })



    }


  };

  // componentDidMount(props) {
  //   swal.fire({
  //     title: "Yay you are back again!",
  //     text: "Up to add some meters huh?",
  //     icon: "success",
  //     confirmButtonText: "Ayeaye"
  //   })
  // }

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
        <Input onChange={(event) => this.setState({secretpass: event.target.value})} placeholder="ultratitkosatomjelszo" tpye="text"/>

      </>
    );
  }
}

export default Form;
