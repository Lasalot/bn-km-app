import axios from "axios";
import { useEffect, useState } from "react";
import Distances from "./models/myDistancesModel";
import { Table } from "./styledComps";



function MyDistances(props) {


const [data, setData] = useState()
const [ready, setReady] = useState(false)


  useEffect(() => {

    axios.post('http://localhost:8080/api/getuserdata', {
      user: props.currUser

    }).then(res => {
    setData(res.data)
    setReady(true)


      })
    }, []);

    function dataMapping(item) {
      return <Distances key={item.id} kilometers={item.kilometers} who={item.who} time={item.time} mode={item.activity_type}/>
    }

    return (
      <Table>
        <tableHead>
        <tr class="classTr">
        <th class="classTh">Name</th>
<th class="classTh modeClass">Activity Type</th>
<th class="classTh">Kms</th>
<th class="classTh modeClass">Time</th>
</tr>
</tableHead>
<tr class="classTr">
        {ready ? <>{data.map(dataMapping)}</> : null }
        </tr>
        </Table>


    )
}

export default MyDistances;