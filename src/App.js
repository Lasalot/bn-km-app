import "./App.css";
import Form from "./components/Form";
import Logo from "./logo.png";

export default function App() {
  return (
    <div className="App">
      <img alt="logo" src={Logo} />
      <h1>BitNinja Kilometer Tracker!</h1>

      <Form />
    </div>
  );
}
