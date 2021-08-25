import "./Card.css";
import { useState } from "react";
import Desc from "./Description";

const Card = ({ obj ,setA,a}) => {
  const [isloc, setIsloc] = useState(false);
const onHandle = () => {
    setIsloc(!isloc)
    setA(obj)
  
}

  return (
    <div>
     
      {/* {isloc ? (
        <div className="desc">     
            <img className="image1" src={obj.url} alt="" />
            <h2 className="descloc" >{obj.location} </h2>
            <p className="descpara" >{obj.desc} </p> 
            <button className="button" onClick={onHandle
            }>Go Back</button>
        </div>
      ) : ( <div
        className="card"
        onClick={onHandle}
      >
           <img className="image" src={obj.url} alt="" />
            <h2 style={{marginTop:"5px"}}>{obj.location} </h2>
      </div>        
         )} */}
          <div
        className="card"
        onClick={onHandle}
      >
           <img className="image" src={obj.url} alt="" />
            <h2  style={{marginTop:"5px",fontSize:"25px"}}>{obj.location} </h2>
      </div>        
         
    </div>
  );
};

export default Card;
