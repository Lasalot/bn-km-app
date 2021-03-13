import axios from "axios";
import React, { useEffect, useState } from "react";
import currRightAch from "../img/current-right.png";
import currLeftAch from "../img/far-left-current.png";
import doneLeftAch from "../img/far-left-done.png";
import doneRightAch from "../img/far-right-done.png";
import currMidAch from "../img/middle-current.png";
import doneMidAch from "../img/middle-done.png";
import ProgressBar from "./loadingbar";
import { Achievement, InputContainerAch, UploadMainButton } from "./styledComps";

function Achievements(props){

const [firstAchi, setFirstAchi] = useState("")
const [secondAchi, setSecondAchi] = useState("")
const [thirdAchi, setThirdAchi] = useState("")
const [sumDistance, setSumDistance] = useState("")
const [nextGoal, setNextGoal] = useState("100")
const [achiImg, setAchiImg] = useState({
  first:null,
  middle:null,
  last:null
})

//Get data about all distances (in KM) then set achievements accordingly
useEffect(() => {
  axios.get('http://localhost:8080/api/getoveralldistance').then(res => {
    setSumDistance(parseInt(res.data,10))
  })
}, [sumDistance])

function RevealAchi() {

if(sumDistance === 300) {
 // setWorkImage(doneRightAch)
  setFirstAchi("Active")
  setSecondAchi("Active")
  setThirdAchi("Active")
setNextGoal("300")
  setAchiImg({
    first: doneLeftAch,
    middle: doneMidAch,
    last: doneRightAch
  })
} else if (sumDistance >= 200) {
  setFirstAchi("Active")
  setSecondAchi("Active")
  setNextGoal("300")
  setAchiImg({
    first: doneLeftAch,
    middle: doneMidAch,
    last: currRightAch
  })
  console.log("asdfsadasdasdasdMÁSODIK")
} else if (sumDistance >= 100) {
  setFirstAchi("Active")
  setNextGoal("200")
  console.log("UTOLSÓ 100KM")
  setAchiImg({
    first: doneLeftAch,
    middle: currMidAch,
    last: currRightAch
  })
}
  return (
    null
  )

}


const leftDistance = parseInt(nextGoal,10)-parseInt(sumDistance,10)
const progressData = [
  {completed: Math.ceil(((nextGoal-leftDistance)/nextGoal)*100)},
];
  return (

<>
<InputContainerAch>
<UploadMainButton onClick={props.form}>Upload Awesomeness</UploadMainButton>
<div>
  <div>
    <h1 className="achievementTitleTop">So far we have done: </h1>
    <h2 className="achievementTitleTop">{sumDistance}Kms Together, we only need {leftDistance} Kms to unlock the next milestone!</h2>
    </div>
 <div className="progressbar">
      {progressData.map((item, idx) => (
        <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
      ))}</div>


    <div>
    {sumDistance ?
    <div className="achievementContainer" onLoad={() => RevealAchi()}>

        <p className="achievementTitle"> First achievement 100km<br></br><Achievement active={firstAchi} src={achiImg.first}/></p>
        <p className="achievementTitle"> Second achievement 200km <br></br><Achievement active={secondAchi} src={achiImg.middle}/></p>
        <p className="achievementTitle"> Third achievement 300km <br></br><Achievement active={thirdAchi} src={achiImg.last}/></p>
        <p style={{display:"none"}} className="achievementTitle"> Leave it here or the whole thing will be broken<Achievement active={thirdAchi} src={currLeftAch}/></p>
        <br></br>
        </div>

        : null}

  </div>
    </div>
    </InputContainerAch>
    </>
  )


}

export default Achievements;