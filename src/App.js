import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import { useState } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import swal from "sweetalert2";
import "./App.css";
import Achievements from "./components/acvhiemenets";
import Form from "./components/Form";
import MyDistances from "./components/myDistances";
import Navbar from "./components/Navbar";
import OverallDistances from "./components/overallDistances";
import { RoundPicture } from './components/styledComps';
import credentials from "./firebaseLogin/credentials";
import Logo from "./logopcnew.png";

firebase.initializeApp(credentials
)
const auth = firebase.auth()
// const firestore = firebase.firestore();




const SignOut = () => {
  swal.fire({

    title: "Are you sure?",
    text:"You will be logged out",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes log me out",
    cancelButtonText: "No I wish to stay!",
    }).then((result) => {
      if(result.value){
        if (auth.currentUser) {
          auth.signOut()
        } else (alert("currently no logged in user"))

      } else if (result.dismiss === swal.DismissReason.cancel) {


      }

    })
}
//Sign in method with google
function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)

  }
  return (
    <button onClick={signInWithGoogle}>Sign in with google</button>
  )

}
//Get logged in user photo and render it
const LoggedInUserPhoto = () => {

  if(!auth.currentUser.photoURL){
    return (<h1>No picture has been found</h1>)
  } else {return (
    <RoundPicture alt="loggedinuser" src={auth.currentUser.photoURL}></RoundPicture>
  )}

}
const UserName = () => {
  return(<p className="loggedInUserName">{auth.currentUser.displayName}</p>);
}


 function App() {

const HomeActive = () => {
setHome("active")
setForm("")
setMyDistances("")
setTeamTrackerActive("")
}

const FormActive = () => {
  setHome("")
setForm("active")
setMyDistances("")
setTeamTrackerActive("")
}

const MyDistancesActive = () => {
  setHome("")
  setForm("")
  setMyDistances("active")
  setTeamTrackerActive("")
}

const TeamTrackerActive = () => {
  setHome("")
  setForm("")
  setMyDistances("")
  setTeamTrackerActive("active")
}




  const[user] = useAuthState(auth)
  const [home, setHome] = useState("active")
  const [form,setForm] = useState("")
  const [myDistances,setMyDistances] = useState("")
  const [teamTracker, setTeamTrackerActive] = useState("")




//All component which can be shown , based on their state
  const Components = () => {
    const gottenEmail = []
    gottenEmail.push(auth.currentUser.email)
    const ws = "@web-szerver.hu"
    const bn = "@bitninja.io"
    const filteredEmailBn = gottenEmail.filter(function (str) { return str.includes(bn)})
    const filteredEmailWs = gottenEmail.filter(function (str) { return str.includes(ws)})



if (filteredEmailBn.length > 0  || filteredEmailWs.length > 0) {

  if (home === "active") {
    return (
    <>
    <Achievements email={auth.currentUser.email} form={FormActive}/>
      </>
    );

  } else if (form === "active") {
    return(
      <>
      <Form email={auth.currentUser.email} currUser={auth.currentUser.displayName}/>
      </>
    )
  } else if (myDistances === "active") {
    return(<>
    <MyDistances  email={auth.currentUser.email} currUser={auth.currentUser.displayName}/>

    </>)
  } else if (teamTracker === "active") {
    return (
      <>
 <OverallDistances email={auth.currentUser.email}/>
      </>
    )
  }
} else {
  auth.signOut()
  window.location.replace("https://freefrontend.com/assets/img/403-forbidden-html-templates/403-Access-Forbidden-HTML-Template.gif");

}


  }


  return (

    <div className="App">
      <h1 className="welcomeMessage">Track the Kilometers!</h1>
      <img  className="userLogo" alt="logo" src={Logo} />
      <div>

      </div>
      {user ?  <Navbar isHomeActive={home} isFormActive={form} home={HomeActive} form={FormActive} mydistances={MyDistancesActive} teamtracker={TeamTrackerActive}  logOut={SignOut}/> : null }
      <section>
      {user ? <Components/>
       : <SignIn/>}
      </section>


    </div>
  );
}


export default  App;
export { LoggedInUserPhoto, UserName };

