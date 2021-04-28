import axios from "axios"
import React, { useEffect, useState } from 'react'

export default function TopPerformer(props) {

  const [data, setData] = useState({
    topPerformerNameFirst:"",
    topPerformerDistanceFirst:"",
    topPerformerNameSecond:"",
    topPerformerDistanceSecond:""
  })

  const [deuce, setDeuce] = useState(false)
  // Get the name and number for the top performer, always a new query, it gives back the current data based on DB
useEffect(() => {
  axios.get("https://runzybackend.com/api/monthlytracker/topperformer", {
    params :{
      email: props.email
    }

  }).then(res => {

const data = Object.values(res.data)
console.log(data)
const kmFirst = parseFloat(data[0].kilometers)
const kmSecond = parseFloat(data[1].kilometers)
if (data[0].kilometers === data[1].kilometers) {


  setData({
    topPerformerNameFirst: data[0].who,
    topPerformerDistanceFirst: data[0].kilometers,
    topPerformerNameSecond: data[1].who,
    topPerformerDistanceSecond: data[1].kilometers

  })
  setDeuce(true)

} else if (kmFirst > kmSecond) {
  setData({
    topPerformerNameFirst: data[0].who,
    topPerformerDistanceFirst: data[0].kilometers

  })
  setDeuce(false)
}


  })
},[])

const sumKm = parseFloat(data.topPerformerDistanceFirst)

return (
<div>
  {deuce ? <c className="topPerf">Dead heat! Top performers of this month are currently <i style={{fontSize:"1.5rem"}}>{data.topPerformerNameFirst}</i> and <i style={{fontSize:"1.5rem"}}>{data.topPerformerNameSecond}</i> with the distance of {sumKm.toFixed(2)}Kms</c> :  <c className="topPerf">Currently the top performer of this month is <i style={{fontSize:"1.5rem"}}>{data.topPerformerNameFirst}</i> with the distance of {sumKm.toFixed(2)}Kms</c>}

  </div>

)
}

