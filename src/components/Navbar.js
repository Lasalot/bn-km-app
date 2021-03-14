import React, { Component } from "react";
import { NavBar, NavButton, mobileNav, MobileNavButton } from "./styledComps";
import { LoggedInUserPhoto, UserName } from "../App"

var widthVar = 50;
var i = 0;
function MobileNavbar(){
    var currentStyle = document.getElementById("testDiv").style.display;
    var currentNav = document.getElementById("desktopNav").style.display;
    console.log(document.getElementById("testDiv").style.display);
    
    
    if (currentStyle === "block"){
    reverse();
    }
    
    if (currentStyle != "block"){
    document.getElementById("testDiv").style.display = "block";
    for (let i = 0; i < 50; i++) {
        setTimeout(function timer() {
            document.getElementById("testDiv").style.width = i + "%";
        }, i * 5);
      }
      widthVar = 50;
      i = 0;
      document.getElementById("menuButton").style.display = "none";
}; 
}

function reverse(){
    document.getElementById("testDiv").style.width = widthVar + "%";
    widthVar--;
    if (0 < widthVar) {
      setTimeout(reverse, 5);
    }
    if(widthVar == 0){
        document.getElementById("testDiv").style.display = "none";
        document.getElementById("menuButton").style.display = "block";
    }
}
class Navbar extends Component {
        state = {
        teamTracker: "",
        homeActive: "active",
        myDistancesActive: "",
        upladFormActive: "",
        mobileNavActive: "",
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
    setTeamTrackerM = () => {
        MobileNavbar();
        this.props.teamtracker();
        this.setState({
            teamTracker: "active",
            homeActive: "",
            myDistancesActive: "",
            upladFormActive: ""
        });
    };
    setHomeM = () => {
        this.props.home();
        MobileNavbar();
        this.setState({
            teamTracker: "",
            homeActive: "active",
            myDistancesActive: "",
            upladFormActive: ""
        });
    };

    setMyDistancesM = () => {
        this.props.mydistances();
        MobileNavbar();
        this.setState({
            teamTracker: "",
            homeActive: "",
            myDistancesActive: "active",
            upladFormActive: ""
        });
    }
    setUploadFormM = () => {
        this.props.form();
        MobileNavbar();
        this.setState({
            teamTracker: "",
            homeActive: "",
            myDistancesActive: "",
            upladFormActive: "active"
        });
    }
setMobile = () => {
    
this.setState({
    mobileNavActive: "active"
});

}


  render(){
  return (
    <>
    <nav>
        <mobileNav>
        <div className="navDivMobileMain">
        <button type="button" id="menuButton" className="dropDownButton" onClick={MobileNavbar} active={this.props.mobileNavActive}> Menu</button>
        </div>
        <div id="testDiv"className="navDivMobile">
        <button type="button" className="dropDownButtonBack" onClick={MobileNavbar} active={this.props.mobileNavActive}><div><div className="backDiv">Back</div><div className="loginUserDiv"><p className="loggedInUser"><UserName/></p></div></div></button>
        <MobileNavButton type="button" onClick={this.setHomeM} active={this.props.isHomeActive}>
       Home
        </MobileNavButton>
        <MobileNavButton type="button" onClick={this.setTeamTrackerM} active={this.state.teamTracker}>
            Team Tracker
            </MobileNavButton>
        <MobileNavButton type="button" onClick={this.setMyDistancesM}  active={this.state.myDistancesActive}>
            My Profile
            </MobileNavButton>
        <MobileNavButton type="button" onClick={this.setUploadFormM}  active={this.props.isFormActive}>
           Upload
           </MobileNavButton>
        <MobileNavButton className="logOut" type="button" onClick={() => this.props.logOut()} >
            Sign Out
            </MobileNavButton>
            
</div>
        </mobileNav>

       <NavBar>
           <div id="desktopNav"className="NavDiv">
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
        <NavButton className="logOut" type="button" onClick={() => this.props.logOut()} >
            Sign Out
        </NavButton>
        </div>
       </NavBar>
    </nav>

    </>
  );
  }}

  export default Navbar
