import './Description.css'

const Desc=({obj,setA})=>{

    return(

        <div className="desc">     
            <img className="image1" src={obj.url} alt="" />
            <h2 className="descloc">{obj.location} </h2>
            <p className="descpara">{obj.desc} </p> 
            <button className="button" onClick={()=>{
                setA("")
            }
            }>Go Back</button>
        </div>
  )

    

}

export default Desc;