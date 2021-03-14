import axios from "axios";
import React, { Component } from "react";
import swal from "sweetalert2";
import {
  Input,
  InputContainer, Label,
  LabelPadding, OptionButton, SendButton, UploadLabel, OptionButtonR
} from "./styledComps";




class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      runActive:"Active",
      secretpass:"",
      walkActive: "",
      bikeActive: "",
      rollerActive:"",
      file:null,
      km: "",
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
      rollerActive:"",
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
      rollerActive:"",
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
      rollerActive:"",
      type: {
        mode:"Bike",
        count:"Kilometers"
      }
    });
  };

  setRoller = () => {
    this.setState({
      runActive: "",
      walkActive: "",
      bikeActive: "",
      rollerActive: "active",
      type: {
        mode:"Roller Skates",
        count:"Kilometers"
      }
    });
  };

  checkFileSize=(event)=>{
    let files = event.target.files
    let size = 10000000 //bytes in binary
    let err = "";
    for(var x = 0; x<files.length; x++) {
    if (files[x].size > size) {
     err += files[x].type+'is too large, please pick a smaller file\n';
   }
 };
 if (err !== '') {
    event.target.value = null
    console.log(err)
    return false
}

return true;

}

  fileChangeHandler = (event) => {
    if(this.checkFileSize(event)){
      this.setState({
        file: event.target.files[0],
        loaded:0
      })
    } else {
      swal.fire({
        icon: "error",
        text: "File is too big"
      })
    }

  }

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

    else if(!this.state.type) {
swal.fire({
        title: "Type is missing is missing",
        text: "Nothing happened, just test!",
        icon: "error",
        confirmButtonText: "Not cool"
      })
    }

     else {
       if(this.state.secretpass !== "bitninja"){
         swal.fire({
           title: "Wrong jelsaw!",
           icon: "warning"
         })
       } else {
        swal.fire({

          title: "Are you sure?",
          text:"You will not be able to delete this later on",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes I am sure",
          cancelButtonText: "Noooo!",
          }).then((result) => {
            if(result.value){
              if(this.state.type.mode === "Walk"){
                const data = new FormData();
                data.append('file', this.state.file);

                axios.post('http://localhost:8080/api/distance', {
                steps: this.state.km,
                who: this.props.currUser,
                activity_type: this.state.type.mode,
                password: this.state.secretpass});
                axios.post('http://localhost:8080/api/upload', data);
              setTimeout(() => {
                swal.fire({
                  title: "Success!",
                  text:"Data has been sent!",
                  icon: "success"
                })
                this.setState({
                  runActive:"Active",
        walkActive: "",
        bikeActive: "",
        rollerActive:"",
        secretpass: "",
        file:null,
        km: "",
        type: {
          mode:"Run",
          count:"Kilometers"
        }

                })

              }, 2000)
              setTimeout(() => {
                window.location.reload(false)
              }, 4000)
            } else if (this.state.type.mode === "Run" || "Bike" || "Roller Skates") {
              const data = new FormData();
              data.append('file', this.state.file);

                axios.post('http://localhost:8080/api/distance', {
                kilometers: this.state.km,
                who: this.props.currUser,
                activity_type: this.state.type.mode,
                password: this.state.secretpass
              });
              axios.post('http://localhost:8080/api/upload', data);
              setTimeout(() => {
                swal.fire({
                  title: "Success!",
                  text:"Data has been sent!",
                  icon: "success"
                })
                this.setState({
                  runActive:"Active",
        walkActive: "",
        bikeActive: "",
        file:null,
        secretpass:"",
        rollerActive:"",
        km: "",
        type: {
          mode:"Run",
          count:"Kilometers"
        }
                })

              }, 2000);

              setTimeout(() => {
                window.location.reload(false)
              }, 4000)

              }



            } else if (result.dismiss === swal.DismissReason.cancel) {
              swal.fire('Cancelled')

            }

          })

       }





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
          <OptionButtonR className="rollerFix" type="button" onClick={this.setRoller} active={this.state.rollerActive}>
            Roller Skate
          </OptionButtonR>

          <Label>How many {this.state.type.count}?</Label>
          <Input
            value={this.state.km}
            onChange={(event) => this.setState({ km: event.target.value })}
            type="number"
            min="1"
            placeholder={this.state.type.count}
          />
          <UploadLabel for="fileElem"> <div style={{paddingTop: "1rem"}}><div className="uploadTitle">Select a photo</div> </div></UploadLabel>
          <Input style={{display:"none"}} id="fileElem" onChange={this.fileChangeHandler} type="file" name="proof"/>









          <SendButton type="submit">I am awesome!</SendButton>
          
        </form>
        </InputContainer>
        <Input onChange={(event) => this.setState({secretpass: event.target.value})} placeholder="ultratitkosatomjelszo" tpye="text"/>
        
      </>
    );
  }
}

export default Form;
