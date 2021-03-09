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
        <thead>
        <tr className="classTr">
<th className="classTh">Name</th>
<th className="classTh">Activity Type</th>
<th className="classTh">Kms</th>
<th className="classTh">Time</th>
</tr>
</thead>
<tbody>


        {ready ? <>{data.map(dataMapping)}</> : null }


</tbody>
        </Table>


    )
}

export default OverallDistances;