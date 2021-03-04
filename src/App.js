import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import "./App.css";
import Form from "./components/Form";
import { RoundPicture, SignOutButton } from './components/styledComps';
import credentials from "./firebaseLogin/credentials";
import Logo from "./logo.png";
import Navbar from "./components/Navbar";



firebase.initializeApp(credentials
)
const auth = firebase.auth()
const firestore = firebase.firestore();




function signOut() {
  if (auth.currentUser) {
    auth.signOut()
  } else (alert("currently no logged in user"))


}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)

  }
  return (
    <button onClick={signInWithGoogle}>Sign in with google</button>
  )

}

const LoggedInUserPhoto = () => {
  return (
    <RoundPicture alt="loggedinuser" src={auth.currentUser.photoURL}></RoundPicture>
  )
}

 function App() {


  const[user] = useAuthState(auth)

  return (
    <div className="App">
      <section>
      {user ? <Navbar/> : null}
      </section>
      <img className="userLogo" alt="logo" src={Logo} />
      <h1>BitNinja Kilometer Tracker!</h1>
      {user ? <LoggedInUserPhoto/> : null}
      <section>
      {user ? <Form/> : <SignIn/>}
      </section>
      {user ? <SignOutButton onClick={() => signOut()}>Sign Out</SignOutButton> : null }
    </div>
  );
}


export default App