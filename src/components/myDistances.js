import axios from "axios";
import { useEffect, useState } from "react";
import Distances from "./models/myDistancesModel";



function MyDistances(props) {

console.log("MyDistances")
const [data, setData] = useState()
const [ready, setReady] = useState(false)

const user = props.currUser
  useEffect(() => {

    axios.get('http://localhost:8080/api/getalldistance', {
      user: user
    }).then(res => {
    setData(res.data)
    setReady(true)


      })
    }, []);

    function dataMapping(item) {
      return <Distances key={item.id} kilometers={item.kilometers} steps={item.steps} who={item.who} time={item.time} mode={item.activity_type}/>
    }

    return (
      <div>
        {ready ? <>{data.map(dataMapping)}</> : null }
      </div>


    )
}

export default MyDistances;