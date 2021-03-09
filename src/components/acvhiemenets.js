import axios from "axios";
import React, { useEffect, useState } from "react";
import ach1 from "../img/1_achi.png";
import { Achievement } from "./styledComps";

function Achievements(props){

const [firstAchi, setFirstAchi] = useState()
const [secondAchi, setSecondAchi] = useState("")
const [thirdAchi, setThirdAchi] = useState("")
const [sumDistance, setSumDistance] = useState("")
const [nextGoal, setNextGoal] = useState("")


//Get data about all distances (in KM) then set achievements accordingly
useEffect(() => {
  axios.get('http://localhost:8080/api/getoveralldistance').then(res => {
    setSumDistance(parseInt(res.data,10))
  })
}, [sumDistance])

function RevealAchi() {
if(sumDistance >= 300) {
  setFirstAchi("Active")
  setSecondAchi("Active")
  setThirdAchi("Active")
  setNextGoal("400")
} else if (sumDistance >= 200) {
  setFirstAchi("Active")
  setSecondAchi("Active")
  setNextGoal("300")

} else if (sumDistance >= 100) {
  setFirstAchi("Active")
  setNextGoal("200")


}
  return (
    null
  )

}

const leftDistance = parseInt(nextGoal,10)-parseInt(sumDistance,10)

  return (

<>
<button onClick={props.form}>Upload Awesomeness</button>
<div>
    <h1>Company wide achievements</h1>
    <h2>{sumDistance}km collected Together, Come on only {leftDistance} KMs to unlock the next milestone!</h2>
    <p>Next goal is {nextGoal}km : {nextGoal}/{sumDistance}</p>
    <div>
    {sumDistance ?
    <div onLoad={() => RevealAchi()}>
<p> First achievement 100km <br></br><Achievement  active={firstAchi} src={ach1}/></p>
<p> Second achievement 200km <br></br><Achievement  active={secondAchi} src={ach1}/></p>
<p> Third achievement 300km <br></br><Achievement  active={thirdAchi} src={ach1}/></p>

        </div>
    : null}

    </div>
    </div>
    </>
  )


}

export default Achievements;