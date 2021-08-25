import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { useState } from "react";
import State1 from "../stateApi";
import State from "./State";
import "./navigation.css";
import Home from "./Home";

const Nav = () => {
  const [state, setState] = useState({
    state: "",
    desc: "",
    url: "",
  });
  //   const [dest,setDest]=useState("")
  const handle = (name) => (e) => {
    const x = State1.filter((el) => el.state === name);
    console.log("x=", x);
    setState(x[0]);
    setHome(false);


  };
  const [home,setHome]=useState(true)
  const handloo=()=>{
    setHome(true);
    setState({})

     
  }

  return (
    <div>
      <div className="nav">
        <h3 className="Home" onClick={handloo}>
          Home
        </h3>
        <div>
        <div class="dropdown">
            <h3 className="Home" >Destination</h3>
            <div class="dropdown-content">
            <p onClick={handle("Andhra Pradesh")}> Andhra Pradesh </p>
          <p onClick={handle("Kerala")}> Kerala </p>
          <p onClick={handle("Madhya Pradesh")}> Madhya Pradesh </p>
          <p onClick={handle("Maharashtra")}> Maharashtra </p>
          <p onClick={handle("Delhi")}> Delhi </p>
         
             </div>
            </div>
         
          
         </div>

        <br></br>
      </div>
    <div> {home===true?<Home/>:""}</div> 
      {(state.state !== ""&state !== {} &home===false)? <State state={state} /> : ""}
    </div>
  );
};
export default Nav;
