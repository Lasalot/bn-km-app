import axios from "axios"
import React, { useEffect, useState } from 'react'

export default function TopPerformer(props) {

  const [data, setData] = useState({
    topPerformerName:"",
    topPerformerDistance:""
  })
  // Get the name and number for the top performer, always a new query, it gives back the current data based on DB
useEffect(() => {
  axios.get("http://localhost:8100/api/monthlytracker/topperformer", {
    params :{
      email: props.email
    }

  }).then(res => {

const data = Object.values(res.data)
setData({
  topPerformerName: data[0].who,
  topPerformerDistance: data[0].kilometers,
  ready:true
})
  })
},[])

const sumKm = parseFloat(data.topPerformerDistance)

return (
  <h1>Currently the top performer of this month is <i style={{fontSize:"30px"}}>{data.topPerformerName}</i> with the distance of {sumKm.toFixed(2)}Kms</h1>
)
}