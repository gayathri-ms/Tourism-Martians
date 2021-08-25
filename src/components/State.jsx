import "./State.css";

import Array from "../Api.js";
import { useState } from "react";
import Type from "./type";
import Card from "./Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Desc from "./Description";
import Contact from "./Contact";

const type1 = [
  "Nature",
  "Temple",
  "Wildlife",
  "Fort",
  "Heritage",
  "Food",
  "Beach",
];
const type1url = [
  "https://images.cdn1.stockunlimited.net/preview1300/nature-icon_1695463.jpg",
  "https://k6u8v6y8.stackpathcdn.com/imgnew/pilgrimage-tour-01.svg",
  "https://k6u8v6y8.stackpathcdn.com/imgnew/wildlife-tour.svg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYOV3WIf4XOgcD731AVIzb5Lcv3TGFTDyVSg&usqp=CAU",
  "https://k6u8v6y8.stackpathcdn.com/imgnew/heritage-tour.svg",
  "https://png.pngtree.com/element_our/png/20180930/food-icon-design-vector-png_120564.jpg",
  "https://k6u8v6y8.stackpathcdn.com/imgnew/beach-tour.svg",
];

const State = ({ state }) => {
  const [istype, setIstype] = useState(false);
  const [index1, setIndex1] = useState(-1);
  const [a, setA] = useState("");

  const [names, setNames] = useState([]);
  var x;
  return (
    <div className="state">
      <div className="stated">
        <img className="stateImage" src={state.url} alt="" />
        <div className="descp">
          <h2>{state.state}</h2>
          <p className="para">{state.desc}</p>
        </div>
      </div>
      <div>
      <div className="cardsc">
        {type1.map((e, index) => {
          return (
           
              <div
                className="cardtype"
                onClick={() => {
                  setIstype(true);
                  // setIndex1(index);
                  setA("");
                  x = Array.filter(
                    (el) =>
                      (el.type === type1[index]) & (el.state === state.state)
                  );
                  setNames(x);
                  console.log("names==" + names);
                }}
              >
                <div>
                  <p>{e}</p>
                  <img
                    style={{ height: "100px", width: "120px" }}
                    src={type1url[index]}
                    alt=""
                  />
                </div>
              </div>
          
          );
        })}
          </div>
      </div>
      {
        a !== "" ? <Desc obj={a} setA={setA} /> : ""
        // {/* <button className="button" onClick={onHandle
        // }>Go Back</button> */}
      }
      
                

      {istype ? (
        <div className="cards">
          {names.length === 0 ? (
            <h2 style={{ display: "inline-block" ,marginTop:"20px" }}>No records found</h2>
          ) : (
            names.map((e, index) => {
              console.log("e" + e.location + "ind" + index);
              return <Card obj={e} setA={setA} a={a} />;
            })
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default State;
