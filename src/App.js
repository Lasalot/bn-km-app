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
import Logo from "./logo.png";

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

 function App() {
const HomeActive = () => {
setHome(true)
setForm(false)
setMyDistances(false)
setAchievement(false)
}

const FormActive = () => {
  setHome(false)
setForm(true)
setMyDistances(false)
setAchievement(false)
}

const MyDistancesActive = () => {
  setHome(false)
  setForm(false)
  setMyDistances(true)
  setAchievement(false)
}

const AchievementsActive = () => {
  setHome(false)
  setForm(false)
  setMyDistances(false)
  setAchievement(true)
}




  const[user] = useAuthState(auth)
  const [home, setHome] = useState(true)
  const [form,setForm] = useState(false)
  const [myDistances,setMyDistances] = useState(false)
  const [achievements, setAchievement] = useState(false)




//All component which can be shown , based on their state
  const Components = () => {
   if (home === true) {
     return (
     <>
     <h1>Company wide distances</h1>
       <OverallDistances/>
       </>
     );

   } else if (form === true) {
     return(
       <>
       <Form currUser={auth.currentUser.displayName}/>
       </>
     )
   } else if (myDistances === true) {
     return(<>
     <MyDistances currUser={auth.currentUser.displayName}/>
     </>)
   } else if (achievements === true) {
     return (
       <>
  <Achievements/>
       </>
     )
   }

  }


  return (

    <div className="App">

      <section>
      {user ? <Navbar home={HomeActive} form={FormActive} mydistances={MyDistancesActive} achievements={AchievementsActive}  logOut={SignOut}/> : null}
      </section>
      <img  className="userLogo" alt="logo" src={Logo} />
      <h1>BitNinja Kilometer Tracker!</h1>
      {user ? <LoggedInUserPhoto/> : null}
      <section>
      {user ? <Components/>
       : <SignIn/>}
      </section>


    </div>
  );
}


export default App;