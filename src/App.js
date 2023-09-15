import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Display from "./Components/Displayuser/Display";

function App() {
  const [userData,setUserdata] = useState([])
  return <div className="App">
    <div className="overlay"></div>
    <Navbar setUserdata={setUserdata} userData={userData}/>
    <Display userData={userData}/>
  </div>;
}

export default App;
