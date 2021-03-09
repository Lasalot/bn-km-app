import axios from "axios";
import { useEffect, useState } from "react";
import Distances from "./models/myDistancesModel";
import { Table } from "./styledComps";



function MyDistances(props) {


const [data, setData] = useState()
const [ready, setReady] = useState(false)
const currentUser = props.currUser

  useEffect(() => {

    axios.post('http://localhost:8080/api/getuserdata', {
      user: currentUser

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
        <thead>
        <tr className="classTr">
        <th className="classTh">Name</th>
<th className="classTh modeClass">Activity Type</th>
<th className="classTh">Kms</th>
<th className="classTh modeClass">Time</th>
</tr>
</thead>
<tbody>
        {ready ? <>{data.map(dataMapping)}</> : null }
</tbody>
        </Table>


    )
}

export default MyDistances;