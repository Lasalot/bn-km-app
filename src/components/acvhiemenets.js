import axios from "axios";
import React, { useEffect, useState } from "react";
import Achisecond from "../img/2245achi.png";
import Achifirst from "../img/420achi.png";
import Achithird from "../img/6400achi.png";
import UnknownAchi from "../img/unknownachi.png";
import ProgressBar from "./loadingbar";
import { Achievement, InputContainerAch, UploadMainButton } from "./styledComps";

function Achievements(props){
const [sumDistance, setSumDistance] = useState("0")
const [nextGoal, setNextGoal] = useState("420")
const [achiImg, setAchiImg] = useState({
  first: UnknownAchi,
  middle:UnknownAchi,
  last:UnknownAchi
})
const [achiActive, setAchiActive] = useState({
  firstAchi: "",
  secondAchi:"",
  thirdAchi:""
})




//Get data about all distances (in KM) then set achievements accordingly
useEffect(() => {
  axios.get('http://localhost:8080/api/getoveralldistance', {
    params: {
      email: props.email
    }
  }).then(res => {
    if (res.data === "")
    {setSumDistance("0")} else
    {setSumDistance(parseInt(res.data,10))}

  })
}, [sumDistance])

function RevealAchi() {

if(sumDistance >= 6400) {
  setNextGoal("12000")
setAchiActive({
  firstAchi:"Active",
  secondAchi:"Active",
  thirdAchi:"Active"
})

  setAchiImg({
    first: Achifirst,
    middle: Achisecond,
    last: Achithird
  })
} else if (sumDistance >= 2245) {

  setAchiActive({
    firstAchi: "Active",
    secondAchi:"Active"
  })
  setNextGoal("6500")
  setAchiImg({
    first: Achifirst,
    middle: Achisecond,
    last: UnknownAchi
  })

} else if (sumDistance >= 420) {
  setAchiActive({
    firstAchi:"Active"
  })
  setNextGoal("2245")
  setAchiImg({
    first: Achifirst,
    middle: UnknownAchi,
    last: UnknownAchi
  })
} else if (sumDistance === 0) {

  setAchiImg({
    first: UnknownAchi,
    middle: UnknownAchi,
    last: UnknownAchi
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
        <h1>Achievements</h1>
        <h5>Distances:</h5>
        <p className="achievementTitle"> 1. 420km<br></br><Achievement active={achiActive.firstAchi} src={achiImg.first}/></p>
        <p className="achievementTitle">2. 2245km <br></br><Achievement active={achiActive.secondAchi} src={achiImg.middle}/></p>
        <p className="achievementTitle"> 3. 6400km <br></br><Achievement active={achiActive.thirdAchi} src={achiImg.last}/></p>
        <p style={{display:"none" }} className="achievementTitle brokenShit"> Leave it here or the whole thing will be broken<Achievement active={achiActive.thirdAchi} src={UnknownAchi}/></p>
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