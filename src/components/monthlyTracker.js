import axios from "axios";
import React, { useEffect, useState } from 'react';
import ActivitySum from "./models/activitySumModel";
import { InputContainerAch, Table } from "./styledComps";
import TopPerformer from "./topPerformer";

function MonthlyTracker(props) {
const [data, setData] = useState({

  activityTypes:"",
  gotData: false,
  noPerformer: "We have got no one yet",
  emailData: props.email

})


function fetchData() {
  axios.get("http://localhost:8100/api/monthlytracker/sumactivity", {
    params :{
      email: data.emailData
    }

  }).then(res => {
if(res.data.length === 0) {
  console.log("got no data")
}
else (
  setData({
    activityTypes:res.data,
    gotData: true
  })
)



  })
}
//Get the sum amount of Acitivity Types for the current month
useEffect(fetchData,[])

function dataMapping(item) {
  return (
    <>
    <ActivitySum  key={item.row_num} rowNumber={item.row_num} key={item.row_num} kilometers={item.sumActivity} activity_type={item.activity_type}/>
    </>
  )
}

  return(
    <div>
      
      <InputContainerAch>
      <h1>Top activities in this month (team overall)</h1>
      <Table>
        <thead>
        <tr className="classTr">
        <th className="classTh headColor1">Place</th>
        <th className="classTh headColor2">Activity</th>
<th className="classTh modeClass headColor3">Overall sum in this month</th>

</tr>
</thead>
<tbody>
        {data.gotData ? <> {data.activityTypes.map(dataMapping)}</> : null }
</tbody>
        </Table>
        {data.gotData ? <TopPerformer  email={props.email}/> : <h3>There is no displayable data yet</h3>}
        </InputContainerAch>
    </div>
  )
}

export default MonthlyTracker;