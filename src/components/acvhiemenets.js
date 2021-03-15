import axios from "axios";
import React, { useEffect, useState } from "react";
import Achifirst from "../img/420achi.png";
import UnknownAchi from "../img/unknownachi.png";
import ProgressBar from "./loadingbar";
import { Achievement, InputContainerAch, UploadMainButton } from "./styledComps";

function Achievements(props){
const [sumDistance, setSumDistance] = useState("")
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
    setSumDistance(parseInt(res.data,10))
  })
}, [sumDistance])

function RevealAchi() {

if(sumDistance >= 1500) {

setAchiActive({
  firstAchi:"Active",
  secondAchi:"Active",
  thirdAchi:"Active"
})

  setAchiImg({
    first: Achifirst,
    middle: Achifirst,
    last: Achifirst
  })
} else if (sumDistance >= 820) {

  setAchiActive({
    firstAchi: "Active",
    secondAchi:"Active"
  })
  setNextGoal("1500")
  setAchiImg({
    first: Achifirst,
    middle: Achifirst,
    last: UnknownAchi
  })

} else if (sumDistance >= 420) {
  setAchiActive({
    firstAchi:"Active"
  })
  setNextGoal("820")
  setAchiImg({
    first: Achifirst,
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

    {sumDistance ? <div className="progressbar">

   {progressData.map((item, idx) => (
     <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
   ))}</div> : null}



    <div>
    {sumDistance ?
    <div className="achievementContainer" onLoad={() => RevealAchi()}>
        <h1>Achievements</h1>
        <h5>Distances</h5>
        <p className="achievementTitle"> 1. 420km<br></br><Achievement active={achiActive.firstAchi} src={achiImg.first}/></p>
        <p className="achievementTitle">2. 820km <br></br><Achievement active={achiActive.secondAchi} src={achiImg.middle}/></p>
        <p className="achievementTitle"> 3. 1500km <br></br><Achievement active={achiActive.thirdAchi} src={achiImg.last}/></p>
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