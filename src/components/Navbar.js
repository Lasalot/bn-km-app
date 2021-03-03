import React, { Component } from "react";
import {NavBar, NavButton} from "./styledComps"



    

class Navbar extends Component {
//const Navbar = (props) => {
    
    state = {
        achievementActive: "active",
        homeActive: ""
    };
    setAchievement = () => {
        this.setState({
            achievementActive: "Active",
            homeActive: ""
        });
    };
    setHome = () => {
        this.setState({
            achievementActive: "",
            homeActive: "Active"
        });
    };
    
   

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
       </NavBar>
    </nav>
    
    </>
  );
  }}

  export default Navbar
 