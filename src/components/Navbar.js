import React, { Component } from "react";
import { NavBar, NavButton } from "./styledComps";




class Navbar extends Component {
       state = {
        achievementActive: "active",
        homeActive: "",
        myDistancesActive: ""
    };
    setAchievement = () => {
        this.setState({
            achievementActive: "Active",
            homeActive: "",
            myDistancesActive: ""
        });
    };
    setHome = () => {
        this.setState({
            achievementActive: "",
            homeActive: "Active",
            myDistancesActive: ""
        });
    };

    setMyDistances = () => {
        this.setState({
            achievementActive: "",
            homeActive: "",
            myDistancesActive: "Active"
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
            Achievement
        </NavButton>
        <NavButton type="button" onClick={this.setMyDistances} active={this.state.myDistancesActive}>
            My distances
        </NavButton>
       </NavBar>
    </nav>

    </>
  );
  }}

  export default Navbar
