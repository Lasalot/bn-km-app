import axios from "axios";
import React, { useEffect, useState } from 'react';
import AdminAreaModel from "./models/adminAreaModel";
import { InputContainerAch, Table } from "./styledComps";


export default function AdminArea(props) {

  const [data, setData] = useState("")
  const[ready, setReady] = useState(false)
  useEffect(() => {

    axios.get('https://runzybackend.com/api/getalldistance/overall', {
      params: {
        email: props.email
      }
    }).then(res => {
    setData(res.data)
    setReady(true)

      })
    }, []);

    function dataMapping(item) {
      return <AdminAreaModel key={item.id} kilometers={item.kilometers} steps={item.steps} who={item.who} date_created={item.date_created} overall_km_after_upload={item.overall_km_after_upload} mode={item.activity_type}/>
    }

  return (
    <>
    <h1>Admin Area</h1>
    <p>Company wide overall entries</p>
    <InputContainerAch>
      <Table>
        <thead>
        <tr className="classTr">
<th className="classTh headColor1">Name</th>
<th className="classTh headColor2">Activity Type</th>
<th className="classTh headColor3">Kms</th>
<th className="classTh headColor3">Entry added on</th>


</tr>
</thead>
<tbody>


        {ready ? <>{data.map(dataMapping)}</> : null }


</tbody>
        </Table>
        </InputContainerAch>
    </>
  )
}