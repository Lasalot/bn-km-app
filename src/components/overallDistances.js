import axios from "axios";
import { useEffect, useState } from "react";
import OverallDistancesModel from "./models/overallDistancesModel";



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
      <table>
        <thead>
        <tr>
<th>Name</th>
<th>Activity Type</th>
<th>Kilometers</th>
<th>Time</th>
</tr>
</thead>

        {ready ? <>{data.map(dataMapping)}</> : null }

        </table>


    )
}

export default OverallDistances;