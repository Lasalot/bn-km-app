import axios from "axios";
import React, { useEffect, useState } from "react";
import currLeftAch from "../img/far-left-current.png";
import doneLeftAch from "../img/far-left-done.png";
import currMidAch from "../img/middle-current.png";
import doneMidAch from "../img/middle-done.png";
import currRightAch from "../img/current-right.png";
import doneRightAch from "../img/far-right-done.png";
import { Achievement } from "./styledComps";
import ProgressBar from "./loadingbar";

function Achievements(props){

const [firstAchi, setFirstAchi] = useState("")
const [secondAchi, setSecondAchi] = useState("")
const [thirdAchi, setThirdAchi] = useState("")
const [sumDistance, setSumDistance] = useState("")
const [nextGoal, setNextGoal] = useState("100")
const [firstAchiImg, setFirstAchiImg] = useState("")
const [secondAchiImg, setSecondAchiImg] = useState("")
const [maybeWorkPlease, setWorkImage] = useState("")

//Get data about all distances (in KM) then set achievements accordingly
useEffect(() => {
  axios.get('http://localhost:8080/api/getoveralldistance').then(res => {
    setSumDistance(parseInt(res.data,10))
  })
}, [sumDistance])

function RevealAchi() {
  console.log("FUTOK????????????????????????????");
if(sumDistance >= 300) {
 // setWorkImage(doneRightAch)
  setFirstAchi("Active")
  setSecondAchi("Active")
  setThirdAchi("Active")
  setNextGoal("400")
  console.log("FIRST")
} else if (sumDistance >= 200) {
  setFirstAchi("Active")
  setSecondAchi("Active")
  setNextGoal("300")
  setFirstAchiImg(doneLeftAch)
  setSecondAchiImg(doneMidAch)
  //setWorkImage(doneRightAch)
  console.log("asdfsadasdasdasdMÁSODIK")
} else if (sumDistance >= 100) {
  setFirstAchi("Active")
  setNextGoal("200")
  console.log("UTOLSÓ 100KM")
  setFirstAchiImg(currLeftAch)
  setSecondAchiImg(currMidAch)
  setWorkImage(currRightAch)
}
  return (
    null
  )

}    


const leftDistance = parseInt(nextGoal,10)-parseInt(sumDistance,10)
const progressData = [
  { bgcolor: "#e84545", completed: Math.ceil(((nextGoal-leftDistance)/nextGoal)*100)},
];
  return (

<>
<button onClick={props.form}>Upload Awesomeness</button>
<div>
  <div>
    <h1 className="achievementTitle">Company wide achievements:</h1>
    <h2 className="achievementTitle">{sumDistance}km collected Together, Come on only {leftDistance} KMs to unlock the next milestone!</h2> 
    </div>
 <div className="progressbar">
      {progressData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}</div>

    
    <div>
    {sumDistance ?
    <div onLoad={() => RevealAchi()}>
      
        <p className="achievementTitle"> First achievement 100km<br></br><Achievement active={firstAchi} src={maybeWorkPlease}/></p>
<p className="achievementTitle"> Second achievement 200km <br></br><Achievement active={secondAchi} src={secondAchiImg}/></p>
        <p className="achievementTitle"> Third achievement 300km <br></br><Achievement active={thirdAchi} src={firstAchiImg}/></p>  
        <p className="achievementTitle"> Third achievement 300km <br></br><Achievement active={thirdAchi} src={currLeftAch}/></p> 
        <br></br>
        </div>
       
        : null}
        
    </div>
    </div>
    </>
  )


}

export default Achievements;