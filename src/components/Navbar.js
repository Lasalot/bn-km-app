import React, { Component } from "react";
import { NavBar, NavButton } from "./styledComps";



class Navbar extends Component {
       state = {
        achievementActive: "",
        homeActive: "active",
        myDistancesActive: "",
        upladFormActive: ""
    };
    setAchievement = () => {
        this.props.achievements();
        this.setState({
            achievementActive: "active",
            homeActive: "",
            myDistancesActive: "",
            upladFormActive: ""
        });
    };
    setHome = () => {
        this.props.home();

        this.setState({
            achievementActive: "",
            homeActive: "active",
            myDistancesActive: "",
            upladFormActive: ""
        });
    };

    setMyDistances = () => {
        this.props.mydistances();

        this.setState({
            achievementActive: "",
            homeActive: "",
            myDistancesActive: "active",
            upladFormActive: ""
        });
    }
    setUploadForm = () => {
        this.props.form();

        this.setState({
            achievementActive: "",
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
       <NavButton type="button" onClick={this.setHome} active={this.state.homeActive}>
       Home
        </NavButton>
        <NavButton type="button" onClick={this.setAchievement} active={this.state.achievementActive}>
            Achievements
        </NavButton>
        <NavButton type="button" onClick={this.setMyDistances}  active={this.state.myDistancesActive}>
            My distances
        </NavButton>
        <NavButton type="button" onClick={this.setUploadForm}  active={this.state.upladFormActive}>
           Upload Form
        </NavButton>
        <NavButton type="button" onClick={() => this.props.logOut()} >
            Sign Out
        </NavButton>
       </NavBar>
    </nav>

    </>
  );
  }}

  export default Navbar
