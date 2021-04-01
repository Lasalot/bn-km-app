import axios from "axios";
import React, { Component } from "react";
import swal from "sweetalert2";
import Physio from "./physyotheraphy";
import {
    Input,
    InputContainer, Label,
    LabelPadding, OptionButton, SendButton, UploadLabel, InputContainerCollapsed
} from "./styledComps";

function showCollapsed(){
  var collapsedHeight = document.getElementById("inputContainerCollapsed").style.height;
  if(document.getElementById("inputContainerCollapsed").style.height === "10rem"){
    hideCollapsed();
  }
  else{
  document.getElementById("inputContainerCollapsed").style.height = "10rem";
  //document.getElementById("collapsed").style.display = "block";
  //document.getElementById("unCollapsedText").style.fontWeight = "400";
  document.getElementById("arrow").innerHTML = "▲";
  }
}
function hideCollapsed(){
  document.getElementById("inputContainerCollapsed").style.height = "2rem";
  //document.getElementById("collapsed").style.display = "none";
 // document.getElementById("unCollapsedText").style.fontWeight = "200";
  document.getElementById("arrow").innerHTML = "▼";
}

class Form extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentKms:"",
      countedKm: null,
      runActive:"Active",
      walkActive: "",
      bikeActive: "",
      rollerActive:"",
      file:null,
      fileName: "",
      meters: "",
      type: {
        mode:"Run",
        count:"Meters"
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
        count:"Meters"
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
        count:"Meters"
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
        count:"Meters"
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
        loaded:0,
        fileName: event.target.files[0].name
      })
    } else {
      swal.fire({
        icon: "error",
        text: "File is too big"
      })
    }

  }

  metersEventHandler = (event) => {
    this.setState({
      meters: event.target.value,
    })
    if (this.state.type.mode === "Walk"){
      this.setState({
        countedKm:((((this.state.meters*0.62)/1000)*10)).toFixed(3),
      })
    } else (

      this.setState({
        countedKm:((this.state.meters/1000)*10).toFixed(3),
      })

    )

  }

  submitForm = (e) => {

    e.preventDefault();
    // Fetch OverallSUM before the post requst fires//
    let url = new URL("http://localhost:8100/api/getoveralldistance")
    let params = {email: this.props.email}
    url.search = new URLSearchParams(params).toString()
    fetch(url)
.then( (response) => {
 return response.json()
}).then(data => this.setState({currentKms: data}))
////////////////////////////////////////////////////////////////////////////
    if (!this.state.meters &&
      !this.state.time &&
      !this.state.type) {
        swal.fire({
        title: "Everything is missing",
        icon: "error",
        confirmButtonText: "Not cool"
      })

    }
    else if (
      !this.state.meters

    ) {
      swal.fire({
        title: "Meter is missing",
        icon: "error",
        confirmButtonText: "Not cool"
      })
    }

    else if(!this.state.type) {
swal.fire({
        title: "Type is missing is missing",
        icon: "error",
        confirmButtonText: "Not cool"
      })
    }

     else {
               swal.fire({

          title: "Are you sure?",
          text:`You are about to upload ${this.state.countedKm} Kms of ${this.state.type.mode} `,
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes I am sure",
          cancelButtonText: "Noooo!",
          }).then((result) => {
            const email = this.props.email
            const user = this.props.currUser
            if(result.value){
              if(this.state.type.mode === "Walk"){
                console.log(this.state.currentKms)
                const data = new FormData();
                data.append('file', this.state.file);


                axios.post(`http://localhost:8100/api/distance`, {
                steps: this.state.meters,
                who: this.props.currUser,
                activity_type: this.state.type.mode,
                currentKms: this.state.currentKms,
                email: email
                });
                axios.post(`http://localhost:8100/api/upload?email=${email}&user=${user}`, data);
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
        file:null,
        fileName:"",
        meters: "",
        type: {
          mode:"Run",
          count:"Meters"
        }

                })

              }, 3000)

            } else if (this.state.type.mode === "Run" || "Bike" || "Roller Skates") {
              const data = new FormData();
              data.append('file', this.state.file);

                axios.post('http://localhost:8100/api/distance', {
                meters: this.state.meters,
                who: this.props.currUser,
                activity_type: this.state.type.mode,
                currentKms: this.state.currentKms,
                email: email

              });
              axios.post(`http://localhost:8100/api/upload?email=${email}&user=${user}`, data);
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
        fileName:"",
        file:null,
        meters: "",
        type: {
          mode:"Run",
          count:"Meters"
        }
                })

              }, 3000);



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
<InputContainerCollapsed id="inputContainerCollapsed" style={{height:"2rem"}}>
<div className="unCollapsed">
  <div className="unCollapsedButtonDiv"><button className="unCollapsedButton" id = "unCollapsedButton" onClick={showCollapsed}><div className="unCollapsedText" id="unCollapsedText">Extra activities</div><p className="arrow" id="arrow">▼</p></button></div>
<div className="collapsed" id="collapsed">
      <Physio email={this.props.email} user={this.props.currUser} />
      </div>
      </div>
      </InputContainerCollapsed>

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
          <OptionButton className="rollerFix" type="button" onClick={this.setRoller} active={this.state.rollerActive}>
          RollerSkate
          </OptionButton>

          <Label>How many {this.state.type.count}?</Label>
          <Input
            value={this.state.meters}
            onChange={this.metersEventHandler}
            type="number"
            min="1"
            placeholder={this.state.type.count}
          />
          <UploadLabel for="fileElem"> <div style={{paddingTop: "1rem"}}><div className="uploadTitle">{this.state.file ? <>Selected:{this.state.fileName}</> : "Upload a photo"}</div> </div></UploadLabel>
          <Input style={{display:"none"}} id="fileElem" onChange={this.fileChangeHandler} type="file" name="proof"/>









          <SendButton type="submit">I am awesome!</SendButton>



        </form>
        </InputContainer>
      



      </>
    );
  }
}

export default Form;
