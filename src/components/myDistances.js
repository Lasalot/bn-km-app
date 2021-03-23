import axios from "axios";
import { useEffect, useState } from "react";
import Distances from "./models/myDistancesModel";
import { InputContainerAch, Table } from "./styledComps";



function MyDistances(props) {


const [data, setData] = useState()
const [ready, setReady] = useState(false)
const [sumKm, setSumKM] = useState("")
const currentUser = props.currUser

  useEffect(() => {

    axios.post('https://runzybackend.com/api/getuserdata', {
      email: props.email,
      user: currentUser

    }).then(res => {
    setData(res.data)
    setReady(true)


      })
    }, []);

const SumKilometer = (props) => {
  const parsedKm = parseFloat(props.sumkm,4)
  setSumKM(parsedKm.toFixed(2))
  return null
}

    function dataMapping(item) {

      return (<>
      <Distances  who={currentUser} email={props.email} id={item.id} key={item.id} kilometers={item.kilometers} who={item.who} mode={item.activity_type}/> <SumKilometer sumkm={item.sumkilometer}/>
      </>)

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
        <div className="sumDistanceContainer"> Overall you have done: <div className="sumDistance"> {sumKm}km </div></div>
        </InputContainerAch>

    )
}

export default MyDistances;