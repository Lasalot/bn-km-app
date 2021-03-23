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
  axios.get('https://runzybackend.com/api/getoveralldistance', {
    params: {
      email: props.email
    }
  }).then(res => {
    if (res.data === "")
    {setSumDistance("0")} else
    {setSumDistance(parseFloat(res.data))}

  });
  if(sumDistance >= 6400) {
    console.log("6400")
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
    console.log("2245")
    setAchiActive({
      firstAchi: "Active",
      secondAchi:"Active"
    })
    setNextGoal("6400")
    setAchiImg({
      first: Achifirst,
      middle: Achisecond,
      last: UnknownAchi
    })

  } else if (sumDistance >= 420) {
    console.log("420")
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
  console.log(sumDistance)
    setAchiImg({
      first: UnknownAchi,
      middle: UnknownAchi,
      last: UnknownAchi
    })
  }

}, [sumDistance])





const leftDistance = parseInt(nextGoal,10).toFixed(2)-parseFloat(sumDistance).toFixed(2)
const leftDistanceFixed = leftDistance.toFixed(2)
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
    <h2 className="achievementTitleTop">{parseFloat(sumDistance).toFixed(2)}Kms Together, we only need {leftDistanceFixed} Kms to unlock the next milestone!</h2>
    </div>

     <div className="progressbar">

   {progressData.map((item, idx) => (
     <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
   ))}</div>



    <div>
    {sumDistance ?
    <div className="achievementContainer">
        <h1  className="mainAchTitle">Achievements</h1>
        <div className="achievementTitle"><p className="mainTitle">420km</p> <br></br><div className="subTitle">Let's get from Debrecen to Bratislava!</div><br></br><Achievement active={achiActive.firstAchi} src={achiImg.first}/></div>
        <div className="achievementTitle"><p className="mainTitle">2245km </p><br></br> <div className="subTitle">Let's get around Hungary!</div><br></br><Achievement active={achiActive.secondAchi} src={achiImg.middle}/></div>
        <div className="achievementTitle"><p className="mainTitle">6400km </p><br></br> <div className="subTitle">Let's get over the Great Wall of China!</div><br></br><Achievement active={achiActive.thirdAchi} src={achiImg.last}/></div>
        <div style={{display:"none" }} className="achievementTitle brokenShit"> Leave it here or the whole thing will be broken<Achievement active={achiActive.thirdAchi} src={UnknownAchi}/></div>
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