import axios from "axios"
import React, { useEffect, useState } from 'react'
import swal from 'sweetalert2'
import { PhysioLabel } from "./styledComps"



export default function Physiotherapy(props) {
  const email = props.email

const physioValue = "3000"
const [data, setData] = useState("")


useEffect(sendData, [])

function sendData(){
  let url = new URL("https://runzybackend.com/api/getoveralldistance")
        let params = {email: email}
        url.search = new URLSearchParams(params).toString()
         fetch(url)
    .then( (response) => {
     return response.json()
    }).then(data => setData(data))

 }

function eventHandler(){
  sendData();
  swal.fire({

    title: "Are you sure?",
    text:`You are about to upload 3Kms of Physiotherapy `,
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes I am sure",
    cancelButtonText: "Noooo!",
    }).then((result) => {

      const email = props.email
      const user = props.user
      if(result.value){
        console.log(data)
        axios.post('https://runzybackend.com/api/distance', {
                meters: physioValue,
                who: user,
                activity_type: "Physiotherapy",
                currentKms: data,
                email: email

              })
              setTimeout(() => {
                swal.fire({
                  title: "Success!",
                  text:"Data has been sent!",
                  icon: "success"
                })
              }, 3000)
        }



      else if (result.dismiss === swal.DismissReason.cancel) {
        swal.fire('Cancelled')


      }
})
}


return (
  <>

  <PhysioLabel onClick={() => eventHandler()} for="physio">Physiotherapy +3KM</PhysioLabel>
  <input  style={{display:"none"}} type="button" id="physio" value={physioValue}/>

  </>
)

}