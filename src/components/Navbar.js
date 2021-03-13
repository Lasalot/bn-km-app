import React, { Component } from "react";
import { NavBar, NavButton } from "./styledComps";



class Navbar extends Component {
        state = {
        teamTracker: "",
        homeActive: "active",
        myDistancesActive: "",
        upladFormActive: ""
    };
    setTeamTracker = () => {
        this.props.teamtracker();
        this.setState({
            teamTracker: "active",
            homeActive: "",
            myDistancesActive: "",
            upladFormActive: ""
        });
    };
    setHome = () => {
        this.props.home();

        this.setState({
            teamTracker: "",
            homeActive: "active",
            myDistancesActive: "",
            upladFormActive: ""
        });
    };

    setMyDistances = () => {
        this.props.mydistances();

        this.setState({
            teamTracker: "",
            homeActive: "",
            myDistancesActive: "active",
            upladFormActive: ""
        });
    }
    setUploadForm = () => {
        this.props.form();

        this.setState({
            teamTracker: "",
            homeActive: "",
            myDistancesActive: "",
            upladFormActive: "active"
        });
    }



  render(){
  return (
    <>
    <nav>
       <NavBar>
           <div className="NavDiv">
       <NavButton className="homeClassNav" type="button" onClick={this.setHome} active={this.props.isHomeActive}>
       Home
        </NavButton>
        <NavButton type="button" onClick={this.setTeamTracker} active={this.state.teamTracker}>
            Team Tracker
        </NavButton>
        <NavButton type="button" onClick={this.setMyDistances}  active={this.state.myDistancesActive}>
            My Profile
        </NavButton>
        <NavButton className="homeClassNav" type="button" onClick={this.setUploadForm}  active={this.props.isFormActive}>
           Upload
        </NavButton>
        <NavButton type="button" onClick={() => this.props.logOut()} >
            Sign Out
        </NavButton>
        </div>
       </NavBar>
    </nav>

    </>
  );
  }}

  export default Navbar
