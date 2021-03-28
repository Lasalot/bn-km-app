import React, { Component } from "react";
import { UserName } from "../App";
import { MobileNav, MobileNavButton, NavBar, NavButton } from "./styledComps";

var widthVar = 50;
function MobileNavbar(){
    var currentStyle = document.getElementById("testDiv").style.display;
    if (currentStyle === "block"){
    reverse();
    }

    if (currentStyle !== "block"){
    document.getElementById("testDiv").style.display = "block";
    for (let i = 0; i < 50; i++) {
        setTimeout(function timer() {
            document.getElementById("testDiv").style.width = i + "%";
        }, i * 3);
      }
      widthVar = 50;
      document.getElementById("menuButton").style.display = "none";
};
}

function reverse(){
    document.getElementById("testDiv").style.width = widthVar + "%";
    widthVar--;
    if (0 < widthVar) {
      setTimeout(reverse, 3);
    }
    if(widthVar === 0){
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
        monthlyTracker:""
    };
    setTeamTracker = () => {
        this.props.teamtracker();
        this.setState({
            teamTracker: "active",
            homeActive: "",
            myDistancesActive: "",
            upladFormActive: "",
            monthlyTracker:"",
        });
    };
    setHome = () => {
        this.props.home();
        this.setState({
            teamTracker: "",
            homeActive: "active",
            myDistancesActive: "",
            upladFormActive: "",
            monthlyTracker:"",
        });
    };

    setMyDistances = () => {
        this.props.mydistances();
        this.setState({
            teamTracker: "",
            homeActive: "",
            myDistancesActive: "active",
            upladFormActive: "",
            monthlyTracker:"",
        });
    }
    setUploadForm = () => {
        this.props.form();
        this.setState({
            teamTracker: "",
            homeActive: "",
            myDistancesActive: "",
            upladFormActive: "active",
            monthlyTracker:"",
        });
    }
    setTeamTrackerM = () => {
        MobileNavbar();
        this.props.teamtracker();
        this.setState({
            teamTracker: "active",
            homeActive: "",
            myDistancesActive: "",
            upladFormActive: "",
            monthlyTracker:""
        });
    };
    setHomeM = () => {
        this.props.home();
        MobileNavbar();
        this.setState({
            teamTracker: "",
            homeActive: "active",
            myDistancesActive: "",
            upladFormActive: "",
            monthlyTracker:""
        });
    };

    setMyDistancesM = () => {
        this.props.mydistances();
        MobileNavbar();
        this.setState({
            teamTracker: "",
            homeActive: "",
            myDistancesActive: "active",
            upladFormActive: "",
            monthlyTracker:""
        });
    }
    setUploadFormM = () => {
        this.props.form();
        MobileNavbar();
        this.setState({
            teamTracker: "",
            homeActive: "",
            myDistancesActive: "",
            upladFormActive: "active",
            monthlyTracker:""
        });
    }

    setMonthlyTracker = () => {
        this.props.isMonthlyActive();
        this.setState({
            teamTracker: "",
            homeActive: "",
            myDistancesActive: "",
            upladFormActive: "",
            monthlyTracker:"active"
        });
    }

    setMonthlyTrackerM = () => {
        MobileNavbar();
        this.props.isMonthlyActive();
        this.setState({
            teamTracker: "",
            homeActive: "",
            myDistancesActive: "",
            upladFormActive: "",
            monthlyTracker:"active"
        })
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
        <MobileNav>
            <div className="navDivMobileMain">
                <button type="button" id="menuButton" className="dropDownButton" onClick={MobileNavbar} active={this.props.mobileNavActive}> <p className="menuSymbol">≡</p><p className="menuText">Menu</p> </button>
            </div>
            <div id="testDiv"className="navDivMobile">

                <button type="button" className="dropDownButtonBack" onClick={MobileNavbar} active={this.props.mobileNavActive}><div><div className="backDiv">Back</div><div className="loginUserDiv"><div className="testNameFix"><p className="loggedInUser"><UserName/></p></div></div></div></button>
                <button type="button" className="hiddenButton" onClick={MobileNavbar} active={this.props.mobileNavActive}></button>
                <MobileNavButton type="button" onClick={this.setHomeM} active={this.props.isHomeActive}>
                    Home
                </MobileNavButton>
                <MobileNavButton type="button" onClick={this.setTeamTrackerM} active={this.state.teamTracker}>
                    Team Tracker
                </MobileNavButton>
                <MobileNavButton type="button" onClick={this.setMonthlyTrackerM} active={this.state.monthlyTracker}>
                    Monthly Tracker
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

                <div className="brandingContainerMobile">
                    <p className="brandingMobile">Proudly made by Taki and Márk</p>
                </div>
            </div>
        </MobileNav>

       <NavBar>
           <div id="desktopNav"className="NavDiv">
            <div className="loggedInDivDesktop">
            <div className="backDivDesktop">
                <p className="loggedInUserDesktop">Logged In:</p>
            </div>
            <div className="loginUserDivDesktop">
                <UserName/>
            </div>

            </div>
       <NavButton className="homeClassNav" type="button" onClick={this.setHome} active={this.props.isHomeActive}>
       Home
        </NavButton>
        <NavButton type="button" onClick={this.setTeamTracker} active={this.state.teamTracker}>
            Team Tracker
        </NavButton>
        <NavButton type="button" onClick={this.setMonthlyTracker} active={this.state.monthlyTracker}>
            Monthly Tracker
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
        <div className="brandingContainerDesktop">
        <p className="brandingDesktop">Proudly made by Taki and Márk</p>
        </div>
        </div>


       </NavBar>
    </nav>

    </>
  );
  }}

  export default Navbar
