import axios from "axios";
import { useEffect, useState } from "react";
import OverallDistancesModel from "./models/overallDistancesModel";
import { Table } from "./styledComps";


function OverallDistances(props) {


const [data, setData] = useState()
const [ready, setReady] = useState(false)


  useEffect(() => {

    axios.get('http://localhost:8080/api/getalldistance').then(res => {
    setData(res.data)
    setReady(true)


      })
    }, []);

    function dataMapping(item) {
      return <OverallDistancesModel key={item.id} kilometers={item.kilometers} steps={item.steps} who={item.who} time={item.time} mode={item.activity_type}/>
    }

    return (
      <Table>
        <tableHead>
        <tr class="classTr">
<th class="classTh">Name</th>
<th class="classTh">Activity Type</th>
<th class="classTh">Kms</th>
<th class="classTh">Time</th>
</tr>
</tableHead>
<tr class="classTr">
        {ready ? <>{data.map(dataMapping)}</> : null }
</tr>
        </Table>


    )
}

export default OverallDistances;