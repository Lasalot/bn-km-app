import axios from "axios";
import { useEffect, useState } from "react";
import OverallDistancesModel from "./models/overallDistancesModel";
import { InputContainerAch, Table } from "./styledComps";


function OverallDistances(props) {


const [data, setData] = useState()
const [ready, setReady] = useState(false)


  useEffect(() => {

    axios.get('http://localhost:8100/api/getalldistance', {
      params: {
        email: props.email
      }
    }).then(res => {
    setData(res.data)
    setReady(true)


      })
    }, []);

    function dataMapping(item) {
      return <OverallDistancesModel row_id={item.row_num}  key={item.id} kilometers={item.kilometers} steps={item.steps} who={item.who} mode={item.activity_type}/>
    }



    return (
      <InputContainerAch>
      <h1>Latest company wide entries</h1>


      <Table>
        <thead>
        <tr className="classTr">
<th className="classTh headColor1">Name</th>
<th className="classTh headColor2">Activity Type</th>
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

export default OverallDistances;