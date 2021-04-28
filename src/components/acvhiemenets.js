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
  firstAchiImg: UnknownAchi,
  secondAchiImg:UnknownAchi,
  thirdAchiImg:UnknownAchi,
  fourthAchiImg: UnknownAchi,
  fifthAchiImg: UnknownAchi,
  sixthAchiImg: UnknownAchi,
})
const [achiActive, setAchiActive] = useState({
  firstAchi: "",
  secondAchi:"",
  thirdAchi:"",
  fourthAchi:"",
  fifthAchi:"",
  sixthAchi:"",
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

  if(sumDistance >= 40075) {
//6. achi
    setNextGoal("100000")
  setAchiActive({
    firstAchi:"Active",
    secondAchi:"Active",
    thirdAchi:"Active",
    fourthAchi:"Active",
    fifthAchi:"Active",
    sixthAchi:"Active",
  })

    setAchiImg({
      firstAchiImg: Achifirst,
      secondAchiImg: Achisecond,
      thirdAchiImg: Achithird,
      fourthAchiImg: "idemegkellkep",
      fifthAchiImg: "idemegkellkep",
      sixthAchiImg: "idemegkellkep"
    })
  }

  else if(sumDistance >= 22530) {
//5. achi
    setNextGoal("40075")
  setAchiActive({
    firstAchi:"Active",
    secondAchi:"Active",
    thirdAchi:"Active",
    fourthAchi:"Active",
    fifthAchi: "Active"
  })

    setAchiImg({
      firstAchiImg: Achifirst,
      secondAchiImg: Achisecond,
      thirdAchiImg: Achithird,
      fourthAchiImg: "idemegkellkep",
      fifthAchiImg: "idemegkellkep",
      sixthAchiImg: UnknownAchi
    })
  }

 else if(sumDistance >= 8914) {
//4. achi
    setNextGoal("22530")
  setAchiActive({
    firstAchi:"Active",
    secondAchi:"Active",
    thirdAchi:"Active",
    fourthAchi:"Active",
  })

    setAchiImg({
      firstAchiImg: Achifirst,
      secondAchiImg: Achisecond,
      thirdAchiImg: Achithird,
      fourthAchiImg: "idemegkellkep",
      fifthAchiImg: UnknownAchi,
      sixthAchiImg: UnknownAchi
    })
  }

 else if(sumDistance >= 6400) {
   //3. achi
    console.log("6400")
    setNextGoal("12000")
  setAchiActive({
    firstAchi:"Active",
    secondAchi:"Active",
    thirdAchi:"Active"
  })

    setAchiImg({
      firstAchiImg: Achifirst,
      secondAchiImg: Achisecond,
      thirdAchiImg: Achithird,
      fourthAchiImg: UnknownAchi,
      fifthAchiImg: UnknownAchi,
      sixthAchiImg: UnknownAchi
    })
  } else if (sumDistance >= 2245) {
    //2. achi
    console.log("2245")
    setAchiActive({
      firstAchi: "Active",
      secondAchi:"Active"
    })
    setNextGoal("6400")
    setAchiImg({
      firstAchiImg: Achifirst,
      secondAchiImg: Achisecond,
      thirdAchiImg: UnknownAchi,
      fourthAchiImg: UnknownAchi,
      fifthAchiImg: UnknownAchi,
      sixthAchiImg: UnknownAchi
    })

  } else if (sumDistance >= 420) {
    //1. achi
    console.log("420")
    setAchiActive({
      firstAchi:"Active"
    })
    setNextGoal("2245")
    setAchiImg({
      firstAchiImg: Achifirst,
      secondAchiImg: UnknownAchi,
      thirdAchiImg: UnknownAchi,
      fourthAchiImg: UnknownAchi,
      fifthAchiImg: UnknownAchi,
      sixthAchiImg: UnknownAchi
    })
  } else if (sumDistance === 0) {
  console.log(sumDistance)
    setAchiImg({
      firstAchiImg: UnknownAchi,
      secondAchiImg: UnknownAchi,
      thirdAchiImg: UnknownAchi,
      fourthAchiImg: UnknownAchi,
      fifthAchiImg: UnknownAchi,
      sixthAchiImg: UnknownAchi
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
        <div className="achievementTitle"><p className="mainTitle">420km</p> <br></br><div className="subTitle">Let's get from Debrecen to Bratislava!</div><br></br><Achievement active={achiActive.firstAchi} src={achiImg.firstAchiImg}/></div>
        <div className="achievementTitle"><p className="mainTitle">2245km </p><br></br> <div className="subTitle">Let's get around Hungary!</div><br></br><Achievement active={achiActive.secondAchi} src={achiImg.secondAchiImg}/></div>
        <div className="achievementTitle"><p className="mainTitle">6400km </p><br></br> <div className="subTitle">Let's get over the Great Wall of China!</div><br></br><Achievement active={achiActive.thirdAchi} src={achiImg.thirdAchiImg}/></div>
        <div className="achievementTitle"><p className="mainTitle">8914km </p><br></br> <div className="subTitle">Let's go to Tokyo - Can we do it before the Olympics start?</div><br></br><Achievement active={achiActive.fourthAchi} src={achiImg.fourthAchiImg}/></div>
        <div className="achievementTitle"><p className="mainTitle">20530km </p><br></br> <div className="subTitle">Let's get from South Africa to Magadan, Russia!</div><br></br><Achievement active={achiActive.fifthAchi} src={achiImg.fifthAchiImg}/></div>
        <div className="achievementTitle"><p className="mainTitle">40075km </p><br></br> <div className="subTitle">Let's get around the Equator!</div><br></br><Achievement active={achiActive.sixthAchi} src={achiImg.sixthAchiImg}/></div>
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