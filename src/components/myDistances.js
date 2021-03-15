import axios from "axios";
import { useEffect, useState } from "react";
import Distances from "./models/myDistancesModel";
import { InputContainerAch, Table } from "./styledComps";



function MyDistances(props) {


const [data, setData] = useState()
const [ready, setReady] = useState(false)
const currentUser = props.currUser

  useEffect(() => {

    axios.post('http://localhost:8080/api/getuserdata', {
      email: props.email,
      user: currentUser

    }).then(res => {
    setData(res.data)
    setReady(true)


      })
    }, []);

    function dataMapping(item) {
      return <Distances key={item.id} kilometers={item.kilometers} who={item.who} mode={item.activity_type}/>
    }

    return (

      <InputContainerAch>
      <Table>
        <thead>
        <tr className="classTr">
        <th className="classTh headColor1">Name</th>
<th className="classTh modeClass headColor2">Activity Type</th>
<th className="classTh headColor3">Kms</th>

</tr>
</thead>
<tbody>
        {ready ? <>{data.map(dataMapping)}</> : null }
</tbody>
        </Table>
        </InputContainerAch>

    )
}

export default MyDistances;